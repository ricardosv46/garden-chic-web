import { IconImpermeablizacion, IconJardinesVerticales, IconMantenimiento, IconPaisajismo, IconRiegoTexnificado, IconTechosVerdes, IconVivero } from 'public/icons/servicios/linear'
import { HORIZONTAL_PLANTAS, HORIZONTAL_SERVICIO, HORIZONTAL_VIVERO } from 'public/icons/nosotros/bannerCarrousel'
export const DataGeneral: IDataGeneral = {
    Home: {
        QuePodemosHacer: {
            tittle: 'Cuidar y mantener saludable tus áreas verdes es nuestra pasión',
            subtittle: 'Nos especializamos en el diseño e implementación de áreas verdes.// Podemos ayudar a hacer realidad el jardín de tus sueños',
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
                type: 'CLIENTES SATISFECHOS',
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
                Icon1: 'IconPaisajismo',
                label: "Paisajismo"
            }, {
                Icon1: 'IconJardinesVerticales',
                label: "Jardines Verticales"
            }, {

                Icon1: 'IconMantenimiento',
                label: "Mantenimiento"
            }, {
                Icon1: 'IconImpermeablizacion',
                label: 'Impermeabilización'
            }, {
                Icon1: 'IconRiegoTexnificado',
                label: 'Riego Tecnificado'
            }, {
                Icon1: 'IconTechosVerdes',
                label: 'Techos Verdes'
            }, {
                Icon1: 'IconVivero',
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
                'VIVERO'
            ]
        }

    },
    Nosotros: {
        QuePodemosHacer: {
            tittle: '!Nos encargamos de tu jardín!',
            subtittle: 'Si tienes un proyecto por realizar o necesitas un servicio de paisajismo, cuenta con nosotros. Sabemos que es muy importante el compromiso, puntualidad, profesionalismo y calidad para la realización de tus proyectos.',
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
                type: 'CLIENTES SATISFECHOS',
                duration: 1500,
                tittle: '',
                subtittle: 'Confiaron en nuestros servicios'
            }]
        },
        Contactanos: {
            tittle: 'Haz tu consulta o solicitud de presupuesto, con gusto y prontitud te atenderemos.',
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
                Icon1: <HORIZONTAL_PLANTAS className='w-full h-full' />,
            },
            {
                Icon1: <HORIZONTAL_SERVICIO className='w-full h-full' />,
            },
            {
                Icon1: <HORIZONTAL_VIVERO className='w-full h-full' />,
            }
        ],
    },
    Servicios: {
        Contactanos: {
            tittle: 'Haz tu consulta o solicitud de presupuesto, con gusto y orontitud te atenderemos.',
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
        tittle: 'Haz tu consulta o solicitud de presupuesto, con gusto y prontitud te atenderemos.',
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
        Iconos: { Icon1: string, label: string }[],
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