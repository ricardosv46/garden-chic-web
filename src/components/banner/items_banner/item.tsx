import ButtonBanner from '@components/buttons/buttonBanner'
import React from 'react'
import { IBanner } from 'src/data/dataGeneral'
import style from '../items.module.css'

const pathnameImg = '/imgs/banner/principal/'

interface IProps {
    data: IBanner
}

export const Item = ({ data }: IProps) => {
    const ResolverPahtname = (imgCurrent: string) => `url(${pathnameImg}${imgCurrent})`
    return (
        // ${style['item-1']} 
        <div className={`animate-area ${style.itemBanner}`} style={{ backgroundImage: ResolverPahtname(data.image) }}  >
            <div className={`mx-auto my-0 w-[90%] xl:w-5/6 h-full flex justify-center items-center text-white relative z-10 ${data.align === 'l' ? 'md:justify-start' : 'md:justify-end'} md:px-6  `}>
                <div className='h-80 flex flex-col items-center md:items-start justify-center max-w-sm lg:max-w-[700px] '>
                    <h4 className='font-garden_bold text-base md:text-4xl md:font-extralight text-center md:text-left '>
                        {data.tittle || ''}
                    </h4>
                    <p className='mb-4 mt-4 lg:my-6 text-[10px] md:text-xl font-garden_medium '>
                        {data.subtittle || ''}
                    </p>
                    <ButtonBanner title={data.buttonText || 'SABER MÁS'} />
                </div>
            </div>
        </div >
    )
}
