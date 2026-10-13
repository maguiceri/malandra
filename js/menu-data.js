// La carta de Malandra. Este archivo es la fuente de los datos: lo que se cambia acá es lo que muestra la web.
//
// Cómo editarla:
//  · Precio:        cambiar el número de "price" (sin puntos ni signo: 37000).
//  · Texto:         cambiar "name" o "description".
//  · Sacar un plato: borrar su bloque completo, desde { hasta }, con la coma que lo separa del siguiente.
//  · Plato nuevo:   copiar el bloque de otro plato y cambiarle los datos. El "id" tiene que ser un
//                   número que no use ningún otro plato.
//  · Foto:          guardar la imagen en assets/img/platos/ y poner esa ruta en "image".
//                   Sin foto: "image": null.
//  · "updatedAt" es la fecha que se muestra al pie de la carta (año-mes-día).
//
// El orden de categorías y platos en este archivo es el orden en que aparecen en la web.
// La primera categoría ("Destacados") se muestra como tira de tarjetas arriba de todo.
window.MALANDRA_MENU = {
 "updatedAt": "2026-10-13",
 "categories": [
  {
   "id": 15,
   "name": "Destacados",
   "items": [
    {
     "id": 332,
     "name": "PARRILLADA MALANDRA",
     "description": "Lo mejor de nuestra parrilla al carbón en una sola bandeja para compartir. Cortes, achuras. MATRIMONIO, RIÑONCITOS, CHINCHULINES,\nASADO BANDERITA, BONDIOLA DE CERDO,\nPOLLO A LAS BRASAS. SALE CON FRITAS.",
     "price": 89000,
     "image": null,
     "groups": [
      {
       "title": "Guarnicion Parrillada",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 0
        },
        {
         "name": "PURE DE PAPAS",
         "price": 0
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 415,
     "name": "TOMAHAWK",
     "description": "Nuestra joya de 1.5 KG, con un marmoleo excepcional, se prepara a la parrilla sobre carbón, garantizando un sabor ahumado único. Una pieza monumental para los verdaderos amantes de la carne. Viene acompañado de Papas Fritas!",
     "price": 89999,
     "image": "assets/img/platos/415.webp",
     "groups": [
      {
       "title": "GUARNICION",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 0
        },
        {
         "name": "PURE DE PAPAS",
         "price": 0
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 265,
     "name": "MILANESA MALANDRA",
     "description": "La reina de las milas. Una XXL que no te va a caber fácil en el plato: muzzarella, cheddar, panceta, tres huevos fritos arriba y dos guarniciones a elección. Un monumento. Nuestro especial de la casa.",
     "price": 69000,
     "image": "assets/img/platos/265.webp",
     "groups": [
      {
       "title": "Guarnicion Malandra",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 0
        },
        {
         "name": "PURE DE PAPAS",
         "price": 0
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 0
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": 2,
   "name": "Entrada",
   "items": [
    {
     "id": 31,
     "name": "TRIO DE EMPANADAS",
     "description": "Tres empanadas a elección, tres razones para quedarte. Carne cortada a cuchillo como manda la tradición, hongos con queso para los que saben, cebolla con queso que siempre enamora, o jamón con queso que nunca falla.",
     "price": 12000,
     "image": "assets/img/platos/31.webp",
     "groups": [
      {
       "title": "EMPANADAS ENTRADA",
       "options": [
        {
         "name": "EMPANADA DE CARNE",
         "price": 0
        },
        {
         "name": "EMPANADA DE HONGOS",
         "price": 0
        },
        {
         "name": "EMPANADA DE QUESO Y CEBOLLA",
         "price": 0
        },
        {
         "name": "EMPANADA DE JAMON Y QUESO",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 174,
     "name": "MINI TORTILLA DE PAPA",
     "description": "Chica en tamaño, grande en sabor. Una tortilla de papa bien cremosa, de las de verdad, para entrar en calor y arrancar la noche con el pie derecho.",
     "price": 10000,
     "image": "assets/img/platos/174.webp",
     "groups": [
      {
       "title": "PUNTO CARNE",
       "options": [
        {
         "name": "A PUNTO",
         "price": 0
        },
        {
         "name": "COCIDO",
         "price": 0
        },
        {
         "name": "BABE",
         "price": 0
        },
        {
         "name": "JUGOSO",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 33,
     "name": "RABAS A LA ROMANA",
     "description": "Calamar apanado a la romana, bien crocante por afuera y tierno por adentro. De esas que desaparecen antes de que llegue el mozo a preguntar si está todo bien.",
     "price": 20500,
     "image": "assets/img/platos/33.webp"
    },
    {
     "id": 36,
     "name": "BUÑUELOS DE ESPINACA",
     "description": "Verduras de estación envueltas en una masa liviana y frita que cruje con cada mordisco. Perfectos para picar mientras esperas que se caliente la parrilla.",
     "price": 10000,
     "image": "assets/img/platos/36.webp"
    },
    {
     "id": 157,
     "name": "EMPANADA DE CARNE",
     "description": "Carne cortada a cuchillo, como manda la tradición. Jugosa, sabrosa, con la masa dorada en su punto.",
     "price": 4500,
     "image": "assets/img/platos/157.webp"
    },
    {
     "id": 309,
     "name": "EMPANADA DE JAMON Y QUESO",
     "description": "Jamón y queso fundido, la dupla que nunca falla. Simple y perfecta.",
     "price": 4500,
     "image": "assets/img/platos/309.webp"
    },
    {
     "id": 169,
     "name": "EMPANADA DE QUESO Y CEBOLLA",
     "description": "Cebolla dulce y queso fundido en masa dorada. La que siempre enamora.",
     "price": 4500,
     "image": "assets/img/platos/169.webp"
    },
    {
     "id": 170,
     "name": "EMPANADA DE HONGOS",
     "description": "Hongos con queso para los que saben. Sabor profundo en formato empanada.",
     "price": 4500,
     "image": "assets/img/platos/170.webp"
    },
    {
     "id": 303,
     "name": "BOMBA DE PAPA",
     "description": "Su nombre lo dice todo: bombas. Rellenas de queso fundido que explota en cada bocado. Salen con pomodoro para mojar sin culpa. Una entrada que podría perfectamente ser el plato principal y nadie te va a juzgar.",
     "price": 12000,
     "image": "assets/img/platos/303.webp"
    }
   ]
  },
  {
   "id": 3,
   "name": "Parrilla al Carbon",
   "items": [
    {
     "id": 332,
     "name": "PARRILLADA MALANDRA",
     "description": "Lo mejor de nuestra parrilla al carbón en una sola bandeja para compartir. Cortes, achuras. MATRIMONIO, RIÑONCITOS, CHINCHULINES,\nASADO BANDERITA, BONDIOLA DE CERDO,\nPOLLO A LAS BRASAS. SALE CON FRITAS.",
     "price": 89000,
     "image": null,
     "groups": [
      {
       "title": "Guarnicion Parrillada",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 0
        },
        {
         "name": "PURE DE PAPAS",
         "price": 0
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 415,
     "name": "TOMAHAWK",
     "description": "Nuestra joya de 1.5 KG, con un marmoleo excepcional, se prepara a la parrilla sobre carbón, garantizando un sabor ahumado único. Una pieza monumental para los verdaderos amantes de la carne. Viene acompañado de Papas Fritas!",
     "price": 89999,
     "image": "assets/img/platos/415.webp",
     "groups": [
      {
       "title": "GUARNICION",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 0
        },
        {
         "name": "PURE DE PAPAS",
         "price": 0
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 251,
     "name": "LOMO HAPPENING",
     "description": "El corte más noble a las brasas. 400 gramos de lomo con todo el carácter que le da el carbón. Tierno, elegante y sin complicaciones. Para los que saben lo que quieren..",
     "price": 39000,
     "image": "assets/img/platos/251.webp"
    },
    {
     "id": 419,
     "name": "VACIO PULPON",
     "description": "El corte más tierno y jugoso del vacío tradicional. Cocido a fuego lento, con el toque justo de sal de campo. Puro sabor e identidad rioplatense. (500 grms).",
     "price": 38000,
     "image": "assets/img/platos/419.webp",
     "groups": [
      {
       "title": "PUNTO CARNE",
       "options": [
        {
         "name": "A PUNTO",
         "price": 0
        },
        {
         "name": "COCIDO",
         "price": 0
        },
        {
         "name": "BABE",
         "price": 0
        },
        {
         "name": "JUGOSO",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 42,
     "name": "ENTRAÑA",
     "description": "La favorita de los entendidos. Sabrosa, jugosa, con ese sabor profundo que solo tiene la entraña bien trabajada a las brasas. Finita o gruesa, siempre enamora.",
     "price": 45000,
     "image": "assets/img/platos/42.webp",
     "groups": [
      {
       "title": "PUNTO CARNE",
       "options": [
        {
         "name": "A PUNTO",
         "price": 0
        },
        {
         "name": "COCIDO",
         "price": 0
        },
        {
         "name": "BABE",
         "price": 0
        },
        {
         "name": "JUGOSO",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 120,
     "name": "BIFE DE CHORIZO",
     "description": "400 gramos de bife con toda la infiltración que necesitás para que cada mordisco sea una experiencia. A las brasas de carbón, al punto que lo pedís. El rey de la parrilla en todo su esplendor.",
     "price": 30000,
     "image": "assets/img/platos/120.webp",
     "groups": [
      {
       "title": "PUNTO CARNE",
       "options": [
        {
         "name": "A PUNTO",
         "price": 0
        },
        {
         "name": "COCIDO",
         "price": 0
        },
        {
         "name": "BABE",
         "price": 0
        },
        {
         "name": "JUGOSO",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 112,
     "name": "ASADO BANDERITA",
     "description": "Medio kilo de asado de tira a las brasas de carbón. Jugoso, tierno, con ese aroma que llega antes que el plato. Si venís a Malandra y no pedís esto, te vas a arrepentir en el camino a casa.",
     "price": 34000,
     "image": "assets/img/platos/112.webp",
     "groups": [
      {
       "title": "PUNTO CARNE",
       "options": [
        {
         "name": "A PUNTO",
         "price": 0
        },
        {
         "name": "COCIDO",
         "price": 0
        },
        {
         "name": "BABE",
         "price": 0
        },
        {
         "name": "JUGOSO",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 111,
     "name": "OJO DE BIFE",
     "description": "El corte más noble y marmoleado de la vaca. 400 gramos que se deshacen en la boca. Una vez que lo probás, entendés por qué está en el podio. El medallón que te va a hacer pedir otro..",
     "price": 32000,
     "image": "assets/img/platos/111.webp",
     "groups": [
      {
       "title": "PUNTO CARNE",
       "options": [
        {
         "name": "A PUNTO",
         "price": 0
        },
        {
         "name": "COCIDO",
         "price": 0
        },
        {
         "name": "BABE",
         "price": 0
        },
        {
         "name": "JUGOSO",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 109,
     "name": "MOLLEJAS AL LIMON",
     "description": "Mollejas doradas a las brasas con un toque de limón que las equilibra perfecto. Crocantes por fuera, cremosas por dentro. El bocado más buscado de la parrilla, y con razón..",
     "price": 36000,
     "image": "assets/img/platos/109.webp"
    },
    {
     "id": 46,
     "name": "PECHUGA",
     "description": "Pechuga de pollo a las brasas, sin complicaciones. 450 gramos dorados al carbón que demuestran que lo simple, bien hecho, siempre gana.",
     "price": 19000,
     "image": null
    },
    {
     "id": 223,
     "name": "MATRIMONIO",
     "description": "El clásico de toda parrillada porteña. chorizo Bombon y morcilla Bombon juntos, como llevan toda la vida. Simple, sin vueltas, directo al punto.",
     "price": 11000,
     "image": null
    },
    {
     "id": 246,
     "name": "HAMBURGUESA PARRI",
     "description": "Hamburguesa hecha a las brasas como una carne más de la parrilla. Ahumada, jugosa, sin secretos de laboratorio: fuego y carne de verdad.",
     "price": 25000,
     "image": null
    },
    {
     "id": 37,
     "name": "CHORIZO BB",
     "description": "El chori de las brasas, crocante por fuera y jugoso por dentro. El que abre el juego en toda parrillada.",
     "price": 5000,
     "image": null
    },
    {
     "id": 38,
     "name": "MORCILLA",
     "description": "Morcilla criolla a las brasas, cremosa por dentro con su piel tostadita. La debilidad de los que saben empezar un asado.",
     "price": 4000,
     "image": null
    },
    {
     "id": 110,
     "name": "CHINCHULIN",
     "description": "Chinchulines dorados a las brasas, crocantes como tienen que ser. Achura noble para paladares que no se achican.",
     "price": 12000,
     "image": null
    },
    {
     "id": 222,
     "name": "RIÑONCITOS",
     "description": "Para los valientes del asado. Tiernos, jugosos, con ese gustito particular que los hace inconfundibles. Si sos de pedir riñones, ya sabés de qué va la cosa.",
     "price": 10000,
     "image": null
    },
    {
     "id": 151,
     "name": "PROVOLETA AZUL",
     "description": "Provoleta con queso azul. Intensa, atrevida, sin pedir permiso. Para los paladares que buscan algo fuera de lo común y están dispuestos a enamorarse de la combinación.",
     "price": 16000,
     "image": null
    },
    {
     "id": 258,
     "name": "PROVOLETA SOBRE CEBOLLAS ASADAS",
     "description": "La provoleta de siempre, pero con un upgrade. Cebolla caramelizada encima que le da ese dulzor que te hace cerrar los ojos. Para los que quieren un poco más de emoción en la vida.",
     "price": 14000,
     "image": null
    },
    {
     "id": 285,
     "name": "PROVOLETA CLASICA",
     "description": "La reina de toda parrilla que se respete. Provolone a las brasas, doradita por fuera, fundida por dentro. Sencilla, honesta, perfecta. A veces lo clásico no falla porque no falla.",
     "price": 12000,
     "image": "assets/img/platos/285.webp"
    },
    {
     "id": 333,
     "name": "BROCHETE VEGGIE",
     "description": "Brochete de vegetales de estación a las brasas. El carbón también sabe tratar bien a las verduras.",
     "price": 22000,
     "image": null
    }
   ]
  },
  {
   "id": 8,
   "name": "Pastas",
   "items": [
    {
     "id": 12,
     "name": "FUSILES",
     "description": "Fusiles caseros al dente que abrazan la salsa como corresponde. Elegí la tuya y listo: domingo en familia, cualquier día de la semana.",
     "price": 21000,
     "image": "assets/img/platos/12.webp",
     "groups": [
      {
       "title": "SALSAS",
       "options": [
        {
         "name": "RAGÚ DE CARNE",
         "price": 0
        },
        {
         "name": "PESTO Y NUECES",
         "price": 0
        },
        {
         "name": "CUATRO QUESOS",
         "price": 0
        },
        {
         "name": "CREMA",
         "price": 0
        },
        {
         "name": "POMODORO",
         "price": 0
        },
        {
         "name": "SALSA MALANDRA",
         "price": 0
        },
        {
         "name": "ROSA",
         "price": 0
        },
        {
         "name": "MANTECA",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 154,
     "name": "ÑOQUIS",
     "description": "Ñoquis de papa hechos en casa, suaves y livianos. Los del 29 y los de todos los otros días también. Con la salsa que más te guste.",
     "price": 20000,
     "image": "assets/img/platos/154.webp",
     "groups": [
      {
       "title": "SALSAS",
       "options": [
        {
         "name": "RAGÚ DE CARNE",
         "price": 0
        },
        {
         "name": "PESTO Y NUECES",
         "price": 0
        },
        {
         "name": "CUATRO QUESOS",
         "price": 0
        },
        {
         "name": "CREMA",
         "price": 0
        },
        {
         "name": "POMODORO",
         "price": 0
        },
        {
         "name": "SALSA MALANDRA",
         "price": 0
        },
        {
         "name": "ROSA",
         "price": 0
        },
        {
         "name": "MANTECA",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 14,
     "name": "RAVIOLES RICOTA Y PARMESANO",
     "description": "Ravioles caseros rellenos de ricota y parmesano. Masa finita, relleno generoso, tradición italiana en versión porteña.",
     "price": 24000,
     "image": "assets/img/platos/14.webp",
     "groups": [
      {
       "title": "SALSAS",
       "options": [
        {
         "name": "RAGÚ DE CARNE",
         "price": 0
        },
        {
         "name": "PESTO Y NUECES",
         "price": 0
        },
        {
         "name": "CUATRO QUESOS",
         "price": 0
        },
        {
         "name": "CREMA",
         "price": 0
        },
        {
         "name": "POMODORO",
         "price": 0
        },
        {
         "name": "SALSA MALANDRA",
         "price": 0
        },
        {
         "name": "ROSA",
         "price": 0
        },
        {
         "name": "MANTECA",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 260,
     "name": "SORRENTINOS DE BONDIOLA",
     "description": "Sorrentinos generosos rellenos de bondiola braseada que se deshace. La pasta más pedida de la casa, y cuando los pruebes vas a entender.",
     "price": 26000,
     "image": "assets/img/platos/260.webp",
     "groups": [
      {
       "title": "SALSAS",
       "options": [
        {
         "name": "RAGÚ DE CARNE",
         "price": 0
        },
        {
         "name": "PESTO Y NUECES",
         "price": 0
        },
        {
         "name": "CUATRO QUESOS",
         "price": 0
        },
        {
         "name": "CREMA",
         "price": 0
        },
        {
         "name": "POMODORO",
         "price": 0
        },
        {
         "name": "SALSA MALANDRA",
         "price": 0
        },
        {
         "name": "ROSA",
         "price": 0
        },
        {
         "name": "MANTECA",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 81,
     "name": "SORRENTINOS DE JAMON Y QUESO",
     "description": "Impresionantes sorrentinos rellenos con mucho jamon y queso para un paladar exigente",
     "price": 26000,
     "image": "assets/img/platos/81.webp",
     "groups": [
      {
       "title": "SALSAS",
       "options": [
        {
         "name": "RAGÚ DE CARNE",
         "price": 0
        },
        {
         "name": "PESTO Y NUECES",
         "price": 0
        },
        {
         "name": "CUATRO QUESOS",
         "price": 0
        },
        {
         "name": "CREMA",
         "price": 0
        },
        {
         "name": "POMODORO",
         "price": 0
        },
        {
         "name": "SALSA MALANDRA",
         "price": 0
        },
        {
         "name": "ROSA",
         "price": 0
        },
        {
         "name": "MANTECA",
         "price": 0
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": 7,
   "name": "Cocina Malandra",
   "items": [
    {
     "id": 79,
     "name": "OSOBUCO BRASEADO CON PURE DE PAPA",
     "description": "Corte de ossobuco braseado lentamente hasta tiernizar, servido con puré de papa cremoso.",
     "price": 31000,
     "image": "assets/img/platos/79.webp"
    },
    {
     "id": 65,
     "name": "PASTEL DE PAPAS",
     "description": "Carne cortada a cuchillo bien condimentada, bajo un techo de puré gratinado. El plato que huele a casa de la abuela y sabe todavía mejor.",
     "price": 29000,
     "image": null
    },
    {
     "id": 77,
     "name": "LOMO AL CHAMPIÑON CON PURE DE PAPAS",
     "description": "Tiernas rodajas de lomo en salsa cremosa de champiñones, acompañado de puré de papas casero.",
     "price": 44000,
     "image": "assets/img/platos/77.webp",
     "groups": [
      {
       "title": "PUNTO CARNE COCINA",
       "options": [
        {
         "name": "A PUNTO",
         "price": 0
        },
        {
         "name": "COCIDO",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 334,
     "name": "MATAMBRE AL VERDEO",
     "description": "Matambre tierno con salsa cremosa de verdeo. Un clásico de bodegón que no abunda y acá se hace con cariño.",
     "price": 28000,
     "image": null
    },
    {
     "id": 236,
     "name": "ARROZ CREMOSO CON MARISCOS",
     "description": "Arroz cremoso con mariscos, cocinado despacio. Sabor a mar en formato abrazo.",
     "price": 29000,
     "image": null
    },
    {
     "id": 237,
     "name": "ARROZ CREMOSO DE HONGOS",
     "description": "Arroz cremoso con hongos, intenso y reconfortante. Para los que buscan profundidad de sabor sin carne de por medio.",
     "price": 25000,
     "image": null
    },
    {
     "id": 335,
     "name": "CANELONES DE LA ABUELA",
     "description": "Canelones caseros gratinados como los de la abuela: generosos, calentitos y con ese gusto que ninguna receta escrita logra explicar.",
     "price": 26000,
     "image": null
    },
    {
     "id": 336,
     "name": "GUISO DE LENTEJAS",
     "description": "Guiso de lentejas de receta tradicional, bien caldoso y reconfortante. Preparado con lentejas premium que se deshacen en la boca, zanahoria, cebolla y especias que le dan ese sabor casero inconfundible. Tibieza y confort en cada cucharada, perfecto para arrancar la comida con calidez.",
     "price": 26000,
     "image": null
    }
   ]
  },
  {
   "id": 4,
   "name": "Milanesas",
   "items": [
    {
     "id": 224,
     "name": "MILANESA NAPOLITANA",
     "description": "La napolitana que hizo famosa esta esquina de Caballito. Pomodoro y muzzarella fundida encima de una milanesa bien crocante.",
     "price": 37000,
     "image": "assets/img/platos/224.webp",
     "groups": [
      {
       "title": "Opcion Milanesas",
       "options": [
        {
         "name": "De Carne",
         "price": 0
        },
        {
         "name": "Milanesa De Pollo 450",
         "price": 0
        }
       ]
      },
      {
       "title": "Guarnicion Adicional",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 9000
        },
        {
         "name": "PURE DE PAPAS",
         "price": 8000
        },
        {
         "name": "ENSALADA MIX DE VERDES Y CHERRYS",
         "price": 7500
        },
        {
         "name": "ENSALADA RUCULA Y PARMESANO",
         "price": 9000
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 8000
        },
        {
         "name": "PURE DE CALABAZA",
         "price": 8000
        },
        {
         "name": "PURE MIXTO",
         "price": 8000
        }
       ]
      }
     ]
    },
    {
     "id": 225,
     "name": "MILANESA CUATRO QUESOS",
     "description": "Milanesa crocante coronada con muzzarella, roquefort, parmesano y provolone fundidos. Para los fanáticos del queso que no quieren elegir uno solo.",
     "price": 41000,
     "image": null,
     "groups": [
      {
       "title": "Opcion Milanesas",
       "options": [
        {
         "name": "De Carne",
         "price": 0
        },
        {
         "name": "Milanesa De Pollo 450",
         "price": 0
        }
       ]
      },
      {
       "title": "Guarnicion Adicional",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 9000
        },
        {
         "name": "PURE DE PAPAS",
         "price": 8000
        },
        {
         "name": "ENSALADA MIX DE VERDES Y CHERRYS",
         "price": 7500
        },
        {
         "name": "ENSALADA RUCULA Y PARMESANO",
         "price": 9000
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 8000
        },
        {
         "name": "PURE DE CALABAZA",
         "price": 8000
        },
        {
         "name": "PURE MIXTO",
         "price": 8000
        }
       ]
      }
     ]
    },
    {
     "id": 226,
     "name": "MILANESA DE LA CASA",
     "description": "Milanesa con cebolla caramelizada, muzzarella, panceta y dos huevos fritos",
     "price": 42000,
     "image": "assets/img/platos/226.webp",
     "groups": [
      {
       "title": "Opcion Milanesas",
       "options": [
        {
         "name": "De Carne",
         "price": 0
        },
        {
         "name": "Milanesa De Pollo 450",
         "price": 0
        }
       ]
      },
      {
       "title": "Guarnicion Adicional",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 9000
        },
        {
         "name": "PURE DE PAPAS",
         "price": 8000
        },
        {
         "name": "ENSALADA MIX DE VERDES Y CHERRYS",
         "price": 7500
        },
        {
         "name": "ENSALADA RUCULA Y PARMESANO",
         "price": 9000
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 8000
        },
        {
         "name": "PURE DE CALABAZA",
         "price": 8000
        },
        {
         "name": "PURE MIXTO",
         "price": 8000
        }
       ]
      }
     ]
    },
    {
     "id": 227,
     "name": "MILANESA FUGAZZETA",
     "description": "Milanesa con muzzarella y cebolla caramelizada, tributo a la fugazzeta porteña. Crocante abajo, fundida y dulce arriba.",
     "price": 38000,
     "image": "assets/img/platos/227.webp",
     "groups": [
      {
       "title": "Opcion Milanesas",
       "options": [
        {
         "name": "De Carne",
         "price": 0
        },
        {
         "name": "Milanesa De Pollo 450",
         "price": 0
        }
       ]
      },
      {
       "title": "Guarnicion Adicional",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 9000
        },
        {
         "name": "PURE DE PAPAS",
         "price": 8000
        },
        {
         "name": "ENSALADA MIX DE VERDES Y CHERRYS",
         "price": 7500
        },
        {
         "name": "ENSALADA RUCULA Y PARMESANO",
         "price": 9000
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 8000
        },
        {
         "name": "PURE DE CALABAZA",
         "price": 8000
        },
        {
         "name": "PURE MIXTO",
         "price": 8000
        }
       ]
      }
     ]
    },
    {
     "id": 228,
     "name": "MILANESA SOLAPA",
     "description": "La mila más versátil del menú. La podés pedir de ternera, de pollo o de merluza. Cada versión con su carácter propio, todas con el mismo apanado crocante que te hace querer más.",
     "price": 28000,
     "image": "assets/img/platos/228.webp",
     "groups": [
      {
       "title": "Opcion Milanesas",
       "options": [
        {
         "name": "De Carne",
         "price": 0
        },
        {
         "name": "Milanesa De Pollo 450",
         "price": 0
        }
       ]
      },
      {
       "title": "Guarnicion Adicional",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 9000
        },
        {
         "name": "PURE DE PAPAS",
         "price": 8000
        },
        {
         "name": "ENSALADA MIX DE VERDES Y CHERRYS",
         "price": 7500
        },
        {
         "name": "ENSALADA RUCULA Y PARMESANO",
         "price": 9000
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 8000
        },
        {
         "name": "PURE DE CALABAZA",
         "price": 8000
        },
        {
         "name": "PURE MIXTO",
         "price": 8000
        }
       ]
      }
     ]
    },
    {
     "id": 265,
     "name": "MILANESA MALANDRA",
     "description": "La reina de las milas. Una XXL que no te va a caber fácil en el plato: muzzarella, cheddar, panceta, tres huevos fritos arriba y dos guarniciones a elección. Un monumento. Nuestro especial de la casa.",
     "price": 69000,
     "image": "assets/img/platos/265.webp",
     "groups": [
      {
       "title": "Guarnicion Malandra",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 0
        },
        {
         "name": "PURE DE PAPAS",
         "price": 0
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 0
        }
       ]
      }
     ]
    },
    {
     "id": 229,
     "name": "MILANESA DE MERLUZA",
     "description": "Merluza fresca en apanado crocante y dorado. Liviana pero abundante, para los que prefieren el mar sin renunciar a la mila.",
     "price": 28000,
     "image": "assets/img/platos/229.webp",
     "groups": [
      {
       "title": "Guarnicion Adicional",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 9000
        },
        {
         "name": "PURE DE PAPAS",
         "price": 8000
        },
        {
         "name": "ENSALADA MIX DE VERDES Y CHERRYS",
         "price": 7500
        },
        {
         "name": "ENSALADA RUCULA Y PARMESANO",
         "price": 9000
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 8000
        },
        {
         "name": "PURE DE CALABAZA",
         "price": 8000
        },
        {
         "name": "PURE MIXTO",
         "price": 8000
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": 5,
   "name": "Matambres",
   "items": [
    {
     "id": 96,
     "name": "MATAMBRE A LA PIZZA",
     "description": "Un matambre que aprendió todo de la pizza porteña. Tomate y muzzarella encima, crocante y fundido al mismo tiempo. Para compartir, que lo bueno se comparte.",
     "price": 46000,
     "image": "assets/img/platos/96.webp",
     "groups": [
      {
       "title": "Guarnicion Adicional",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 9000
        },
        {
         "name": "PURE DE PAPAS",
         "price": 8000
        },
        {
         "name": "ENSALADA MIX DE VERDES Y CHERRYS",
         "price": 7500
        },
        {
         "name": "ENSALADA RUCULA Y PARMESANO",
         "price": 9000
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 8000
        },
        {
         "name": "PURE DE CALABAZA",
         "price": 8000
        },
        {
         "name": "PURE MIXTO",
         "price": 8000
        }
       ]
      }
     ]
    },
    {
     "id": 230,
     "name": "MATAMBRE FUGAZZETA",
     "description": "Muzzarella y cebolla caramelizada sobre matambre tierno. Un tributo a la fugazzeta porteña en formato matambre. Se comparte, se disfruta, se repite.",
     "price": 46000,
     "image": "assets/img/platos/230.webp",
     "groups": [
      {
       "title": "Guarnicion Adicional",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 9000
        },
        {
         "name": "PURE DE PAPAS",
         "price": 8000
        },
        {
         "name": "ENSALADA MIX DE VERDES Y CHERRYS",
         "price": 7500
        },
        {
         "name": "ENSALADA RUCULA Y PARMESANO",
         "price": 9000
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 8000
        },
        {
         "name": "PURE DE CALABAZA",
         "price": 8000
        },
        {
         "name": "PURE MIXTO",
         "price": 8000
        }
       ]
      }
     ]
    },
    {
     "id": 231,
     "name": "MATAMBRE BIEN MALANDRA",
     "description": "El matambre con más carácter de la carta. Muzzarella, panceta, cebolla caramelizada y roquefort. Intenso, atrevido, sin pedir perdón. Para los que quieren todo junto y bien puesto.",
     "price": 49000,
     "image": "assets/img/platos/231.webp",
     "groups": [
      {
       "title": "Guarnicion Adicional",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 9000
        },
        {
         "name": "PURE DE PAPAS",
         "price": 8000
        },
        {
         "name": "ENSALADA MIX DE VERDES Y CHERRYS",
         "price": 7500
        },
        {
         "name": "ENSALADA RUCULA Y PARMESANO",
         "price": 9000
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 8000
        },
        {
         "name": "PURE DE CALABAZA",
         "price": 8000
        },
        {
         "name": "PURE MIXTO",
         "price": 8000
        }
       ]
      }
     ]
    },
    {
     "id": 232,
     "name": "MATAMBRE CUATRO QUESOS",
     "description": "Cuatro quesos sobre matambre: muzzarella, roquefort, parmesano y provolone. Una combinación que no deja lugar a dudas. Para los fanáticos del queso que quieren ir a fondo.",
     "price": 48000,
     "image": "assets/img/platos/232.webp",
     "groups": [
      {
       "title": "Guarnicion Adicional",
       "options": [
        {
         "name": "PAPAS FRITAS",
         "price": 9000
        },
        {
         "name": "PURE DE PAPAS",
         "price": 8000
        },
        {
         "name": "ENSALADA MIX DE VERDES Y CHERRYS",
         "price": 7500
        },
        {
         "name": "ENSALADA RUCULA Y PARMESANO",
         "price": 9000
        },
        {
         "name": "ENSALADA MIXTA",
         "price": 8000
        },
        {
         "name": "PURE DE CALABAZA",
         "price": 8000
        },
        {
         "name": "PURE MIXTO",
         "price": 8000
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": 10,
   "name": "Sandwiches",
   "items": [
    {
     "id": 318,
     "name": "SANGUCHITO DE OJO DE BIFE",
     "description": "Ojo de bife a las brasas dentro de un pan que apenas lo puede contener. Un sanguche de parrilla en serio.",
     "price": 27000,
     "image": null
    },
    {
     "id": 331,
     "name": "SANGUCHITO PRENSADO DE PROVOLETA",
     "description": "Provoleta fundida y prensada entre panes dorados. Queso que se estira en cada mordisco. Peligrosamente adictivo.",
     "price": 20000,
     "image": null
    },
    {
     "id": 328,
     "name": "SANGUCHITO DE BIFE DE CHORIZO",
     "description": "Bife de chorizo a las brasas en sanguche. El rey de la parrilla, ahora entre panes. Jugoso, ahumado, contundente.",
     "price": 20000,
     "image": null
    },
    {
     "id": 339,
     "name": "CHORIPAN MALANDRA",
     "description": "El chori de las brasas en pan crocante, con criolla para coronarlo. El clásico argentino hecho como se debe. Sin vueltas, sin errores.",
     "price": 19000,
     "image": "assets/img/platos/339.webp"
    }
   ]
  },
  {
   "id": 6,
   "name": "Guarniciones y Ensaladas",
   "items": [
    {
     "id": 99,
     "name": "PAPAS FRITAS",
     "description": "Papas fritas doradas y crocantes, de las que se terminan antes que el plato principal.",
     "price": 9000,
     "image": null
    },
    {
     "id": 61,
     "name": "PURE DE PAPAS",
     "description": "Puré de papas cremoso, con manteca de verdad. Suave, reconfortante, el compañero ideal de cualquier plato.",
     "price": 8000,
     "image": null
    },
    {
     "id": 233,
     "name": "ENSALADA MIX DE VERDES Y CHERRYS",
     "description": "Mix de hojas verdes frescas con tomates cherry. Liviana y fresca, para equilibrar la contundencia de la parrilla.",
     "price": 7500,
     "image": "assets/img/platos/233.webp"
    },
    {
     "id": 234,
     "name": "ENSALADA TRES SABORES",
     "description": "Combinación fresca de lechugas, tomate y cebolla morada. Ideal para acompañar.",
     "price": 9000,
     "image": null
    },
    {
     "id": 103,
     "name": "ENSALADA RUCULA Y PARMESANO",
     "description": "Rúcula fresca con escamas de parmesano. Simple y con carácter, como las buenas combinaciones.",
     "price": 9000,
     "image": null
    },
    {
     "id": 11,
     "name": "ENSALADA MIXTA",
     "description": "Lechuga, tomate y cebolla. La clásica de toda mesa argentina. No necesita más porque nunca necesitó más.",
     "price": 8000,
     "image": null
    },
    {
     "id": 10,
     "name": "ENSALADA CESAR",
     "description": "Hojas verdes, pollo grillado, croutons, parmesano y aderezo césar. Un clásico que funciona como entrada o como plato.",
     "price": 22000,
     "image": null
    },
    {
     "id": 300,
     "name": "ENSALADA MALANDRA",
     "description": "Lechuga, Zanahoria, Cherrys, Queso Tybo en cubos, Pollo Grillado y Croutones",
     "price": 25000,
     "image": null
    },
    {
     "id": 386,
     "name": "PURE DE CALABAZA",
     "description": "Puré de calabaza suave, con su dulzor natural. La guarnición que le da color y calidez al plato.",
     "price": 8000,
     "image": null
    },
    {
     "id": 387,
     "name": "PURE MIXTO",
     "description": "Papa y calabaza juntas en un puré cremoso. Lo mejor de los dos mundos, sin que tengas que elegir.",
     "price": 8000,
     "image": null
    }
   ]
  },
  {
   "id": 13,
   "name": "Postres",
   "items": [
    {
     "id": 341,
     "name": "COPA CINDOR",
     "description": "Helado, dulce de leche y esa nostalgia de la copa que pedías de chico. Un postre que no necesita presentación, necesita cuchara.",
     "price": 12000,
     "image": "assets/img/platos/341.webp"
    },
    {
     "id": 21,
     "name": "FLAN MIXTO",
     "description": "El flan casero de siempre, con dulce de leche Y crema. Acá no se elige, se pide todo. El final de comida más porteño que existe.",
     "price": 10000,
     "image": "assets/img/platos/21.webp"
    },
    {
     "id": 25,
     "name": "PANQUEQUE DULCE DE LECHE",
     "description": "Panqueque calentito con dulce de leche que se derrite y desborda. El clásico que nunca decepciona, porque el dulce de leche nunca decepciona.",
     "price": 9000,
     "image": "assets/img/platos/25.webp"
    },
    {
     "id": 340,
     "name": "ARROZ CON LECHE",
     "description": "Cremoso, con canela, como lo hacía la abuela. De esos postres que te devuelven a la cocina de tu infancia con una sola cucharada.",
     "price": 10000,
     "image": "assets/img/platos/340.webp"
    },
    {
     "id": 26,
     "name": "VIGILANTE",
     "description": "Queso y dulce, la pareja más despareja y más perfecta de la mesa porteña. Simple, honesto, eterno.",
     "price": 8500,
     "image": null
    },
    {
     "id": 264,
     "name": "BUDIN DE PAN",
     "description": "Budín de pan casero, denso y abrazador, con su caramelo brillante. El postre que aprovecha todo y no desperdicia nada, como manda el bodegón.",
     "price": 8000,
     "image": null
    },
    {
     "id": 371,
     "name": "BOMBON SUIZO",
     "description": "Helado bañado en chocolate que se quiebra con la cuchara. Elegante por fuera, pura felicidad por dentro.",
     "price": 13800,
     "image": null
    },
    {
     "id": 372,
     "name": "CASSATA",
     "description": "Tres sabores de helado con frutas y nueces, en el clásico corte italiano. Un final fresco para una comida abundante.",
     "price": 12000,
     "image": null
    }
   ]
  },
  {
   "id": 12,
   "name": "Bebidas",
   "items": [
    {
     "id": 113,
     "name": "Coca Cola Chica",
     "description": "La Coca de siempre, bien fría.",
     "price": 4500,
     "image": "assets/img/platos/113.webp"
    },
    {
     "id": 115,
     "name": "Coca Cola Zero Chica",
     "description": "Todo el sabor, sin azúcar.",
     "price": 4500,
     "image": "assets/img/platos/115.webp"
    },
    {
     "id": 165,
     "name": "Aquarius Pomelo (500 ml)",
     "description": "Bebida refrescante sabor pomelo.",
     "price": 4500,
     "image": "assets/img/platos/165.webp"
    },
    {
     "id": 269,
     "name": "Aquarius Pera (500 ml)",
     "description": "Bebida refrescante sabor pera.",
     "price": 4000,
     "image": "assets/img/platos/269.webp"
    }
   ]
  },
  {
   "id": 16,
   "name": "Vinos",
   "items": [],
   "subcategories": [
    {
     "id": 19,
     "name": "Tintos",
     "items": [
      {
       "id": 346,
       "name": "DV CATENA CABERNET MALBEC",
       "description": "El corte histórico de Catena: Cabernet y Malbec en equilibrio perfecto. Estructura y fruta, mano a mano.",
       "price": 44000,
       "image": null
      },
      {
       "id": 345,
       "name": "DV CATENA MALBEC MALBEC",
       "description": "Doble Malbec de dos fincas de Catena: potencia y elegancia en la misma copa.",
       "price": 44000,
       "image": "assets/img/platos/345.webp"
      },
      {
       "id": 412,
       "name": "BLEND SIN REGLAS SOTTANO",
       "description": "Corte tinto rebelde de Sottano. Frutado, redondo y para disfrutar sin protocolo.",
       "price": 19899,
       "image": "assets/img/platos/412.webp"
      },
      {
       "id": 411,
       "name": "SIN REGLAS MALBEC SOTTANO",
       "description": "Malbec joven y descontracturado de Sottano. Fruta fresca y trago fácil, como su nombre lo indica.",
       "price": 19899,
       "image": "assets/img/platos/411.webp"
      }
     ]
    },
    {
     "id": 20,
     "name": "Blancos",
     "items": [
      {
       "id": 350,
       "name": "AMIGUITO MOSCATEL",
       "description": "Moscatel aromático y amable, el vino del cuarteto y la amistad. Dulzor justo para la sobremesa.",
       "price": 18000,
       "image": "assets/img/platos/350.webp"
      }
     ]
    },
    {
     "id": 21,
     "name": "Otras Cepas",
     "items": [
      {
       "id": 344,
       "name": "VERMOUTH VINCENZO CATENA ZAPATA",
       "description": "El vermut de Catena Zapata. Botánicos, vino de calidad y mucha personalidad. Con hielo y una rodaja de naranja.",
       "price": 30000,
       "image": "assets/img/platos/344.webp"
      },
      {
       "id": 359,
       "name": "SALENTEIN ROSE",
       "description": "Rosado fresco y frutado del Valle de Uco. Liviano, versátil y de trago fácil.",
       "price": 14000,
       "image": "assets/img/platos/359.webp"
      }
     ]
    },
    {
     "id": 22,
     "name": "Boutique",
     "items": [
      {
       "id": 401,
       "name": "NICOLO BRUNETTO",
       "description": "Corte de Sangiovese, Syrah y Merlot de Bira Wines, 12 meses en roble francés. Cerezas maduras, especias y final largo. 93 pts Descorchados. Herencia italiana, terroir argentino.",
       "price": 57000,
       "image": "assets/img/platos/401.webp"
      },
      {
       "id": 402,
       "name": "TANITO UVAGGIO",
       "description": "Blend de Malbec, Sangiovese y Cabernet Franc del Valle de Uco, por Bira Wines. Fruta negra, ciruela y notas herbales; fresco y de paso ágil. Italiano de alma, mendocino de cuna.",
       "price": 39000,
       "image": "assets/img/platos/402.webp"
      },
      {
       "id": 403,
       "name": "VER SACRUM GARNACHA",
       "description": "Garnacha de Los Chacayes, Valle de Uco. Fruta roja madura, un dejo de pimienta y acidez vibrante que lo hace fresco y fluido. Una rareza que vale el desvío.",
       "price": 55000,
       "image": "assets/img/platos/403.webp"
      },
      {
       "id": 405,
       "name": "MENDEL ROSADIA",
       "description": "Rosado de Pinot Noir, Cabernet Franc y Merlot de Paraje Altamira, por Roberto de la Mota. Durazno blanco y cítricos, delicado y fresco. Producción limitada.",
       "price": 87000,
       "image": "assets/img/platos/405.webp"
      },
      {
       "id": 404,
       "name": "MENDEL SEMILLON",
       "description": "El blanco de culto de Roberto de la Mota. Semillón fresco, mineral y elegante: pera, flores y un toque de miel. Untuoso en boca, de final largo. Para entendidos y curiosos.",
       "price": 36000,
       "image": "assets/img/platos/404.webp"
      },
      {
       "id": 408,
       "name": "CATALPA CABERNET FRANC",
       "description": "Cabernet Franc de Atamisque, Tupungato, con crianza en roble francés. Pimientos, tabaco y fruta madura; equilibrado y de taninos suaves. Elegancia del Valle de Uco.",
       "price": 37500,
       "image": null
      },
      {
       "id": 409,
       "name": "IKIGAI ROSADO MALBEC",
       "description": "Rosado de Malbec fresco y frutado, de color delicado y trago fácil. Para la previa, la picada o la sobremesa larga.",
       "price": 37500,
       "image": "assets/img/platos/409.webp"
      }
     ]
    }
   ]
  },
  {
   "id": 24,
   "name": "Menu Noche",
   "items": [
    {
     "id": 375,
     "name": "MENU NOCHE",
     "description": "",
     "price": 37000,
     "image": null,
     "groups": [
      {
       "title": "Entrada (elige una opción)",
       "options": [
        {
         "name": "EMPANADA DE CARNE",
         "price": 0
        },
        {
         "name": "EMPANADA DE HONGOS",
         "price": 0
        },
        {
         "name": "EMPANADA DE QUESO Y CEBOLLA",
         "price": 0
        },
        {
         "name": "MATRIMONIO",
         "price": 0
        },
        {
         "name": "Mini Tortilla de papa",
         "price": 0
        },
        {
         "name": "EMPANADA DE JAMON Y QUESO",
         "price": 0
        }
       ]
      },
      {
       "title": "Principal (una opción, incluye guarnición o salsa a elección)",
       "options": [
        {
         "name": "Plato del Dia",
         "price": 0
        },
        {
         "name": "Cerdo",
         "price": 0
        },
        {
         "name": "Milanesa de Carne",
         "price": 0
        },
        {
         "name": "Milanesa de Pollo",
         "price": 0
        },
        {
         "name": "SORRENTINOS JyQ",
         "price": 0
        },
        {
         "name": "Merluza",
         "price": 0
        },
        {
         "name": "FUSILES",
         "price": 0
        },
        {
         "name": "BIFE DE CHORIZO",
         "price": 0
        },
        {
         "name": "Pechuga",
         "price": 0
        },
        {
         "name": "Milanesa Napo",
         "price": 0
        }
       ]
      },
      {
       "title": "Guarnicion",
       "options": [
        {
         "name": "ENSALADA MIXTA",
         "price": 0
        },
        {
         "name": "PURE DE PAPA",
         "price": 0
        },
        {
         "name": "PAPAS FRITAS",
         "price": 0
        }
       ]
      },
      {
       "title": "Postre (elige una opción)",
       "options": [
        {
         "name": "Café Cortado",
         "price": 0
        },
        {
         "name": "VIGILANTE",
         "price": 0
        },
        {
         "name": "BUDIN DE PAN",
         "price": 0
        },
        {
         "name": "PANQUEQUE DULCE DE LECHE",
         "price": 0
        },
        {
         "name": "Café",
         "price": 0
        }
       ]
      },
      {
       "title": "Bebida (elige una opción)",
       "options": [
        {
         "name": "Limonada Natural (500 ml)",
         "price": 0
        },
        {
         "name": "Agua Mineral AQA (500 ml)",
         "price": 0
        },
        {
         "name": "Agua Mineral AQA con Gas (500 ml)",
         "price": 0
        },
        {
         "name": "Coca Cola Chica",
         "price": 0
        },
        {
         "name": "Coca Cola Zero Chica",
         "price": 0
        },
        {
         "name": "Sprite Chica",
         "price": 0
        },
        {
         "name": "Sprite Zero Chica",
         "price": 0
        },
        {
         "name": "Schweppes Pomelo Chica",
         "price": 0
        },
        {
         "name": "Schweppes Tónica Chica",
         "price": 0
        },
        {
         "name": "Aquarius Manzana (500 ml)",
         "price": 0
        },
        {
         "name": "Aquarius Pera (500 ml)",
         "price": 0
        },
        {
         "name": "Aquarius Pomelo (500 ml)",
         "price": 0
        },
        {
         "name": "TINTO DE VERANO",
         "price": 0
        },
        {
         "name": "GIN TONIC",
         "price": 0
        },
        {
         "name": "FERROVIARIO",
         "price": 0
        },
        {
         "name": "CAMPARI CON NARANJA",
         "price": 0
        },
        {
         "name": "FERNET CON COCA",
         "price": 0
        },
        {
         "name": "APEROL",
         "price": 0
        },
        {
         "name": "VERMUT SPRITZ",
         "price": 0
        },
        {
         "name": "NEGRONI",
         "price": 0
        },
        {
         "name": "PICO Y PALA",
         "price": 0
        },
        {
         "name": "GANCIA C/ SPRITE",
         "price": 0
        },
        {
         "name": "CARPANO CON POMELO",
         "price": 0
        },
        {
         "name": "DESTORNILLADOR",
         "price": 0
        },
        {
         "name": "CUBA LIBRE",
         "price": 0
        },
        {
         "name": "CERVEZA TIRADA ARTENSANAL RUBIA",
         "price": 0
        },
        {
         "name": "COPA DE VINO MALBEC",
         "price": 0
        },
        {
         "name": "COPA DE VINO BLANCO",
         "price": 0
        },
        {
         "name": "CYNAR",
         "price": 0
        }
       ]
      },
      {
       "title": "SALSAS MENU",
       "options": [
        {
         "name": "RAGÚ DE CARNE",
         "price": 0
        },
        {
         "name": "PESTO Y NUECES",
         "price": 0
        },
        {
         "name": "POMODORO",
         "price": 0
        },
        {
         "name": "CUATRO QUESOS",
         "price": 0
        },
        {
         "name": "CREMA",
         "price": 0
        },
        {
         "name": "ROSA",
         "price": 0
        },
        {
         "name": "SALSA MALANDRA",
         "price": 0
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": 23,
   "name": "Menu Ejecutivo Mediodia",
   "items": [
    {
     "id": 220,
     "name": "Menu Ejecutivo Express",
     "description": "PRINCIPAL + GUARNICION + BEBIDA",
     "price": 22000,
     "image": null,
     "groups": [
      {
       "title": "Principales",
       "options": [
        {
         "name": "Pechuga",
         "price": 0
        },
        {
         "name": "Ternera",
         "price": 0
        },
        {
         "name": "Cerdo",
         "price": 0
        },
        {
         "name": "Milanesa de Carne",
         "price": 0
        },
        {
         "name": "Cheeseburger",
         "price": 0
        },
        {
         "name": "Milanesa de Pollo",
         "price": 0
        },
        {
         "name": "Plato del Dia",
         "price": 0
        }
       ]
      },
      {
       "title": "Bebida",
       "options": [
        {
         "name": "Aquarius Pera (500 ml)",
         "price": 3000
        },
        {
         "name": "Schweppes Tónica Chica",
         "price": 3000
        },
        {
         "name": "Schweppes Pomelo Chica",
         "price": 3000
        },
        {
         "name": "Coca Cola Chica",
         "price": 3000
        },
        {
         "name": "Coca Cola Zero Chica",
         "price": 3000
        },
        {
         "name": "Sprite Chica",
         "price": 3000
        },
        {
         "name": "Sprite Zero Chica",
         "price": 3000
        },
        {
         "name": "Limonada Natural (500 ml)",
         "price": 0
        },
        {
         "name": "COPA DE VINO MALBEC",
         "price": 3000
        },
        {
         "name": "Aquarius Manzana (500 ml)",
         "price": 3000
        },
        {
         "name": "Aquarius Pomelo (500 ml)",
         "price": 3000
        },
        {
         "name": "Agua Mineral AQA (500 ml)",
         "price": 0
        },
        {
         "name": "Agua Mineral AQA con Gas (500 ml)",
         "price": 0
        }
       ]
      },
      {
       "title": "Guarnicion",
       "options": [
        {
         "name": "ENSALADA MIXTA",
         "price": 0
        },
        {
         "name": "PURE DE PAPA",
         "price": 0
        },
        {
         "name": "PAPAS FRITAS",
         "price": 0
        }
       ]
      }
     ]
    }
   ]
  }
 ]
};
