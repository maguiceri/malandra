(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     Configuración
     ------------------------------------------------------------------------ */

  // Cuando esté la cuenta de Woki, pegar acá el link de reservas.
  // Con el link cargado, el formulario se reemplaza por un botón que lleva a Woki.
  var WOKI_URL = '';

  var WHATSAPP = '5491130154527';
  // Turnos que se ofrecen en el formulario (cada 30 minutos).
  var TURNOS = [
    { label: 'Mediodía', from: '12:00', to: '15:30' },
    { label: 'Noche', from: '20:00', to: '23:00' },
  ];
  var MAX_PERSONAS = 12;

  var menu = window.MALANDRA_MENU || { categories: [] };
  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var $ = function (id) { return document.getElementById(id); };
  var money = function (n) { return '$' + Math.round(n).toLocaleString('es-AR'); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var fold = function (s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); };
  var sentence = function (s) { s = s.toLowerCase(); return s.charAt(0).toUpperCase() + s.slice(1); };
  var plural = function (n, one, many) { return n + ' ' + (n === 1 ? one : many); };
  var clamp = function (n) { return Math.max(0, Math.min(1, n)); };

  var ICON_NEXT = '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M5 12h14m0 0-6-6m6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var ICON_GRID = '<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path d="M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z" fill="currentColor"/></svg>';

  /* ------------------------------------------------------------------------
     Datos
     ------------------------------------------------------------------------ */

  var dishes = new Map();
  var featured = null;
  var cats = [];

  menu.categories.forEach(function (c, i) {
    var all = c.items.concat((c.subcategories || []).reduce(function (acc, s) { return acc.concat(s.items); }, []));
    all.forEach(function (d) { if (!dishes.has(d.id)) dishes.set(d.id, d); });
    if (i === 0 && /destacad/i.test(c.name)) { featured = c; return; }
    var withPhoto = all.filter(function (d) { return d.image; })[0];
    cats.push({ id: c.id, name: c.name, items: c.items, subcategories: c.subcategories || [], all: all, cover: withPhoto ? withPhoto.image : null });
  });
  var catById = new Map(cats.map(function (c) { return [c.id, c]; }));

  /* ------------------------------------------------------------------------
     Entrada: al deslizar, la cámara cruza la puerta
     ------------------------------------------------------------------------ */

  var intro = $('intro'), stage = $('stage'), facade = $('facade');
  var geo = null;

  function measure() {
    var vw = stage.clientWidth, vh = stage.clientHeight;
    var w = facade.offsetWidth, h = facade.offsetHeight;
    // La puerta ocupa el 30,6 % × 29,4 % del dibujo y su centro está en (53,3 %, 81 %).
    var cx = facade.offsetLeft + w * 0.533, cy = facade.offsetTop + h * 0.81;
    geo = {
      scale: Math.max(vw / (w * 0.306), vh / (h * 0.294)) * 1.15,
      dx: vw / 2 - cx,
      dy: vh / 2 - cy,
      range: intro.offsetHeight - vh,
      vh: vh,
    };
  }

  var introTicking = false;
  function updateIntro() {
    introTicking = false;
    if (!geo) measure();
    var y = window.scrollY;

    if (reduceMotion || geo.range <= 0) {
      root.classList.toggle('is-in', y > geo.vh * 0.5);
      return;
    }
    var p = clamp(y / geo.range);
    if (p > 0.03) stage.classList.add('is-rushed');
    root.classList.toggle('is-in', p >= 0.9);

    // Tramo final: la entrada se desvanece y deja a la vista la carta, que ya está detrás.
    var out = clamp((p - 0.9) / 0.1);
    stage.style.opacity = 1 - out;
    var gone = out > 0.98;
    stage.style.visibility = gone ? 'hidden' : '';
    if (gone) return;

    var t = clamp(p / 0.9);
    var scale = Math.exp(Math.log(geo.scale) * t);
    var k = (scale - 1) / (geo.scale - 1);
    facade.style.transform = 'translate(' + geo.dx * k + 'px,' + geo.dy * k + 'px) scale(' + scale + ')';
    stage.style.setProperty('--p', t.toFixed(4));
  }

  window.addEventListener('scroll', function () {
    if (!introTicking) { introTicking = true; requestAnimationFrame(updateIntro); }
  }, { passive: true });
  window.addEventListener('resize', function () { measure(); updateIntro(); });
  window.addEventListener('load', function () { measure(); updateIntro(); });

  /* ------------------------------------------------------------------------
     Carta
     ------------------------------------------------------------------------ */

  var viewIndex = $('view-index'), viewCat = $('view-cat'), viewSearch = $('view-search');
  var chipsEl = $('chips'), searchEl = $('search'), statusEl = $('status'), cartaEl = $('carta');
  var current = null;   // categoría abierta, o null si se ve el índice

  function dishHtml(d) {
    return (
      '<li class="dish">' +
        '<button class="dish__open" type="button" data-open="' + d.id + '">' +
          (d.image ? '<img class="dish__img" src="' + esc(d.image) + '" alt="" loading="lazy" decoding="async" width="104" height="104">' : '') +
          '<span class="dish__text">' +
            '<span class="dish__name">' + esc(d.name) + '</span>' +
            (d.description ? '<span class="dish__desc">' + esc(d.description) + '</span>' : '') +
            '<span class="dish__price">' + money(d.price) + '</span>' +
          '</span>' +
        '</button>' +
      '</li>'
    );
  }

  function cardHtml(d) {
    var media = d.image
      ? '<span class="card__media"><img src="' + esc(d.image) + '" alt="" loading="lazy" decoding="async"></span>'
      : '<span class="card__media card__media--empty"><span>Para compartir</span></span>';
    return (
      '<li class="card">' +
        '<button class="card__open" type="button" data-open="' + d.id + '">' + media +
          '<span class="card__body"><span class="card__name">' + esc(d.name) + '</span>' +
          '<span class="card__desc">' + esc(d.description) + '</span>' +
          '<span class="card__price">' + money(d.price) + '</span></span>' +
        '</button>' +
      '</li>'
    );
  }

  /* --- Índice: destacados + una baldosa por categoría ----------------------- */

  function renderIndex() {
    var html = '';
    if (featured && featured.items.length) {
      html += '<h2 class="block-title">' + esc(featured.name) + '</h2>';
      html += '<ul class="featured">' + featured.items.map(cardHtml).join('') + '</ul>';
    }
    html += '<h2 class="block-title">Toda la carta</h2><div class="tiles">';
    var plain = ['tile--ember', '', 'tile--sand'], n = 0;
    cats.forEach(function (c) {
      var cls = 'tile';
      if (/parrilla/i.test(c.name)) cls += ' tile--wide';
      cls += c.cover ? ' tile--photo' : ' ' + plain[n++ % plain.length];
      html +=
        '<a class="' + cls + '" href="#c-' + c.id + '">' +
          (c.cover ? '<img src="' + esc(c.cover) + '" alt="" loading="lazy" decoding="async">' : '') +
          '<span><span class="tile__name">' + esc(c.name) + '</span>' +
          '<span class="tile__count">' + plural(c.all.length, 'opción', 'opciones') + '</span></span>' +
        '</a>';
    });
    viewIndex.innerHTML = html + '</div>';
  }

  function renderChips() {
    chipsEl.innerHTML =
      '<a class="chip chip--all" href="#carta">' + ICON_GRID + 'todas</a>' +
      cats.map(function (c) {
        return '<a class="chip" href="#c-' + c.id + '" data-chip="' + c.id + '">' +
          (c.cover ? '<img class="chip__pic" src="' + esc(c.cover) + '" alt="" loading="lazy" width="30" height="30">' : '<span class="chip__pic"></span>') +
          esc(c.name) + '</a>';
      }).join('');
  }

  /* --- Una categoría abierta ------------------------------------------------ */

  function renderCat(c) {
    var html =
      '<div class="cat__head"><h2 class="cat__title" id="cat-title" tabindex="-1">' + esc(c.name) + '</h2>' +
      '<span class="cat__count">' + plural(c.all.length, 'opción', 'opciones') + '</span></div>';
    if (c.items.length) html += '<ul class="dishes">' + c.items.map(dishHtml).join('') + '</ul>';
    c.subcategories.forEach(function (s) {
      html += '<h3 class="cat__sub">' + esc(s.name) + '</h3><ul class="dishes">' + s.items.map(dishHtml).join('') + '</ul>';
    });

    var next = cats[cats.indexOf(c) + 1];
    html += '<div class="pager">';
    if (next) {
      html +=
        '<a class="pager__next" href="#c-' + next.id + '">' +
          (next.cover ? '<img src="' + esc(next.cover) + '" alt="" loading="lazy" width="64" height="64">' : '') +
          '<span><span class="pager__label">seguí con</span><span class="pager__name">' + esc(next.name) + '</span></span>' + ICON_NEXT +
        '</a>';
    } else {
      html +=
        '<a class="pager__next" href="#reservas"><span><span class="pager__label">¿ya elegiste?</span>' +
        '<span class="pager__name">Reservá tu mesa</span></span>' + ICON_NEXT + '</a>';
    }
    html += '<a class="pager__all" href="#carta">Ver todas las categorías</a></div>';
    viewCat.innerHTML = html;

    chipsEl.querySelectorAll('[data-chip]').forEach(function (a) {
      if (Number(a.dataset.chip) === c.id) {
        a.setAttribute('aria-current', 'true');
        if (chipsEl.scrollWidth > chipsEl.clientWidth) {
          chipsEl.scrollTo({ left: a.offsetLeft - chipsEl.clientWidth / 2 + a.offsetWidth / 2, behavior: 'instant' });
        }
      } else a.removeAttribute('aria-current');
    });
  }

  /* --- Buscador -------------------------------------------------------------- */

  function renderSearch(q) {
    var total = 0, html = '';
    cats.forEach(function (c) {
      var hits = c.all.filter(function (d) { return fold(d.name + ' ' + d.description).indexOf(q) !== -1; });
      if (!hits.length) return;
      total += hits.length;
      html += '<h2 class="block-title">' + esc(c.name) + '</h2><ul class="dishes">' + hits.map(dishHtml).join('') + '</ul>';
    });
    if (!total) {
      html =
        '<div class="empty"><p class="empty__title">No encontramos ese plato</p>' +
        '<p>Probá con otra palabra, o mirá la carta completa.</p>' +
        '<button class="btn btn--ember" type="button" data-clear>Ver toda la carta</button></div>';
    }
    viewSearch.innerHTML = html;
    statusEl.textContent = total === 0 ? 'Sin resultados' : plural(total, 'plato encontrado', 'platos encontrados');
  }

  /* --- Qué se ve ------------------------------------------------------------- */

  function restart(el) { el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; }

  function show() {
    var q = fold(searchEl.value.trim());
    var mode = q ? 'search' : current ? 'cat' : 'index';
    if (mode === 'search') renderSearch(q);
    if (mode === 'cat') renderCat(current);
    viewIndex.hidden = mode !== 'index';
    viewCat.hidden = mode !== 'cat';
    viewSearch.hidden = mode !== 'search';
    $('carta-head').hidden = mode !== 'index';
    chipsEl.hidden = mode !== 'cat';
    $('menu-note').hidden = mode === 'search';
    return mode;
  }

  function scrollToCarta() {
    var top = cartaEl.getBoundingClientRect().top + window.scrollY - $('topbar').offsetHeight;
    window.scrollTo({ top: top, behavior: 'instant' });
  }

  function route(fromNavigation) {
    var m = location.hash.match(/^#c-(\d+)$/);
    var cat = m ? catById.get(Number(m[1])) : null;
    if (!cat && location.hash !== '#carta' && fromNavigation) return;   // #reservas, #donde: no tocan la carta
    current = cat || null;
    if (fromNavigation) searchEl.value = '';
    show();
    if (cat) {
      restart(viewCat);
      scrollToCarta();
      if (fromNavigation) $('cat-title').focus({ preventScroll: true });
    }
  }
  window.addEventListener('hashchange', function () { route(true); });

  searchEl.addEventListener('input', function () {
    var mode = show();
    if (mode !== 'search') statusEl.textContent = '';
    // La lista cambia de largo al filtrar: volvemos al principio.
    if (cartaEl.getBoundingClientRect().top < $('topbar').offsetHeight) scrollToCarta();
  });

  // Una foto que no carga no deja un hueco.
  cartaEl.addEventListener('error', function (e) {
    var img = e.target;
    if (img.tagName !== 'IMG') return;
    var media = img.closest('.card__media');
    var tile = img.closest('.tile');
    if (media) { media.classList.add('card__media--empty'); media.innerHTML = '<span>De la casa</span>'; }
    else if (tile) { tile.classList.remove('tile--photo'); img.remove(); }
    else if (img.classList.contains('chip__pic')) img.replaceWith(Object.assign(document.createElement('span'), { className: 'chip__pic' }));
    else img.remove();
  }, true);

  /* ------------------------------------------------------------------------
     Ficha del plato
     ------------------------------------------------------------------------ */

  var dishDialog = $('dish-dialog');
  function openDish(id) {
    var d = dishes.get(id);
    if (!d) return;
    $('sheet-name').textContent = d.name;
    $('sheet-price').textContent = money(d.price);
    $('sheet-desc').textContent = d.description;
    var img = $('sheet-img');
    img.hidden = !d.image;
    if (d.image) img.src = d.image; else img.removeAttribute('src');

    $('sheet-groups').innerHTML = (d.groups || []).map(function (g) {
      return (
        '<div class="group"><h3 class="group__title">' + esc(g.title) + '</h3><ul class="group__list">' +
        g.options.map(function (o) {
          return '<li><span>' + esc(sentence(o.name)) + '</span>' + (o.price ? '<span>+ ' + money(o.price) + '</span>' : '') + '</li>';
        }).join('') +
        '</ul></div>'
      );
    }).join('');

    dishDialog.querySelector('.sheet__scroll').scrollTop = 0;
    dishDialog.showModal();
  }

  $('sheet-img').addEventListener('error', function () { this.hidden = true; });
  dishDialog.addEventListener('click', function (e) { if (e.target === dishDialog) dishDialog.close(); });

  cartaEl.addEventListener('click', function (e) {
    var open = e.target.closest('[data-open]');
    if (open) { openDish(Number(open.dataset.open)); return; }
    if (e.target.closest('[data-clear]')) {
      searchEl.value = '';
      statusEl.textContent = '';
      show();
      searchEl.focus();
    }
  });

  /* ------------------------------------------------------------------------
     Reservas
     ------------------------------------------------------------------------ */

  function isoDate(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function setupReservas() {
    var panel = $('reservas-panel');
    if (WOKI_URL) {
      panel.innerHTML =
        '<div class="reservas__woki"><p>Elegí día, hora y cantidad de personas. La confirmación te llega al instante.</p>' +
        '<a class="btn btn--ember btn--block" href="' + esc(WOKI_URL) + '" target="_blank" rel="noopener">Reservar mesa</a></div>';
      return;
    }

    var form = $('reserva-form');
    var nombre = $('r-nombre'), personas = $('r-personas'), fecha = $('r-fecha'), hora = $('r-hora');

    var opts = '';
    for (var n = 1; n <= MAX_PERSONAS; n++) opts += '<option value="' + n + '"' + (n === 2 ? ' selected' : '') + '>' + n + '</option>';
    personas.innerHTML = opts + '<option value="Más de ' + MAX_PERSONAS + '">Más de ' + MAX_PERSONAS + '</option>';

    hora.innerHTML = TURNOS.map(function (t) {
      var out = '<optgroup label="' + t.label + '">';
      var from = t.from.split(':'), to = t.to.split(':');
      for (var m = from[0] * 60 + +from[1]; m <= to[0] * 60 + +to[1]; m += 30) {
        var v = String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
        out += '<option' + (v === '21:00' ? ' selected' : '') + '>' + v + '</option>';
      }
      return out + '</optgroup>';
    }).join('');

    var today = isoDate(new Date());
    fecha.min = today;
    fecha.value = today;

    function setError(input, message) {
      var error = $(input.id + '-error');
      error.textContent = message;
      error.hidden = !message;
      if (message) { input.setAttribute('aria-invalid', 'true'); input.setAttribute('aria-describedby', error.id); }
      else { input.removeAttribute('aria-invalid'); input.removeAttribute('aria-describedby'); }
      return !message;
    }
    var checkNombre = function () { return setError(nombre, nombre.value.trim() ? '' : 'Escribí a nombre de quién va la reserva.'); };
    var checkFecha = function () {
      if (!fecha.value) return setError(fecha, 'Elegí el día de la reserva.');
      if (fecha.value < isoDate(new Date())) return setError(fecha, 'Ese día ya pasó. Elegí de hoy en adelante.');
      return setError(fecha, '');
    };
    nombre.addEventListener('input', function () { if (nombre.hasAttribute('aria-invalid')) checkNombre(); });
    fecha.addEventListener('change', checkFecha);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var okNombre = checkNombre(), okFecha = checkFecha();
      if (!okNombre) { nombre.focus(); return; }
      if (!okFecha) { fecha.focus(); return; }

      var day = new Date(fecha.value + 'T12:00:00').toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' });
      var nota = $('r-nota').value.trim();
      var text =
        'Hola Malandra, quiero reservar una mesa.\n' +
        'Nombre: ' + nombre.value.trim() + '\n' +
        'Personas: ' + personas.value + '\n' +
        'Día: ' + day + '\n' +
        'Hora: ' + hora.value +
        (nota ? '\nNota: ' + nota : '');
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    });
  }

  /* ------------------------------------------------------------------------ */

  if (menu.updatedAt) {
    var parts = menu.updatedAt.split('-');
    $('menu-note').textContent = 'Precios en pesos argentinos. Carta actualizada el ' + parts[2] + '/' + parts[1] + '/' + parts[0] + '.';
  }
  renderIndex();
  renderChips();
  setupReservas();
  measure();
  updateIntro();
  route(false);
})();
