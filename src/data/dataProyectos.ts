enum enumDificultad {
  Leve = 'Leve',
  Medio = 'Medio',
}

export enum EnumServicios {
  Paisajismo = 'Paisajismo',
  Impermeabilizacion = 'Impermeabilización',
  Techosverdes = 'Techos verdes',
  SistemadeRiegoTecnificado = 'Sistema de Riego Tecnificado',
  Mantenimientoareasverdes = 'Mantenimiento de áreas verdes',
  JardinVertical = 'Jardín Vertical',
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
    pathname: 'NAVARRETE',
    dataHover: 'NAVARRETE',
    imgCarrusel: 'PROYECTO_01.jpg',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    antes: [
      'Edificio Rivera Navarrete realizado por la constructora V&V Bravo y la Inmobiliaria Pionero en el corazón del Centro Financiero de San Isidro.',
      'Es el primer proyecto enfocado en integrar la vivienda al corazón del Centro Financiero de San Isidro; lo que le otorgó el Premio Arquitectura y Ciudad 2020, de la Cámara Peruana de la Construcción CAPECO.',
    ],
    ubicacion: 'Rivera Navarrete 548, Miraflores.',
    cliente: 'PIONERO INMOBILIARIA',
    proceso:
      'Primero se realizó el impermeabilizado con geomembrana y manto asfáltico para evitar las filtraciones de agua y humedad. Esto protege el techo, piso o pared en donde se realiza la construcción del jardín, luego se pasó a realizar el armado de las jardineras: primera capa de geotextil, segunda capa de piedra, tercera capa de geotextil y para finalizar una capa de sustrato. Y por último se pasó a realizar el sembrado e instalación de césped.',
    servicios: [
      EnumServicios.Paisajismo,
      EnumServicios.Techosverdes,
      EnumServicios.Impermeabilizacion,
      EnumServicios.SistemadeRiegoTecnificado,
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
    desafios: [
      'Los desafíos que se encontraron en el proyecto fueron los trabajos en altura, que a través de los equipos adecuados de protección, con la supervisión constante de nuestro personal se logró la ejecución y montaje de los jardines en los balcones.',
      'Fue un proyecto ejecutado con mucha precisión de acuerdo a los tiempos y en coordinación con otros contratistas para brindar el mejor desempeño en la obra.',
      'Hubo trabajos de impermeabilización de las bandejas con cableado para los techos verdes, fueron más de 170 jardines en pequeños espacios.',
      'Se contó con una comunicación directa con el cliente constructor en coordinación con la inmobiliaria, para resolver sus consultas, incidencias y demás dificultades, logrando satisfacerlos.',
    ],
  },
  {
    pathname: 'VIDAL',
    dataHover: 'VIDAL',
    imgCarrusel: '01.jpg',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    antes: [
      'Proyecto Inmobiliario Vidal, con el concepto de compartir sus vidas con sus engreídos de cuatro patas, cuenta con una Zona Home Pet Home para que puedan correr, jugar y tomar un baño sin salir de casa.',
      'En este proyecto ubicado en Miraflores, trabajamos de acuerdo al diseño que solicitaba nuestro cliente, elaboramos un espacio de áreas verdes, en donde se instaló una zona recreativa para niños, también una zona Home Pet Home y además un lugar para compartir con amigos.',
    ],
    ubicacion: 'Vidal 140, San Isidro.',
    cliente: 'PIONERO INMOBILIARIA',
    proceso:
      'Primero se realizó el impermeabilizado con geomembrana y manto asfáltico para evitar las filtraciones de agua y humedad, esto protege el techo, piso o pared en donde se realiza la construcción del jardín. Luego se pasó a realizar el armado de las jardineras: primera capa de geotextil, segunda capa de piedra, tercera capa de geotextil y para finalizar una capa de sustrato. Y por último se pasó a realizar el sembrado e instalación de césped.',
    servicios: [
      EnumServicios.Paisajismo,
      EnumServicios.Techosverdes,
      EnumServicios.Impermeabilizacion,
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
    desafios: [
      'En este proyecto se ejecutó obras en áreas comunes, un punto central de la obra fue la Zona Pet Home con la implementación de manto asfáltico y su recubrimiento',
      'Hubo mucha coordinación con cada uno de los contratistas. Se ingresó al proyecto en plena construcción logrando cumplir con las fechas estimadas de presentación.',
      'Para esta obra se asignó horarios extendidos para el cumplimiento del mismo, logrando así cumplir con los objetivos y dar a nuestro cliente el sentido del compromiso y dedicación para desempeñar la obra.',
    ],
  },
  {
    pathname: 'SOL_BARRANCO',
    dataHover: 'SOL DE BARRANCO',
    imgCarrusel: '01.jpg',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    antes: [
      'En este proyecto ubicado en Barranco, trabajamos de acuerdo al diseño que solicitaba nuestro cliente, elaboramos un espacio de áreas verdes en el primer piso y en la terraza en donde se instaló una piscina, una zona Home Pet Home y además un lugar para compartir con amigos.',
    ],
    ubicacion: 'Sol 135, Barranco.',
    cliente: 'PIONERO INMOBILIARIA',
    proceso:
      'Primero se realizó el impermeabilizado con geomembrana y manto asfáltico para evitar las filtraciones de agua y humedad. Esto protege el techo, piso o pared en donde se realiza la construcción del jardín. Luego se pasó a realizar el armado de las jardineras: primera capa de geotextil, segunda capa de piedra, tercera capa de geotextil y para finalizar una capa de sustrato. Y por último se pasó a realizar el sembrado e instalación de césped.',
    servicios: [
      EnumServicios.Paisajismo,
      EnumServicios.Techosverdes,
      EnumServicios.Impermeabilizacion,
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
    desafios: [
      'Se realizó el impermeabilizado con geomembrana y manto asfáltico para evitar las filtraciones de agua y humedad, esto protege el techo, piso o pared en donde se realiza la construcción del jardín, eealizando luego el armado de los jardines.',
      'Todo este trabajo se realizó en altura, con andamios colgantes y con las medidas de protección y seguridad, en una constante supervisión de las operaciones.',
      'Cabe resaltar que los jardines delgados contaban con una gran profundidad.',
      'Tanto la constructora como la inmobiliaria quedaron satisfechos con la obra.',
    ],
  },
  {
    pathname: 'MADDY',
    dataHover: 'MADDY',
    imgCarrusel: '01.jpg',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    antes: [
      'El Edificio MADDY es un proyecto realizado por la constructora e inmobiliaria ICASA ubicado en Magdalena.',
      'En este proyecto trabajamos de acuerdo al diseño y presupuesto que solicitaba nuestro cliente.',
    ],
    ubicacion: 'Jr. Tacna 1056 Magdalena',
    cliente: ' ICASA - MADDY',
    proceso:
      'Primero se realizó el impermeabilizado con geomembrana y manto asfáltico para evitar las filtraciones de agua y humedad, eto protege el techo, piso o pared en donde se realiza la construcción del jardín. Luego se pasó a realizar el armado de las jardineras: primera capa de geotextil, segunda capa de piedra, tercera capa de geotextil y para finalizar una capa de sustrato. Y por último se pasó a realizar el sembrado e instalación de césped.',
    servicios: [EnumServicios.Paisajismo],
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
    desafios: [
      'El desafío de este proyecto fue trabajar con un espacio ya terminado que requería una solución con plantas de porte bajo y macetas de cemento.',
      'Se realizó trabajos de instalación de jardinera y macetas acordes a la obra.',
      'Se contó con una comunicación directa con el cliente.',
    ],
  },
  {
    pathname: 'LOFT_MARIANNE',
    dataHover: 'LOFT DE MARIANNE',
    imgCarrusel: '01.jpg',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2018',
    nombre: 'Loft de Marianne',
    antes: [
      'El proyecto Loft de Marianne fue realizado por el arquitecto Diego Olivera, presentado en Casacor 2018, la exposición de este trabajo fue realizado en la Casa Mario Bianco, en el distrito de San Isidro.',
      'El punto principal del proyecto fue un olivo, que invadía todo el loft con sus ramas.',
      'La construcción estuvo marcada por el vidrio y el no uso de paredes, manteniendo una conexión entre las áreas internas y externas, la paleta de colores es otro encanto del proyecto, entre negro y gris se utilizó también tonos de rosa pastel, azul y verde.',
      'El paisaje estuvo bien marcado por pinturas, gran variedad de plantas y maceteros. Todos ellos refrescando cada rincón del Loft.',
    ],
    cliente: 'Arquitecto Diego Olivera ',
    proceso:
      'Primero se realizó el impermeabilizado con geomembrana y manto asfáltico para evitar las filtraciones de agua y humedad, esto protege el techo, piso o pared en donde se realiza la construcción del jardín, luego se pasó a realizar el armado de las jardineras: primera capa de geotextil, segunda capa de piedra, tercera capa de geotextil y para finalizar una capa de sustrato. Y por último se pasó a realizar el sembrado e instalación de césped.',
    servicios: [
      EnumServicios.Paisajismo,
      EnumServicios.Mantenimientoareasverdes,
    ],
    duracion: {
      cantidad: '1',
      tipo: 'mes',
    },
    year: '2018',
    dificultad: enumDificultad.Medio,
    plantasinstaladas: ['Monsteras', 'Cisus', 'Helecho alemán', 'Helecho'],
    desafios: [
      'El proyecto tuvo como desafío principal trabajar al mismo tiempo que implementaban el ambiente.',
      'También el adquirir las plantas y maceteros en el tamaño que se nos estaba solicitando además que se encontraran en un buen estado.',
      'Realizamos el mantenimiento del árbol de olivo, de cada jardinera y maceta, sin afectar ni malograr el ambiente del proyecto. ',
      'En todo el proceso se tuvo una buena comunicación directa con el arquitecto.',
    ],
  },
  {
    pathname: 'CASA_RIBBED',
    dataHover: 'CASA RIBBED',
    imgCarrusel: '01.jpg',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2019',
    nombre: 'Casa Ribbed',
    antes: [
      'El proyecto Casa Ribbed fue realizado por el arquitecto Diego Olivera, presentado en Casacor 2019, la exposición de este trabajo fue realizado en el Puericultorio Pérez Araníbar, en el distrito de Magdalena del Mar.',
      'Este proyecto fue muy novedoso e innovador, tuvo un concepto que exhibe un loft masculino, vanguardista, sofisticado, elegante, de líneas rectas y espíritu juvenil, con una gama de colores muy interesantes.',
      'La propuesta refleja un concepto de casa acanalada, con elementos que se unen con otros para generar movimiento. Además, los detalles como las plantas y macetas cumplieron un rol fundamental para complementar este espacio.',
    ],
    cliente: ' Arquitecto Diego Olivera',
    proceso:
      'Primero se realizó la instalación de las plantas colgantes, luego se pasó a instalar los maceteros y macetas según el diseño del arquitecto. Además, se aplicaron algunos detalles con plantas secas, también se realizó el mantenimiento de cada una de ellas.',
    servicios: [
      EnumServicios.Paisajismo,
      EnumServicios.Mantenimientoareasverdes,
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
    desafios: [
      'El proyecto tuvo como desafío principal el adquirir las plantas en el tamaño que se nos estaba solicitando además de que se encontraran en un buen estado.',
      'Realizamos el mantenimiento de ellas, sin afectar ni malograr el ambiente del proyecto.',
      'En todo el proceso se tuvo una buena comunicación directa con el arquitecto.',
    ],
  },
  {
    pathname: 'QUINTA_MASSERIA',
    dataHover: 'QUINTA MASSERIA',
    imgCarrusel: '01.jpg',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2019',
    nombre: 'Quinta Masseria',
    antes: [
      'El proyecto Quinta Masseria fue realizado por la arquitecta Jessie D’Angelo, presentado en Casacor 2019, la exposición de este trabajo fue realizado en el Puericultorio Pérez Araníbar, en el distrito de Magdalena del Mar.',
      'Este proyecto fue inspirado en las culturas grecorromana, árabe y española para crear este ambiente: una antigua casa de campo mediterránea restaurada para hospedar a los visitantes.',
      'El ambiente fue complementado por una serie de macetas con cactus esculturales y obras de Valeria Ghezzi, Jessica Schneider y Claudia Caffarena.',
    ],
    cliente: 'Arquitecta Jessie D’Angelo',
    proceso:
      'Primero se realizó la instalación de las plantas colgantes, luego se pasó a instalar los maceteros y macetas según el diseño del arquitecto. Además, se aplicaron algunos detalles con plantas secas. También se realizó el mantenimiento de cada una de ellas.',
    servicios: [
      EnumServicios.Paisajismo,
      EnumServicios.Mantenimientoareasverdes,
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
    desafios: [
      'El proyecto tuvo como desafío principal el adquirir las plantas en el tamaño que se nos estaba solicitando además de que se encontraran en un buen estado.',
      'Realizamos el mantenimiento de ellas, sin afectar ni malograr el ambiente del proyecto. ',
      'En todo el proceso se tuvo una buena comunicación directa con la arquitecta.',
    ],
  },
  {
    pathname: 'LE_COTTAGE',
    dataHover: 'LE COTTAGE',
    imgCarrusel: '01.jpg',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2022',
    nombre: 'Le Cottage',
    antes: [
      'El proyecto Le Cottage fue realizado por la arquitecta Jessie D’Angelo, presentado en Casacor 2022, la exposición de este trabajo fue realizado en las Casas Majluf - Casa N°3, en el distrito de Surco.',
      'Este proyecto fue pensado en una pequeña cabaña de vacaciones que alberga a una familia de cuatro personas frente al lago.',
      'En el ambiente se utilizaron una paleta de colores en tonos azul, verde y neutros. Materiales como la madera pintada, los wallpapers en techos y paredes, las texturas de las telas y coloridos crearon una sensación de bienestar y calma dentro de los tres ambientes.',
      'Los detalles como las plantas y macetas cumplieron un rol fundamental para complementar este espacio.',
    ],
    cliente: 'Arquitecta Jessie D’Angelo',
    proceso:
      'Primero se realizó la instalación de los maceteros y macetas según el diseño del arquitecto, luego se brindó el servicio de mantenimiento semanal de cada una de ellas.',
    servicios: [
      EnumServicios.Paisajismo,
      EnumServicios.Mantenimientoareasverdes,
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
      'Vinca variegada',
    ],
    desafios: [
      'El proyecto tuvo como desafío principal el adquirir las plantas en el tamaño que se nos estaba solicitando además de que se encontraran en un buen estado.',
      'Realizamos el mantenimiento de ellas, sin afectar ni malograr el ambiente del proyecto. ',
      'En todo el proceso se tuvo una buena comunicación directa con la arquitecta.',
    ],
  },
  {
    pathname: 'ESTUDIO_HUERTO_CHEF',
    dataHover: 'ESTUDIO Y HUERTO DE LA CHEF',
    imgCarrusel: '01.jpg',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2022',
    nombre: 'Estudio y Huerto de la Chef',
    antes: [
      'Este proyecto reune la naturaleza, los elementos orgánicos y las texturas que se combinan con una paleta de color neutra y maderas cálidas con pinceladas de colores intensos y piezas escultóricas, el espacio es sobrio e invita a la introspección, a disfrutar de las cosas simples y el tiempo en calma, de la esencia detrás de momentos que se hacen memorables; Sembrar y cosechar los alimentos para crear experiencias a través de la comida, enfatiza la importancia de la naturaleza, mientras su belleza queda enmarcada desde el interior como un cuadro. (Reseña Estudio y Huerto del Chef Casacor 2022).',
    ],
    cliente: 'Arquitectas Andrea Cavassa y Claudia Triveño',
    proceso:
      'Primero se instaló encima del estudio de la chef las buganvilias, luego se realizó la siembra de una gran variedad de vegetales para el huerto de la chef según el diseño de las arquitectas, también se sembró en otras zonas plantas como la cheflera, liriope, vincas, entre otras. Además se brindó el servicio de mantenimiento semanal del huerto y de las demás plantas.',
    servicios: [
      EnumServicios.Paisajismo,
      EnumServicios.Mantenimientoareasverdes,
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
    desafios: [
      'En este proyecto se instaló encima del estudio de la chef las buganvilias, se realizó la siembra de una gran variedad de vegetales para el huerto de la chef según el diseño de las arquitectas, también se sembró en otras zonas plantas como la cheflera, liriope, vincas, entre otras y se brindó el servicio de mantenimiento semanal del huerto y de las demás plantas.',
      'Toda la obra se realizó adaptando el lugar al concepto de las arquitectas.',
      'El personal especializado de mantenimiento fue el soporte constante para mantener las áreas verdes en toda la exposición de Casacor (más de 45 días).',
      'La comunicación, el apoyo como asesoramiento a las arquitectas fue constante.',
    ],
  },
  {
    pathname: 'SOGNO_VENEZIANO',
    dataHover: 'SOGNO VENEZIANO',
    imgCarrusel: '01.jpg',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2022',
    nombre: 'Sogno Veneziano',
    antes: [
      'El proyecto Le Cottage fue realizado por la arquitecta Erika Zielinski, presentado en Casacor 2022. La exposición de este trabajo fue realizado en las Casas Majluf - Casa N°1, en el distrito de Surco.',
      'Este proyecto fue inspirado en Venecia y las 4 estaciones, a través de la música de Antonio Vivaldi, tomar un café en la primavera, leer un libro en el verano, vestirse en el otoño y abrigarse en el invierno.',
      'En el ambiente se utilizaron una paleta de colores en tonos neutros y materiales naturales que sirven como fondo a cada una de las estaciones que se presentan a todo color.',
      'Los detalles como las plantas y macetas cumplieron un rol fundamental para complementar este espacio.',
    ],
    cliente: 'Erika Zielinski',
    proceso:
      'Primero se realizó la instalación de los maceteros y macetas según el diseño del arquitecto, también se implementó un jardín vertical de senecio cineraria en la bañera, luego se brindó el servicio de mantenimiento semanal de cada una de ellas.  ',
    servicios: [
      EnumServicios.Paisajismo,
      EnumServicios.Mantenimientoareasverdes,
      EnumServicios.JardinVertical,
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
    desafios: [
      'El proyecto tuvo como desafío principal el adquirir las plantas en el tamaño que se nos estaba solicitando además de que se encontraran en un buen estado. ',
      'También implementamos un jardín vertical de senecios en la bañera, el cual tuvimos que tener mucho cuidado ya que había una pared de cuarzo en el medio de ésta. ',
      'Realizamos el mantenimiento de las macetas y del jardín vertical durante 1 mes.',
      'En todo el proceso se tuvo una buena comunicación directa con la arquitecta.',
    ],
  },
  {
    pathname: 'TEJIENDO_LAZOS',
    dataHover: 'TEJIENDO LAZOS',
    imgCarrusel: '01.jpg',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2022',
    nombre: 'Tejiendo Lazos',
    antes: [
      'El proyecto Tejiendo lazos realizado por la arquitecta Micaela Puertas fue presentado en Casacor 2022, la exposición de este trabajo fue realizado en las Casas Majluf - Casa N°2, en el distrito de Surco.',
      'No hay lazo más fuerte que el que se teje entre una madre y su hija” fue el concepto de este proyecto.',
      'El ambiente fue inspirado en la naturaleza. Se puede apreciar un columpio en forma de colmena, un árbol que se encuentra en el centro de la habitación donde fueron ubicados libros, adornos y plantas, con flores tejidas y distribuidas en el techo, además de una hermosa cabaña en donde la parte superior se encontraba una planta como enredadera.',
    ],
    cliente: 'Micaela Puertas',
    proceso:
      'Primero se realizó la instalación de los maceteros y macetas según el diseño de la arquitecta, también se instaló una enredadera en la parte superior de la cama de la niña, luego se brindó el servicio de mantenimiento semanal de cada una de ellas.',
    servicios: [
      EnumServicios.Paisajismo,
      EnumServicios.Mantenimientoareasverdes,
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
      'Madre selva',
    ],
    desafios: [
      'El proyecto tuvo como desafío principal el adquirir las plantas en el tamaño que se nos estaba solicitando además de que se encontraran en un buen estado. ',
      'Realizamos el mantenimiento de ellas, sin afectar ni malograr el ambiente del proyecto.',
      'En todo el proceso se tuvo una buena comunicación directa con la arquitecta.',
    ],
  },
  {
    pathname: 'FLAT_FAMILIAR',
    dataHover: 'FLAT FAMILIAR',
    imgCarrusel: '01.jpg',
    img: '02_BANNER_PRINICPAL.jpg',
    imgBefore: '03_ANTES.jpg',
    imgAfter: '04_DESPUES.jpg',
    edicion: 'CASACOR 2018',
    nombre: 'Flat familiar',
    antes: [
      'El proyecto Flat Familiar fue realizado por las arquitectas Jennifer Junek y Marilú Salcedo, presentado en Casacor 2018, la exposición de este trabajo fue realizado en la Casa Mario Bianco, en el distrito de San Isidro.',
      'Este proyecto está inspirado en una pareja joven y su pequeña hija.',
      'Este ambiente tuvo un espacio de 70 m² en donde hubo una gran estantería multifuncional como división del salón y la cocina, la paleta de colores trae el contraste entre el blanco y el negro, mediado por la madera y toques de azul; Esto ayuda a equilibrar la sobriedad y brinda la comodidad necesaria para albergar a una familia.',
      'Las plantas y las obras de arte están en todas partes y alinean el piso con el tema de CASACOR 2018, A Casa Viva.',
    ],
    cliente: 'Jennifer Junek y Marilú Salcedo',
    proceso:
      'Primero se realizó la instalación de los maceteros y macetas según el diseño del arquitecto. Luego se brindó el servicio de mantenimiento semanal de cada una de ellas.',
    servicios: [
      EnumServicios.Paisajismo,
      EnumServicios.Mantenimientoareasverdes,
    ],
    duracion: {
      cantidad: '1',
      tipo: 'mes',
    },
    year: '2028',
    dificultad: enumDificultad.Leve,
    desafios: [
      'El proyecto tuvo como desafío principal el adquirir las plantas en el tamaño que se nos estaba solicitando además de que se encontraran en un buen estado. ',
      'Realizamos el mantenimiento de ellas, sin afectar ni malograr el ambiente del proyecto.',
      'En todo el proceso se tuvo una buena comunicación directa con la arquitecta.',
    ],
  },
]
export interface EntitydataProyects {
  imgCarrusel: string
  img: string
  dataHover?: string
  pathname: string
  imgBefore: string
  imgAfter: string
  antes?: string[]
  desafios?: string[]
  resumen2?: string
  ubicacion?: string
  edicion?: string
  nombre?: string
  cliente?: string
  year?: string
  proceso?: string
  servicios?: EnumServicios[]
  duracion?: {
    cantidad: string
    tipo: string
  }
  dificultad?: enumDificultad
  plantasinstaladas?: string[]
}
