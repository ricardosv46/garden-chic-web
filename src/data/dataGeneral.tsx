import { IconImpermeabilizacionColor, IconJardinesVerticalesColor, IconMantenimientoColor, IconPaisajismoColor, IconRiegoTecnificadoColor, IconTechosVerdesColor, IconViverosColor } from 'public/icons/servicios/color'
import { IconImpermeablizacion, IconJardinesVerticales, IconMantenimiento, IconPaisajismo, IconRiegoTexnificado, IconTechosVerdes, IconVivero } from 'public/icons/servicios/linear'
import { VERTICAL_PLANTAS, VERTICAL_SERVICIOS, VERTICAL_VIVERO } from 'public/icons/nosotros/bannerCarrousel'
export const DataGeneral: IDataGeneral = {
    Home: {
        QuePodemosHacer: {
            tittle: 'Cuidar y mantener saludable tus áreas verdes es nuestra pasión',
            subtittle: 'Nos especializamos en el diseño e implementación de áreas verdes. Podemos ayudar a hacer realidad el jardín de tus sueños',
            items: [{
                count: '150',
                type: 'PROYECTOS REALIZADOS',
                duration: 2000,
                tittle: '',
                subtittle: 'En estos 06 años en el mercado laboral'
            },
            {
                count: '800 m²',
                type: 'DE ÁREAS VERDES',
                duration: 1000,
                tittle: '',
                subtittle: 'En implementación de jardines verticales'
            },
            {
                count: '50',
                type: 'CIENTES SATISFECHOS',
                duration: 1500,
                tittle: '',
                subtittle: 'Confiaron en nuestros servicios'
            }]
        },
        Banner: [
            {
                tittle: 'CASACOR / PERU',
                image: '01_CASACOR.jpg',
                subtittle: 'LA MAYOR Y MÁS COMPLETA MUESTRA DE ARQUITECTURA, DISEÑO DE INTERIORES Y PAISAJISMO DE LAS AMÉRICAS',
                itemPrincipal: true,
                textheader: 'PRESENTES EN:'
            },
            {
                tittle: 'PAISAJISMO',
                image: '02_PAISAJISMO.jpg',
                subtittle: 'DISFRUTA DE TU ESPACIO',
                itemPrincipal: false
            }, {
                tittle: 'JARDINES VERTICALES',
                image: '03_JARDIN_VERTICAL.jpg',
                subtittle: 'UNA NUEVA EXPERIENCIA EN DECORACIÓN',
                itemPrincipal: false
            }, {
                tittle: 'MANTENIMIENTO',
                image: '04_MANTENIMIENTO.jpg',
                subtittle: 'SOMOS EXPERTOS EN EL CUIDADO DE TU JARDÍN',
                itemPrincipal: false
            }, {
                tittle: 'SISTEMA DE RIEGO TECNIFICADO',
                image: '05_RIEGO_TECNIFICADO.jpg',
                subtittle: 'USO MÁS EFICIENTE DEL AGUA',
                itemPrincipal: false
            }, {
                tittle: 'TECHOS VERDES',
                image: '06_TECHO_VERDE.jpg',
                subtittle: 'TECHOS ECOLÓGICOS PARA TU HOGAR',
                itemPrincipal: false
            }, {
                tittle: 'IMPERMEABILIZACIÓN CON MANTO ASFALTICO',
                image: '07_IMPERMEABILIZACION.jpg',
                subtittle: 'PROTEGE A TU ESPACIO DE LA HUMEDAD',
                itemPrincipal: false
            }, {
                tittle: 'VIVERO',
                image: '08_VIVERO.jpg',
                subtittle: 'CULTIVO DE PLANTAS EN GRAN VARIEDAD',
                itemPrincipal: false
            }],
        Iconos: [
            {
                Icon1: <IconPaisajismo className='w-20 h-20' />,
                label: "Paisajismo"
            }, {
                Icon1: <IconJardinesVerticales className='w-20 h-20' />,
                label: "Jardines Verticales"
            }, {

                Icon1: <IconMantenimiento className='w-20 h-20' />,
                label: "Mantenimiento"
            }, {
                Icon1: <IconImpermeablizacion className='w-20 h-20' />,
                label: 'Impermeabilización'
            }, {
                Icon1: <IconRiegoTexnificado className='w-20 h-20' />,
                label: 'Riego Tecnificado'
            }, {
                Icon1: <IconTechosVerdes className='w-20 h-20' />,
                label: 'Techos Verdes'
            }, {
                Icon1: <IconVivero className='w-20 h-20' />,
                label: 'Vivero'
            }
        ],
        EllosConfian: ['ARMAS', 'ARMONHY', 'Ay', 'BACKUS', 'BRITANICO', 'EDIFICA', 'ENGIE', 'ESPARQ', 'EXALMAR', 'INTERCONNECTA', 'LEGADO', 'LIMALOFT', 'MARCOALDANY', 'MEGALABS', 'PIONERO', 'RANSA', 'SACYRCONCESIONES', 'SOLE', 'VyV'],
        Contactanos: {
            tittle: 'Haz tu consulta o solicitud de presupuesto, con gusto y prontitud te atenderemos.',
            OptionForm: ['PAISAJISMO',
                'JARDINES VERTICALES',
                'MANTENIMIENTO DE JARDINES',
                ' SISTEMA DE RIEGO TECNIFICADO',
                'TECHOS VERDES',
                'INSTALACIÓN DE JARDINERAS Y MACETAS',
                'IMPERMEABILIZACIÓN CON MANTO ASFALTICO',
                '    VIVERO'
            ]
        }

    },
    Nosotros: {
        QuePodemosHacer: {
            tittle: '¡Nosotros nos encargamos de tu jardín!',
            subtittle: 'Si tienes un proyecto por realizar o necesitas un servicio de paisajismo, cuenta con nosotros. Sabemos que es muy importante el compromiso, puntualidad, profefionalismo y calidad para la realización de tus proyectos',
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

        },
        Contactanos: {
            tittle: 'Haz tu consulta o solicitud de presupuesto, con Gusto y Prontitud te atenderemos.',
            OptionForm: ['PAISAJISMO',
                'JARDINES VERTICALES',
                'MANTENIMIENTO DE JARDINES',
                ' SISTEMA DE RIEGO TECNIFICADO',
                'TECHOS VERDES',
                'INSTALACIÓN DE JARDINERAS Y MACETAS',
                'IMPERMEABILIZACIÓN CON MANTO ASFALTICO',
                'VIVERO'
            ]
        },
        Iconos: [
            {
                Icon1: <VERTICAL_PLANTAS className='w-32 h-32 '  />,
            },
            {
                Icon1: <VERTICAL_SERVICIOS className='w-32 h-32' />,
            },
            {
                Icon1: <VERTICAL_VIVERO className='w-32 h-32' />,
            }
        ],
    },
    Servicios: {
        Contactanos: {
            tittle: 'Haz tu consulta o solicitud de presupuesto, con Gusto y Prontitud te atenderemos.',
            OptionForm: ['PAISAJISMO',
                'JARDINES VERTICALES',
                'MANTENIMIENTO DE JARDINES',
                ' SISTEMA DE RIEGO TECNIFICADO',
                'TECHOS VERDES',
                'INSTALACIÓN DE JARDINERAS Y MACETAS',
                'IMPERMEABILIZACIÓN CON MANTO ASFALTICO',
                'VIVERO'
            ]
        },
        Banner: {
            img: '01_PRINCIPAL.jpg',
            tittle: 'Servicios'
        },
        BannerHeader: '01_PRINCIPAL.jpg'
    },
    Contactanos: {
        tittle: 'Haz tu consulta o solicitud de presupuesto, con Gusto y Prontitud te atenderemos.',
        OptionForm: ['PAISAJISMO',
            'JARDINES VERTICALES',
            'MANTENIMIENTO DE JARDINES',
            ' SISTEMA DE RIEGO TECNIFICADO',
            'TECHOS VERDES',
            'INSTALACIÓN DE JARDINERAS Y MACETAS',
            'IMPERMEABILIZACIÓN CON MANTO ASFALTICO',
            'VIVERO'
        ]
    }
}
export interface IQuePodemosHacer {
    tittle: string,
    subtittle: string
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
    itemPrincipal: boolean
    buttonText?: string,
    textheader?: string
}

export interface IIconos {
    Icon1: JSX.Element,
    Icon2?: JSX.Element,
    label?: string
}

export interface IBannerServicios {
    tittle: string
    img: string
}

interface IDataGeneral {
    Home: {
        QuePodemosHacer: IQuePodemosHacer,
        Banner: IBanner[]
        Iconos: IIconos[],
        EllosConfian: string[],
        Contactanos: {
            tittle: string
            OptionForm: string[],
        },
    }
    Nosotros: {
        QuePodemosHacer: IQuePodemosHacer,
        Contactanos: {
            tittle: string
            OptionForm: string[],
        },
        Iconos: IIconos[]
    },
    Servicios: {
        Contactanos: {
            tittle: string
            OptionForm: string[],
        },
        Banner: IBannerServicios,
        BannerHeader: string
    },
    Contactanos: {
        tittle: string
        OptionForm: string[],
    },

}