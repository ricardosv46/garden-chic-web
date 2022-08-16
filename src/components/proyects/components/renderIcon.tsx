import {FaCalendar,FaCalendarAlt ,FaChess} from 'react-icons/fa'
const TypeIcon = {
    Año: <FaCalendarAlt fill='#445378'  className='text-white w-8 h-8' />,
    Dificultad: <FaChess fill='#445378' className='text-white  w-8 h-8'/>,
    Duración: <FaCalendar fill='#445378' className='text-white  w-8 h-8'/>,
}
interface Iprops {
    text: string,
    text2?: string,
    tittle: 'Año' | 'Dificultad' | 'Duración'
}

export const RenderIcon = ({ text, text2, tittle }: Iprops) => {
    return (
        <>
            <span className='text-center text-lg text-primary-300 font-bold'>{tittle}</span>
            <div className='flex items-center gap-4 lg:px-16 '>

                <div className='bg-primary-100 h-20 w-20 rounded-full flex justify-center items-center hover:bg-primary-300 ease-in-out duration-300 hover:fill-white cursor-pointer hover:border '>
                    {TypeIcon[tittle]}
                </div>
                <p className='text-lg text-primary-300 font-bold'>{text}{' '}{text2}</p>
                {/* <p className='text-lg text-primary-300 font-bold'></p> */}
            </div>
        </>
    )
}
