enum enumDificultad {
  Leve = 'Leve',
  Medio = 'Medio',
}
export const dataProyectos = [
  {
    img: 'work1.jpg',
    title: 'Somerset',
    description: 'Mirum est notare quam littera gothica, quam nunc.sss',
  },
  {
    img: 'work2.jpg',
    title: 'Wimbledon',
    description: 'Mirum est notare quam littera gothica, quam nunc.',
  },
  {
    img: 'work3.jpg',
    title: 'Holly',
    description: 'Mirum est notare quam littera gothica, quam nunc.',
  },
  {
    img: 'work4.jpg',
    title: 'Water',
    description: 'Mirum est notare quam littera gothica, quam nunc.',
  },
  {
    img: 'work5.jpg',
    title: 'Stefan',
    description: 'Mirum est notare quam littera gothica, quam nunc.',
  },
  {
    img: 'work6.jpg',
    title: 'Fairy',
    description: 'Mirum est notare quam littera gothica, quam nunc.',
  },

  {
    img: 'work7.jpg',
    title: 'Lean',
    description: 'Mirum est notare quam littera gothica, quam nunc.',
  },
  {
    img: 'work8.jpg',
    title: 'Rural Terrace',
    description: 'Mirum est notare quam littera gothica, quam nunc.',
  },
  {
    img: 'work9.jpg',
    title: 'Notting Hill',
    description: 'Mirum est notare quam littera gothica, quam nunc.',
  },
  {
    img: 'work10.jpg',
    title: 'Jet Black',
    description: 'Mirum est notare quam littera gothica, quam nunc.',
  },
  {
    img: 'work11.jpg',
    title: 'Spa',
    description: 'Mirum est notare quam littera gothica, quam nunc.',
  },
  {
    img: 'work12.jpg',
    title: 'Engineering',
    description: 'Mirum est notare quam littera gothica, quam nunc.',
  },
]
export const dataProyects: EntitydataProyects[] = [
  {
    pathname: '01_NAVARRETE',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES_Op01.jpg',
    imgAfter: '04_DESPUES.jpg',
    description:
      'Este proyecto “Sogno Veneziano” invita a recorrer Venecia a través de la música de Antonio Vivaldi, tomar un café en la primavera, leer un libro en el verano, vestirse en el otoño y abrigarse en el invierno. El espacio está compuesto por una paleta de tonos neutros y materiales naturales que sirven como fondo a cada una de las estaciones que se presentan a todo color. Además, los detalles como las plantas y macetas cumplieron un rol fundamental para complementar este espacio.',
    ubicacion: 'Rivera Navarrete 548, Miraflores.',
    cliente: 'PIONERO INMOBILIARIA',
    proceso:
      'Primero se realizó el impermeabilizado con geomembrana y manto asfáltico para evitar las filtraciones de agua y humedad. Esto protege el techo, piso o pared en donde se realiza la construcción del jardín. Luego se pasó a realizar el armado de las jardineras: primera capa de geotextil, segunda capa de piedra, tercera capa de geotextil y para finalizar una capa de sustrato. Y por último se pasó a realizar el sembrado e instalación de césped.',
    servicios: [
      'Paisajismo',
      'Muros verdes',
      'Techos verdes',
      'Impermeabilización',
    ],
    duracion: {
      cantidad: '8',
      tipo: 'meses',
    },
    year: '2021',
    dificultad: enumDificultad.Medio,
    plantasinstaladas: [
      'Grass',
      'Coprosmas',
      'Carissa',
      'Duranta azul',
      'Mirto',
      'Madre selva',
      'Cissus',
      'Meijo',
      'Lantana',
      'Repens',
      'Aptenias',
    ],
    resumen1:
      'RIVERA NAVARRETE 548 es el primer proyecto enfocado en integrar la vivienda al corazón del Centro Financiero de San Isidro; lo que le otorgó el Premio Arquitectura y Ciudad 2020, de la Cámara Peruana de la Construcción CAPECO.',
  },
  {
    pathname: '02_VIDAL',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES_Op01.jpg',
    imgAfter: '04_DESPUES.jpg',
    description:
      'En este proyecto ubicado en San Isidro, trabajamos de acuerdo al diseño que solicitaba nuestro cliente. Elaboramos un espacio de áreas verdes, en donde se instaló una zona recreativa para niños, también una zona Home Pet Home y además un lugar para compartir con amigos.',
    ubicacion: 'Vidal 140, San Isidro.',
    cliente: 'PIONERO INMOBILIARIA',
    proceso:
      'Primero se realizó el impermeabilizado con geomembrana y manto asfáltico para evitar las filtraciones de agua y humedad. Esto protege el techo, piso o pared en donde se realiza la construcción del jardín. Luego se pasó a realizar el armado de las jardineras: primera capa de geotextil, segunda capa de piedra, tercera capa de geotextil y para finalizar una capa de sustrato. Y por último se pasó a realizar el sembrado e instalación de césped.',
    servicios: [
      'Paisajismo',
      'Muros verdes',
      'Techos verdes',
      'Impermeabilización',
    ],
    duracion: {
      cantidad: '6',
      tipo: 'meses',
    },
    year: '2022',
    dificultad: enumDificultad.Medio,
    plantasinstaladas: [
      'Grass',
      'Carissa',
      'Mirto',
      'Ágave',
      'Agapanto',
      'Schefflera',
      'Aptenia verde',
      'Paspalum',
      'Plumbago',
      'Rhoeo rosado',
    ],
  },
  {
    pathname: '03_SOL_BARRANCO',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES_Op01.jpg',
    imgAfter: '04_DESPUES.jpg',
    description:
      'En este proyecto ubicado en Barranco, trabajamos de acuerdo al diseño que solicitaba nuestro cliente. Elaboramos un espacio de áreas verdes en el primer piso y en la terraza en donde se instaló una piscina, una zona Home Pet Home y además un lugar para compartir con amigos.',
    ubicacion: 'Sol 135, Barranco.',
    cliente: 'PIONERO INMOBILIARIA',
    proceso:
      'Primero se realizó el impermeabilizado con geomembrana y manto asfáltico para evitar las filtraciones de agua y humedad. Esto protege el techo, piso o pared en donde se realiza la construcción del jardín. Luego se pasó a realizar el armado de las jardineras: primera capa de geotextil, segunda capa de piedra, tercera capa de geotextil y para finalizar una capa de sustrato. Y por último se pasó a realizar el sembrado e instalación de césped.',
    servicios: [
      'Paisajismo',
      'Muros verdes',
      'Techos verdes',
      'Impermeabilización',
    ],
    duracion: {
      cantidad: '6',
      tipo: 'meses',
    },
    year: '2021',
    dificultad: enumDificultad.Medio,
    plantasinstaladas: [
      'Grass',
      'Carissa',
      'Mirto',
      'Ágave',
      'Agapanto',
      'Schefflera',
      'Aptenia verde',
      'Paspalum',
      'Plumbago',
      'Rhoeo rosado',
    ],
  },
  {
    pathname: '04_MADDY',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES_Op01.jpg',
    imgAfter: '04_DESPUES.jpg',
    description:
      'En este proyecto ubicado en Magdalena, trabajamos de acuerdo al diseño que solicitaba nuestro cliente. Instalamos jardineras y macetas en la zona del patio y la zona pet además áreas verdes en la zona de parrillas.',
    ubicacion: 'Jr. Tacna 1056 Magdalena',
    cliente: ' ICASA - MADDY',
    proceso:
      'Primero se realizó el impermeabilizado con geomembrana y manto asfáltico para evitar las filtraciones de agua y humedad. Esto protege el techo, piso o pared en donde se realiza la construcción del jardín. Luego se pasó a realizar el armado de las jardineras: primera capa de geotextil, segunda capa de piedra, tercera capa de geotextil y para finalizar una capa de sustrato. Y por último se pasó a realizar el sembrado e instalación de césped.',
    servicios: [
      'Paisajismo',
      'Instalación de jardineras y macetas',
      'Sistema de riego',
    ],
    duracion: {
      cantidad: '6',
      tipo: 'meses',
    },
    year: '2021',
    dificultad: enumDificultad.Leve,
    plantasinstaladas: [
      'Grass',
      'Carissa',
      'Mirto',
      'Ágave',
      'Agapanto',
      'Schefflera',
      'Aptenia verde',
      'Paspalum',
      'Plumbago',
      'Rhoeo rosado',
    ],
  },
  {
    pathname: '05_LOFT_MARIANNE',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES_Op01.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2018',
    nombre: 'Loft de Marianne',
    description:
      'El punto principal del proyecto, diseñado por el arquitecto Diego Olivera, fue un olivo, que invadía todo el loft con sus ramas. La construcción estuvo marcada por el vidrio y el no uso de paredes, manteniendo una conexión entre las áreas internas y externas. La paleta de colores es otro encanto del proyecto. Entre negro y gris se utilizó también tonos de rosa pastel, azul y verde. El paisaje estuvo bien marcado por pinturas, gran variedad de plantas y maceteros. Todos ellos refrescando cada rincón del Loft.',
    cliente: 'Arquitecto Diego Olivera ',
    proceso:
      'Primero se realizó el impermeabilizado con geomembrana y manto asfáltico para evitar las filtraciones de agua y humedad. Esto protege el techo, piso o pared en donde se realiza la construcción del jardín. Luego se pasó a realizar el armado de las jardineras: primera capa de geotextil, segunda capa de piedra, tercera capa de geotextil y para finalizar una capa de sustrato. Y por último se pasó a realizar el sembrado e instalación de césped.',
    servicios: [
      'Paisajismo',
      'Instalación de jardineras y macetas',
      'Sistema de riego',
      'Mantenimiento de áreas verdes',
    ],
    duracion: {
      cantidad: '1',
      tipo: 'mes',
    },
    year: '2018',
    dificultad: enumDificultad.Medio,
    plantasinstaladas: ['Monsteras', 'Cisus', 'Helecho alemán', 'Helecho'],
  },
  {
    pathname: '06_CASA_RIBBED',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES_Op01.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2019',
    nombre: 'Casa Ribbed',
    description:
      'Este proyecto fue muy novedoso e innovador, tuvo un concepto que exhibe un loft masculino, vanguardista, sofisticado, elegante, de líneas rectas y espíritu juvenil, con una gama de colores muy interesantes. La propuesta refleja un concepto de casa acanalada, con elementos que se unen con otros para generar movimiento. Además, los detalles como las plantas y macetas cumplieron un rol fundamental para complementar este espacio',
    cliente: ' Arquitecto Diego Olivera',
    proceso:
      'Primero se realizó la instalación de las plantas colgantes. Luego se pasó a instalar los maceteros y macetas según el diseño del arquitecto. Además se aplicaron algunos detalles con plantas secas. También se realizó el mantenimiento de cada una de ellas.',
    servicios: [
      'Paisajismo',
      'Instalación de jardineras y macetas',
      'Mantenimiento de áreas verdes',
    ],
    duracion: {
      cantidad: '1',
      tipo: 'mes',
    },
    year: '2019',
    dificultad: enumDificultad.Leve,
    plantasinstaladas: [
      'Boas',
      'Orejas de elefante',
      'Meijo',
      'Helecho',
      'Monstera',
      'Cisus',
    ],
  },
  {
    pathname: '07_QUINTA_MASSERIA',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES_Op01.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2019',
    nombre: 'Quinta Masseria',
    description:
      'En este proyecto la arquitecta Jessie D’Angelo se inspiró en las culturas grecorromana, árabe y española para crear este ambiente: una antigua casa de campo mediterránea restaurada para hospedar a los visitantes. La interiorista ha recurrido al minimalismo sin perder su estilo, siempre abundante en texturas en los acabados y los tapices. Complementan el espacio una serie de macetas con cactus esculturales y obras de Valeria Ghezzi, Jessica Schneider y Claudia Caffarena.',
    cliente: 'Arquitecta Jessie D’Angelo',
    proceso:
      'Primero se realizó la instalación de las plantas colgantes. Luego se pasó a instalar los maceteros y macetas según el diseño del arquitecto. Además se aplicaron algunos detalles con plantas secas. También se realizó el mantenimiento de cada una de ellas.',
    servicios: [
      'Paisajismo',
      'Instalación de jardineras y macetas',
      'Mantenimiento de áreas verdes',
    ],
    duracion: {
      cantidad: '1',
      tipo: 'mes',
    },
    year: '2019',
    dificultad: enumDificultad.Leve,
    plantasinstaladas: [
      'Opuntia ficus-indica “Tuna”',
      'Echinopsis pachanoi “Cactus San Pedro”',
      'Valenciana ágave',
    ],
  },
  {
    pathname: '08_LE_COTTAGE',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES_Op01.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2022',
    nombre: 'Le Cottage',
    description:
      'Este proyecto fue pensado en una pequeña cabaña de vacaciones que alberga a una familia de cuatro personas frente al lago. Una paleta de colores en tonos de azul, verde y neutros nos reconectan rodeados de naturaleza. Materiales como la madera pintada, los wallpapers en techos y paredes, las texturas de las telas y coloridos crean una sensación de bienestar y calma dentro de los tres ambientes. Los detalles como las plantas y macetas cumplieron un rol fundamental para complementar este espacio.',
    cliente: 'Arquitecta Jessie D’Angelo',
    proceso:
      'Primero se realizó la instalación de los maceteros y macetas según el diseño del arquitecto. Luego se brindó el servicio de mantenimiento semanal de cada una de ellas.',
    servicios: [
      'Paisajismo',
      'Instalación de jardineras y macetas',
      'Mantenimiento de áreas verdes',
    ],
    duracion: {
      cantidad: '1',
      tipo: 'mes',
    },
    year: '2022',
    dificultad: enumDificultad.Leve,
    plantasinstaladas: [
      'Strelitzia',
      'Orejas de elefante',
      'Vinca verde',
      ' Vinca variegada',
    ],
  },
  {
    pathname: '09_ESTUDIO_HUERTO_CHEF',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2022',
    nombre: 'Estudio y Huerto de la Chef',
    description:
      'Este proyecto reune la naturaleza, los elementos orgánicos y las texturas que se combinan con una paleta de color neutra y maderas cálidas con pinceladas de colores intensos y piezas escultóricas. El espacio es sobrio e invita a la introspección, a disfrutar de las cosas simples y el tiempo en calma, de la esencia detrás de momentos que se hacen memorables. Sembrar y cosechar los alimentos para crear experiencias a través de la comida, enfatiza la importancia de la naturaleza, mientras su belleza queda enmarcada desde el interior como un cuadro.',
    cliente: 'Arquitectas Andrea Cavassa y Claudia Triveño',
    proceso:
      'Primero se instaló encima del estudio de la chef las buganvilias, luego se realizó la siembra de una gran variedad de vegetales para el huerto de la chef según el diseño de las arquitectas. También se sembró en otras zonas plantas como la cheflera, liriope, vincas, entre otras. Además se brindó el servicio de mantenimiento semanal del huerto y de las demás plantas.',
    servicios: [
      'Paisajismo',
      'Instalación de jardineras y macetas',
      'Mantenimiento de áreas verdes',
    ],
    duracion: {
      cantidad: '1',
      tipo: 'mes',
    },
    year: '2022',
    dificultad: enumDificultad.Medio,
    plantasinstaladas: [
      'Buganvilias',
      'Orejas de elefante',
      'Cheflera gigante',
      'Thujas',
      'Liriope',
      'Aptenias',
      'Vincas',
      'Setcresea',
      'Dracena',
    ],
  },
  {
    pathname: '10_SOGNO_VENEZIANO',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2022',
    nombre: 'Sogno Veneziano',
    description:
      'Este proyecto “Sogno Veneziano” invita a recorrer Venecia a través de la música de Antonio Vivaldi, tomar un café en la primavera, leer un libro en el verano, vestirse en el otoño y abrigarse en el invierno. El espacio está compuesto por una paleta de tonos neutros y materiales naturales que sirven como fondo a cada una de las estaciones que se presentan a todo color. Además, los detalles como las plantas y macetas cumplieron un rol fundamental para complementar este espacio.',
    cliente: 'Erika Zielinski',
    proceso:
      'Primero se realizó la instalación de los maceteros y macetas según el diseño del arquitecto. También se implementó un jardín vertical de senecio cineraria en la bañera. Luego se brindó el servicio de mantenimiento semanal de cada una de ellas.  ',
    servicios: [
      'Paisajismo',
      'Instalación de jardineras y macetas',
      'Jardín vertical',
      'Mantenimiento',
    ],
    duracion: {
      cantidad: '1',
      tipo: 'mes',
    },
    year: '2022',
    dificultad: enumDificultad.Leve,
    plantasinstaladas: [
      'Buganvilia',
      'Gerbera',
      'Vincas',
      'Senecio Cineraria',
      'Hederas',
      'Ciprés',
    ],
  },
  {
    pathname: '11_TEJIENDO_LAZOS',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES_OP_02.jpg',
    edicion: 'CASACOR 2022',
    nombre: 'Tejiendo Lazos',
    description:
      'No hay lazo más fuerte que el que se teje entre una madre y su hija. Este proyecto nace como una atmósfera mágica que busca reflejar la calidez de su amor a la vez que conectarnos con nuestro niño interior. Un ambiente perfecto para compartir, sentir y crear recuerdos. El diseño tiene como núcleo un árbol que alberga sus tesoros y libros preferidos. Alrededor, un columpio colmena y una cabaña que será su refugio. Las texturas, materiales y paleta de colores reflejan su amor por la naturaleza y cada flor tejida representa la infinita conexión entre ellas. Además, los detalles como las plantas y macetas cumplieron un rol fundamental para complementar este espacio.',
    cliente:  'Micaela Puertas',
    proceso:
      'Primero se realizó la instalación de los maceteros y macetas según el diseño de la arquitecta. También se instaló una enredadera en la parte superior de la cama de la niña.  Luego se brindó el servicio de mantenimiento semanal de cada una de ellas.',
    servicios: [
      'Paisajismo',
      'Instalación de jardineras y macetas',
      'Mantenimiento',
    ],
    duracion: {
      cantidad: '1',
      tipo: 'mes',
    },
    year: '2022',
    dificultad: enumDificultad.Leve,
    plantasinstaladas: [
      'Lantana',
     ' Soleirolia',
      'Lengua de suegra',
      'Buganvilia',
      'Calathea',
      'Madre selva'
      
    ],
  },
  {
    pathname: '12_FLAT_FAMILIAR',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2018',
    nombre: 'Flat familiar',
    description:
      'Este proyecto está inspirado en una pareja joven y su pequeña hija. Destaca en el ambiente la optimización del espacio de 70 m² que aprovecha una gran estantería multifuncional como división del salón para el dormitorio y para aprovechar las paredes de la cocina. Las líneas y los contornos están bien definidos, no solo por los muebles, sino también por la iluminación dirigida. ',
    cliente:  'Jennifer Junek y Marilú Salcedo',
    proceso:
      'Primero se realizó la instalación de los maceteros y macetas según el diseño del arquitecto. Luego se brindó el servicio de mantenimiento semanal de cada una de ellas.',
    servicios: [
      'Paisajismo',
      'Instalación de jardineras y macetas',
      'Mantenimiento',
    ],
    duracion: {
      cantidad: '1',
      tipo: 'mes',
    },
    year: '2028',
    dificultad: enumDificultad.Leve,
    resumen1:'La paleta de colores trae el contraste entre el blanco y el negro, mediado por la madera y toques de azul. Esto ayuda a equilibrar la sobriedad y brinda la comodidad necesaria para albergar a una familia. Las plantas y las obras de arte están en todas partes y alinean el piso con el tema de CASACOR 2018 , A Casa Viva.'
  },
]
export interface EntitydataProyects {
  img: string
  pathname: string
  imgBefore: string
  imgAfter: string
  description?: string
  resumen1?: string
  resumen2?: string
  ubicacion?: string
  edicion?: string
  nombre?: string
  cliente?: string
  year?: string
  proceso?: string
  servicios?: string[]
  duracion?: {
    cantidad: string
    tipo: string
  }
  dificultad?: enumDificultad
  plantasinstaladas?: string[]
}
