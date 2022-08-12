export const DataGeneral: IDataGeneral = {
    Home: {
        QuePodemosHacer: {
            tittle: 'Cuidar, conservar y mantener saludable tus áreas verdes es nuestra pasión.',
            subtittle: 'Nos especializamos en el diseño e implementación de áreas verdes, creamos hermosos y únicos jardines. Podemos ayudarte a hacer realidad el jardín de tus sueños.',
            items: [{
                count: '10',
                type: 'Años',
                duration: 2000,
                tittle: 'Proyectos Realizados',
                subtittle: 'Más de 150 proyectos realizados. En estos 6 años en el mercado nacional.'
            },
            {
                count: '30',
                type: 'Especialista',
                duration: 1000,
                tittle: 'Jardines Verticales',
                subtittle: 'Más de 800 m2 de implementación de jardines verticales.'
            },
            {
                count: '15',
                type: 'Premios',
                duration: 1500,
                tittle: 'Clientes Satisfechos',
                subtittle: 'Más de 50 clientes confían en nuestros servicios.'
            }]
        },
        Banner: [{
            tittle: 'PAISAJISMO',
            image: '02_PAISAJISMO.jpg',
            subtittle: 'DISFRUTA DE TU ESPACIO'
        }, {
            tittle: 'JARDINES VERTICALES',
            image: '03_JARDIN_VERTICAL.jpg',
            subtittle: 'UNA NUEVA EXPERIENCIA EN DECORACIÓN'
        }, {
            tittle: 'MANTENIMIENTO',
            image: '04_MANTENIMIENTO.jpg',
            subtittle: 'SOMOS EXPERTOS EN EL CUIDADO DE TU JARDÍN'
        }, {
            tittle: 'SISTEMA DE RIEGO TECNIFICADO',
            image: '05_RIEGO_TECNIFICADO.jpg',
            subtittle: 'USO MÁS EFICIENTE DEL AGUA'
        }, {
            tittle: 'TECHOS VERDES',
            image: '06_TECHO_VERDE.jpg',
            subtittle: 'TECHOS ECOLÓGICOS PARA TU HOGAR'
        }, {
            tittle: 'IMPERMEABILIZACIÓN CON MANTO ASFALTICO',
            image: '07_IMPERMEABILIZACION.jpg',
            subtittle: 'PROTEGE A TU ESPACIO DE LA HUMEDAD'
        }, {
            tittle: 'VIVERO',
            image: '08_VIVERO.jpg',
            subtittle: 'CULTIVO DE PLANTAS EN GRAN VARIEDAD'
        }]
    },
    Nosotros: {
        QuePodemosHacer: {
            tittle: '¡Nosotros nos encargamos de tu jardín!',
            subtittle: 'Si tienes un proyecto o servicio para tus áreas verdes, cumpliremos con tus expectativas. Sabemos que el compromiso, puntualidad, profesionalismo y calidad humana son valores que buscas como socio o aliado para tus jardines. Cuenta con nosotros',
            items: [{
                count: '10',
                type: 'Años',
                duration: 2000,
                tittle: 'Proyectos Realizados',
                subtittle: 'Más de 150 proyectos realizados. En estos 6 años en el mercado nacional.'
            },
            {
                count: '30',
                type: 'Especialista',
                duration: 1000,
                tittle: 'Jardines Verticales',
                subtittle: 'Más de 800 m2 de implementación de jardines verticales.'
            },
            {
                count: '15',
                type: 'Premios',
                duration: 1500,
                tittle: 'Clientes Satisfechos',
                subtittle: 'Más de 50 clientes confían en nuestros servicios.<'
            }]

        }
    }
}
export interface IQuePodemosHacer {
    tittle: string,
    subtittle: string,
    items: {
        count: string,
        duration?: number,
        type: string,
        tittle: string,
        subtittle: string
    }[]
}

export interface IBanner {
    tittle: string,
    subtittle: string,
    image: string,
    buttonText?: string
}

interface IDataGeneral {
    Home: {
        QuePodemosHacer: IQuePodemosHacer,
        Banner: IBanner[]
    }
    Nosotros: {
        QuePodemosHacer: IQuePodemosHacer
    }
}