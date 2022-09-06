import React from 'react'
import { IBanner } from 'src/data/dataGeneral'
import style from '../items.module.css'
import Image from 'next/image'
interface Iprops {
    data: IBanner
}
const pathnameImg = '/imgs/banner/principal/'

export const ItemPrincipal = ({ data }: Iprops) => {
    const ResolverPahtname = (imgCurrent: string) => `url(${pathnameImg}${imgCurrent})`

    return (
        <div className={` ${style.itemBanner}`} style={{ backgroundImage: ResolverPahtname(data.image) }}  >
            <div className='mx-auto my-0 w-[90%] xl:w-[1280px]  h-full flex justify-center items-center text-white relative z-10'>
                <div className='h-80 flex flex-col gap-4 items-center justify-center lg:max-w-[700px] absolute'>
                    {/*  animate-renderTranslate  */}
                    <span className='font-bold text-[10px] sm:text-xl md:font-extralight translateRender font-garden_bold'>
                        {data.textheader || ''}
                    </span>
                    {/*
                    <h4 className='font-bold text-base sm:text-3xl md:text-7xl md:font-extralight font-garden_bold '>
                        {data.tittle || ''}
                    </h4> */}
                    <div className='relative w-[60%] h-14 sm:w-[50%] sm:h-16 md:h-24 lg:h-32 lg:w-[90%]'>
                        <Image
                            className='absolute w-full h-full '
                            loading='lazy'
                            layout='fill'
                            objectFit='cover'
                            src={`${pathnameImg}${data.imgTittle!}`}
                        />
                    </div>
                    {/* <Image src={`${pathnameImg}${data.imgTittle!}`} width={300} height={2   00} alt='Logo_Banner' /> */}

                    <p className='mb-10  text-[10px] sm:text-sm md:text-2xl  w-3/4 text-center lg:w-2/3 font-garden_medium text-gray-100 block'>
                        {data.subtittle || ''}
                    </p>
                </div>
            </div>
        </div >
    )
}
