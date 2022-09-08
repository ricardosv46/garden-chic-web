export interface ServicioContent {
  tittle: string
  subcontent: string[]
}

export interface EntityServicios {
  title: string
  tittleResumido: string
  position: string
  img: string
  icon: string
  description: string
  url: string
  content: ServicioContent[]
}

export const servicios: EntityServicios[] = [
  {
    title: 'Paisajismo',
    tittleResumido: 'Paisajismo',
    position: 'l',
    img: 'banner/01_PRINCIPAL.jpg',
    icon: '',
    description:
      'Convertimos el espacio destinado al jardín en un ambiente estéticamente agradable, utilizando la tierra y el agua del espacio con eficiencia y armonía.',
    url: 'paisajismo',
    content: [
      {
        tittle: '¿Cómo podemos ayudarte?',
        subcontent: [
          'Podemos ayudarte en la creación o mejora de tu espacio verde. Hemos diseñado, modificado e implementado espacios con características visibles, físicas y anímicas, tanto rural como urbano. Haciendo relucir la jardinería de flora y fauna.',
          'Nuestro equipo a realizado distintos proyectos paisajistas. Logrando cultivar plantas como un arte, con el propósito de embellecer el entorno del proyecto. Y esto lo hacemos en compañía de nuestros clientes acercándonos, escuchándolos hasta lograr satisfacerlo más allá de sus expectativas.',
          'Trabajamos nuestros proyectos como únicos, como lo son: “Un bello entorno paisajista”. Para ello contamos con un vivero y con técnicos, consultores, ingenieros y proveedores aliados que tienen el mismo objetivo en común: “hacer de tu entorno verde una obra de arte natural”',
        ],
      },
      {
        tittle: 'Referencias',
        subcontent: [
          'Paisajismo es la actividad destinada a modificar las características visibles, físicas y anímicas de un espacio, tanto rural como urbano, entre las que se incluyen: los elementos vivos, tales como flora y fauna, lo que habitualmente se denomina jardinería, el arte de cultivar plantas con el propósito de crear un bello entorno paisajista; los elementos naturales como las formas del terreno, las elevaciones o los cauces de agua, los elementos humanos, como estructuras, edificios u otros objetos materiales creados por el hombre; lo elementos abstractos, como las condiciones climáticas y luminosas; y los elementos culturales. ',
        ],
      },
    ],
  },
  {
    title: 'Jardines Verticales',
    tittleResumido: 'Jardines Verticales',
    position: 'r',
    img: 'jardin/01_PRINCIPAL.jpg',
    icon: '',
    description:
      'Sistema eco amigable que brinda un espacio vertical para la vegetación, convirtiendo este espacio desaprovechado en uno vivo y natural.',
    url: 'jardinesverticales',
    content: [
      {
        tittle: '¿Cómo podemos ayudarte?',
        subcontent: [
          'Hemos realizado más de 800 metros cuadrados de jardines verticales utilizando de manera eficiente más espacios del local o residencia. Ya sea en el interior o exterior de cualquier pared. Los beneficios de estos muros verdes como suelen llamarse son muy significativos como bajar algunos grados de temperatura más rápidamente, reducen el efecto de “isla de calor” y absorben partículas contaminantes del aire. Haciendo un ambiente mejor, más sano, más productivo y sociable.',
          'Nuestro equipo especializado en jardines verticales a realizar distintos proyectos que cada uno tiene su reto particular, por la altura, la posición o espacio. Logrando el objetivo de realizar una obra sin igual de arte natural.',
          'Nuestros proyectos en jardines verticales cuenta con técnicos, profesionales y proveedores que hacen la diferencia en la ejecución de la obra.',
        ],
      },
    ],
  },
  {
    title: 'Mantenimiento de Áreas Verdes',
    tittleResumido: 'Mantenimiento',
    position: 'l',
    img: 'mantenimiento/01_PRINCIPAL.jpg',
    icon: '',
    description:
      'Las plantas como todo ser vivo requiere de cuidados y mantenimiento. Por ello dedicamos nuestros esfuerzos para ese fin, logrando obtener un buen aspecto y que perdure en el tiempo, en buen estado y belleza.',
    url: 'mantenimientodeareasverdes',
    content: [
      {
        tittle: '¿Cómo podemos ayudarte?',
        subcontent: [
          'Nuestro servicio cuenta con un diagnóstico inicial del área verde, en ella consideramos el tipo de planta, la frecuencia y abundancia del riego para estas plantas, las plantas están enfermas o plagadas, existen plantas muertas, hay mala hierba o plantas invasoras, el estado del suelo. Con ello se realiza la lista de tareas por realizar de acuerdo a la prioridad y mejora del espacio verde.',
          'Nuestra propuesta de valor diferencial en este servicio es que destinamos un mismo personal capacitado como la asesoría en caso se requiera y una atención personalizada para atender los casos particulares que puedan tener como solucionarlas con prontitud.',
          'Trabajamos con un equipo especializado en el mantenimiento de las áreas verdes, con este servicio iniciamos nuestras labores en la empresa y es el servicio que se destaca por mantener la Salud y Estética de tus áreas verdes.',
        ],
      },
    ],
  },
  {
    title: 'Techos Verdes',
    tittleResumido: 'Techos Verdes',
    position: 'r',
    img: 'techoverde/01_PRINCIPAL.jpg',
    icon: '',
    description:
      'Con este servicio se logra maximizar los espacios, además de obtener un aislador térmico natural y también el predio aumentaría su valor. Convierte una azotea en un parque, un ejemplo de este proyecto son los edificios llamados EcoParque.',
    url: 'techosverdes',
    content: [
      {
        tittle: '¿Cómo podemos ayudarte?',
        subcontent: [
          'Cada instalación de Techo Verde cuenta con un objetivo particular en la cual puede ser un aislador en la parte alta de una casa o edificio, para ello también se verifica su viabilidad. Compuesto por una cubierta vegetal estratificada, cada capa contribuye al aislamiento, para que no drene agua y cree una superficie para el crecimiento de las plantas.',
          'Contamos con una basta experiencia en este tipo de instalaciones. Consideramos el acceso para la ejecución, el mantenimiento que traerá consigo y las condiciones del sitio como es la exposición al viento, el riesgo por algún inconveniente y la resistencia de las plantas.',
          'Trabajamos nuestros proyectos como únicos. Para ello contamos con un vivero y con técnicos, consultores, ingenieros y proveedores aliados que tienen el mismo objetivo en común: “hacer de tu entorno verde una obra de arte natural”.',
        ],
      },
    ],
  },
  {
    title: 'Riego Tecnificado',
    tittleResumido: 'Riego Tecnificado',
    position: 'l',
    img: 'riegotecnificado/01_PRINCIPAL.jpg',
    icon: '',
    description:
      'Con este sistema se logra el ahorro del agua en un 30%, se aprovecha el espacio y genera un riego homogéneo, además de ser un sistema de riego automático.',
    url: 'sistemaderiegotecnificado',
    content: [
      {
        tittle: '¿Cómo podemos ayudarte?',
        subcontent: [
          'Nuestro sistema de riego tecnificado tiene el objetivo de generar más eficiencia del consumo de agua y reducir el impacto sobre el área verde. ',
          'La disposición y distribución de forma homogénea del agua genera la eficiencia de este recurso tan valioso para el mejor rendimiento de las plantas, haciendo un ambiente propicio de Salud y Estética de la jardinería de flora y fauna.',
          'Trabajamos nuestros proyectos como únicos. Para ello contamos con un vivero y con técnicos, consultores, ingenieros y proveedores aliados que tienen el mismo objetivo en común: “hacer de tu entorno verde una obra de arte natural”.',
        ],
      },
    ],
  },
  {
    title: 'Impermeabilización',
    tittleResumido: 'Impermeabilización',
    position: 'r',
    img: 'impermeabilizacion/01_PRINCIPAL.jpg',
    icon: '',
    description:
      'Previene filtraciones de agua en los proyectos de techos verdes, parques o jardines comunes, con ello cuidamos la propiedad para no causar daños a las estructuras de estas.',
    url: 'impermeabilización',
    content: [
      {
        tittle: '¿Cómo podemos ayudarte?',
        subcontent: [
          'Podemos ayudarte en la creación o mejora de tu espacio verde. Hemos diseñado, modificado e implementado espacios con características visibles, físicas y anímicas, tanto rural como urbano. Haciendo relucir la jardinería de flora y fauna.',
          'Nuestro equipo ha realizado distintos proyectos paisajistas. Logrando cultivar plantas como un arte, con el propósito de embellecer el entorno del proyecto. Esto lo hacemos en compañía de nuestros clientes acercándonos, escuchándolos hasta lograr satisfacerlo más allá de sus expectativas.',
          'Trabajamos nuestros proyectos como únicos, como lo son: “Un bello entorno paisajista”. Para ello contamos con un vivero y con técnicos, consultores, ingenieros y proveedores aliados que tienen el mismo objetivo en común: “hacer de tu entorno verde una obra de arte natural”',
        ],
      },
    ],
  },
  {
    title: 'Vivero',
    tittleResumido: 'Vivero',
    position: 'l',
    img: 'vivero/01_PRINCIPAL.jpg',
    icon: '',
    description:
      'Contamos con un vivero a pocas horas de Lima, con diversidad de plantas, en diferentes tamaños y con precios acorde al mercado (competitivos).',
    url: 'vivero',
    content: [
      {
        tittle: '¿Cómo podemos ayudarte?',
        subcontent: [
          'Podemos ayudarte en la creación o mejora de tu espacio verde. Hemos diseñado, modificado e implementado espacios con características visibles, físicas y anímicas, tanto rural como urbano. Haciendo relucir la jardinería de flora y fauna.',
          'Nuestro equipo ha realizado distintos proyectos paisajistas. Logrando cultivar plantas como un arte, con el propósito de embellecer el entorno del proyecto. Y esto lo hacemos en compañía de nuestros clientes acercándonos, escuchándolos hasta lograr satisfacerlo más allá de sus expectativas.',
          'Trabajamos nuestros proyectos como únicos, como lo son: “Un bello entorno paisajista”. Para ello contamos con un vivero y con técnicos, consultores, ingenieros y proveedores aliados que tienen el mismo objetivo en común: “hacer de tu entorno verde una obra de arte natural”.',
        ],
      },
    ],
  },
]
