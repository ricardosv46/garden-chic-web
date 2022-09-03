// import { FaCalendar, FaCalendarAlt, FaChess, FaMapMarkedAlt, FaUserShield } from 'react-icons/fa'
import { IconJardinesVerticalesColor, IconPaisajismoColor, IconMantenimientoColor, IconImpermeabilizacionColor, IconRiegoTecnificadoColor, IconTechosVerdesColor, IconViverosColor } from 'public/icons/servicios/color'
const TypeIcon: any = {
    'Paisajismo': <IconPaisajismoColor fill='#445378' className='text-white w-4 h-4 lg:w-6 lg:h-6 ' />,
    'Mantenimiento de áreas verdes': <IconMantenimientoColor fill='#445378' className='text-white w-4 h-4 lg:w-6 lg:h-6' />,
    'Impermeabilización': <IconImpermeabilizacionColor fill='#445378' className='text-white w-4 h-4 lg:w-6 lg:h-6' />,
    'Impermeabilización con manto asfaltico': <IconViverosColor fill='#445378' className='text-white w-4 h-4 lg:w-6 lg:h-6' />,
    'Techos verdes': <IconTechosVerdesColor fill='#445378' className='text-white w-4 h-4 lg:w-6 lg:h-6' />,
    'Sistema de Riego Tecnificado': <IconRiegoTecnificadoColor fill='#445378' className='text-white w-4 h-4 lg:w-6 lg:h-6' />,
    'Jardín Vertical': <IconJardinesVerticalesColor fill='#445378' className='text-white w-4 h-4 lg:w-6 lg:h-6' />,

}
interface Iprops {
    data: string[],
    tittle: string
    // tittle: 'Año' | 'Dificultad' | 'Duración' | 'Ubicación' | 'Cliente'
}

export const RenderIcons = ({ data, tittle }: Iprops) => {
    return (
        <>
            <h3 className='lg:text-center text-2xl md:text-3xl lg:text-4xl text-primary-300 font-garden_bold'>
                {tittle}
            </h3>
            {/* <span className='text-center text-lg text-primary-300 font-bold '>{tittle}</span> */}
            <div className='flex items-center gap-2 flex-col lg:px-10 '>
                {data.map((obj, key) => (
                    <div key={key} className="flex flex-row w-full gap-2">
                        <div className='bg-primary-100 w-10 h-10 lg:h-16 lg:w-16 rounded-full flex justify-center items-center hover:bg-primary-300 ease-in-out duration-300 hover:fill-white cursor-pointer hover:border '>
                            {TypeIcon[obj]}
                        </div>
                        <p className='text-sm lg:text-base  text-primary-300 font-garden_regular my-auto'>{obj}</p>
                    </div>
                ))}

            </div>
        </>
    )
}
