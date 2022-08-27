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
        <div className={`animate-area ${style.itemBanner}`} style={{ backgroundImage: ResolverPahtname(data.image) }}  >
            <div className='mx-auto my-0 w-[90%] xl:w-[1280px]  h-full flex justify-center items-center text-white relative z-10'>
                <div className='h-80 flex flex-col items-center justify-center lg:max-w-[700px] '>
                    {/*  animate-renderTranslate  */}
                    <span className='font-bold text-lg sm:text-xl md:font-extralight translateRender'>
                        {data.textheader || ''}
                    </span>
                    <h4 className='font-bold text-2xl sm:text-3xl md:text-7xl md:font-extralight '>
                        {data.tittle || ''}
                    </h4>
                    <p className='mb-10 mt-5 text-xs sm:text-sm md:text-2xl  w-3/4 text-center lg:w-1/2'>
                        {data.subtittle || ''}
                    </p>
                </div>
            </div>
        </div >
    )
}
