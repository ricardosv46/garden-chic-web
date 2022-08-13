import React from 'react'
import Image from 'next/image'
import style from './header.module.css'

const pathname = "/imgs/servicios/banner/"

interface IProps {
  image: string
}
export const HeaderServicios = ({ image }: IProps) => {

  const ResolverPahtname = (img: string) => `url(${pathname + img})`

  const scrollTo = () => {
    window.scrollTo({
      top: 400,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`${style['banner-nosotros']} h-40`} style={{ backgroundImage: ResolverPahtname(image) }}>
      <div className='w-full h-full flex flex-col justify-center items-center text-white relative z-10 '>
        <div className='w-full text-4xl md:text-5xl 2xl:text-6xl font-bold text-white uppercase text-center px-4'>
          Paisajismo
        </div>
      </div>
      <div
        className='absolute -bottom-7 lg:-bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10'
        onClick={scrollTo}
      >
        <div className='w-[50%] lg:w-[80%] mx-auto '>
          <Image
            src='/imgs/nosotros/leaf-button.svg'
            alt='leaf'
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
    </div>
  )
}
