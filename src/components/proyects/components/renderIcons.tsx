// import { FaCalendar, FaCalendarAlt, FaChess, FaMapMarkedAlt, FaUserShield } from 'react-icons/fa'
// import { IconJardinesVerticalesColor, IconPaisajismoColor, IconMantenimientoColor, IconImpermeabilizacionColor, IconRiegoTecnificadoColor, IconTechosVerdesColor, IconViverosColor } from 'public/icons/servicios/color'
import { IconJardinesVerticales, IconPaisajismo, IconMantenimiento, IconImpermeablizacion, IconRiegoTexnificado, IconTechosVerdes, IconVivero } from 'public/icons/servicios/linear'

import { FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
const TypeIcon: any = {
    'Paisajismo': <IconPaisajismo  className=' w-4 h-4 lg:w-9 lg:h-9 ' />,
    'Mantenimiento': <IconMantenimiento  className='text-white w-4 h-4 lg:w-9 lg:h-9 ' />,
    'Impermeabilización': <IconImpermeablizacion  className='text-white w-4 h-4 lg:w-9 lg:h-9 ' />,
    'Impermeabilización con manto asfáltico': <IconVivero  className='text-white w-4 h-4 lg:w-9 lg:h-9 ' />,
    'Techos verdes': <IconTechosVerdes  className='text-white w-4 h-4 lg:w-9 lg:h-9 ' />,
    'Sistema de Riego Tecnificado': <IconRiegoTexnificado  className='text-white w-4 h-4 lg:w-9 lg:h-9 ' />,
    'Jardín Vertical': <IconJardinesVerticales  className='text-white w-4 h-4 lg:w-9 lg:h-9 ' />,
    'Vivero': <IconVivero  className='text-white w-4 h-4 lg:w-9 lg:h-9 ' />,

}
interface Iprops {
    data: string[],
    tittle: string
    // tittle: 'Año' | 'Dificultad' | 'Duración' | 'Ubicación' | 'Cliente'
}

export const RenderIcons = ({ data, tittle }: Iprops) => {
    return (
        <>
            <h3 className='lg:text-center text-2xl md:text-3xl lg:text-4xl text-garden-option1 font-garden_bold'>
                {tittle}
            </h3>
            <div className='flex items-center gap-2 flex-col lg:px-10 '>
                {data.map((obj, key) => (
                    <div key={key} className="flex flex-row w-full gap-2">
                        <div className='bg-garden-option2 w-10 h-10 lg:h-16 lg:w-16 rounded-full flex justify-center items-center hover:bg-primary-300 ease-in-out duration-300 hover:fill-white cursor-pointer hover:border '>
                            {TypeIcon[obj]}
                        </div>
                        <p className='text-sm md:text-base lg:text-xl  text-garden-option3 font-garden_medium my-auto'>{obj}</p>
                    </div>
                ))}


            </div>
            <div className='flex mt-4 flex-row w-full h-auto  lg:px-10 '>
                <div className='w-[40px] h-[40px] relative  lg:w-[64px] lg:h-[64px]'>
                    <Image
                        // width={40}
                        // height={40}
                        layout='fill'
                        src='/icons/png/iconProyect.png'
                        alt='imagen proyecto'
                        className='absolute '
                    // className='rounded-lg'
                    />
                </div>
                <div className='flex flex-row text-sm md:text-base lg:text-xl text-garden-option1 font-garden_medium my-auto ml-2'>
                    <span>Ver más</span>
                    <FiChevronRight className='my-auto ml-2' />
                </div>
            </div>

        </>
    )
}
