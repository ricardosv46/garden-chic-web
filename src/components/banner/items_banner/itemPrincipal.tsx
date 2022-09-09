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
        <div className={` ${style.itemBanner} text-white`} style={{ backgroundImage: ResolverPahtname(data.image) }}  >
            <div className='mx-auto my-0 w-[90%] xl:w-[1280px]  h-full flex justify-center items-center  relative z-10'>
                <div className='h-80  flex flex-col gap-1 md:gap-2 lg:gap-0 items-center justify-center lg:max-w-[700px] absolute '>
                    {/*  animate-renderTranslate  */}
                    <span className='font-bold text-base sm:text-xl lg:text-2xl md:font-extralight translateRender font-garden_bold tracking-wider  '>
                        {data.textheader || ''}
                    </span>

                    <div className='relative w-[90%] h-[70px] md:w-[90%] sm:h-16 md:h-24 lg:h-32   '>
                        <Image
                            className='absolute w-full h-full '
                            loading='lazy'
                            layout='fill'
                            objectFit='cover'
                            src={`${pathnameImg}${data.imgTittle!}`}
                        />
                    </div>
                    {/* <Image src={`${pathnameImg}${data.imgTittle!}`} width={300} height={2   00} alt='Logo_Banner' /> */}


                    <div className='hidden sm:flex flex-col items-center justify-center  text-justify '>
                        {data.subtittle.split('//').map((obj, k) => (
                            <p
                                key={k}
                                className=' text-sm sm:text-sm md:text-lg lg:text-2xl  text-center  font-garden_medium'
                            >
                                {obj || ''}
                            </p>))
                        }
                    </div>
                    <div className='sm:hidden flex flex-col items-center justify-center  text-justify w-[90%]  max-w-[370px]'>
                        <p
                            className=' text-sm  text-center  font-garden_medium'
                        >
                            {data.subtittle.split('//').join(' ')}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}
