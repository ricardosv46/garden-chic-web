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
