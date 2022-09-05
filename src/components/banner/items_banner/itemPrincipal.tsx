import React from 'react'
import { IBanner } from 'src/data/dataGeneral'
import style from '../items.module.css'
interface Iprops {
    data: IBanner
}
const pathnameImg = '/imgs/banner/principal/'

export const ItemPrincipal = ({ data }: Iprops) => {
    const ResolverPahtname = (imgCurrent: string) => `url(${pathnameImg}${imgCurrent})`

    return (
        <div className={` ${style.itemBanner}`} style={{ backgroundImage: ResolverPahtname(data.image) }}  >
            <div className='mx-auto my-0 w-[90%] xl:w-[1280px]  h-full flex justify-center items-center text-white relative z-10'>
                <div className='h-80 flex flex-col items-center justify-center lg:max-w-[700px] absolute'>
                    {/*  animate-renderTranslate  */}
                    <span className='font-bold text-sm sm:text-xl md:font-extralight translateRender font-garden_regular'>
                        {data.textheader || ''}
                    </span>
                    <h4 className='font-bold text-base sm:text-3xl md:text-7xl md:font-extralight font-garden_bold '>
                        {data.tittle || ''}
                    </h4>
                    <p className='mb-10 mt-5 text-[10px] sm:text-sm md:text-2xl  w-3/4 text-center lg:w-1/2 font-garden_regular'>
                        {data.subtittle || ''}
                    </p>
                </div>
            </div>
        </div >
    )
}
