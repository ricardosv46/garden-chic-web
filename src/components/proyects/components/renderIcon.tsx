import { FaCalendar, FaCalendarAlt, FaChess, FaMapMarkedAlt ,FaUserShield} from 'react-icons/fa'
const TypeIcon = {
    Año: <FaCalendarAlt fill='#445378' className='text-white w-6 h-6' />,
    Dificultad: <FaChess fill='#445378' className='text-white w-6 h-8' />,
    Duración: <FaCalendar fill='#445378' className='text-white w-6 h-6' />,
    Ubicación: <FaMapMarkedAlt fill='#445378' className='text-white w-6 h-6' />,
    Cliente: <FaUserShield fill='#445378' className='text-white w-6 h-6' />,
}
interface Iprops {
    text: string,
    text2?: string,
    tittle: 'Año' | 'Dificultad' | 'Duración' | 'Ubicación' | 'Cliente'
}

export const RenderIcon = ({ text, text2, tittle }: Iprops) => {
    return (
        <>
            <span className='text-center text-lg text-primary-300 font-bold '>{tittle}</span>
            <div className='flex items-center gap-2  '>

                <div className='bg-primary-100 h-16 w-16 rounded-full flex justify-center items-center hover:bg-primary-300 ease-in-out duration-300 hover:fill-white cursor-pointer hover:border '>
                    {TypeIcon[tittle]}
                </div>
                <p className=' text-primary-300 font-bold text-base w-auto'>{text}{' '}{text2}</p>
                {/* <p className='text-lg text-primary-300 font-bold'></p> */}
            </div>
        </>
    )
}
