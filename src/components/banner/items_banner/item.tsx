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
            <div className='mx-auto my-0 w-[90%] xl:w-[1280px]  h-full flex  justify-center items-center text-white relative z-10    md:justify-end  '>
                <div className=' h-80 flex flex-col items-center md:items-start justify-center lg:max-w-[700px]'>
                    <h4 className='font-bold text-3xl md:text-7xl md:font-extralight '>
                        {data.tittle || ''}
                    </h4>
                    <p className='mb-10 mt-5 text-sm md:text-2xl'>
                        {data.subtittle || ''}
                    </p>
                    <ButtonBanner title={data.buttonText || 'SABER MÁS'} />
                </div>
            </div>
        </div >
    )
}
