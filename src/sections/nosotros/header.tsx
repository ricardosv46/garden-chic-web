import React from 'react'
import Image from 'next/image'
import style from './header.module.css'
const Header = () => {

 const scrollTo = () => {
  window.scrollTo({
   top: 400,
   behavior: 'smooth',
  })
 }

 return (
  <div className={`${style['banner-nosotros']} h-40`}>
   <div className='w-full h-full flex flex-col justify-center items-center text-white relative z-10 '>
    <div className="w-full text-xl sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-white uppercase text-center">
     <p className='mt-4 md:mt-8'>
      crea un espacio al aire libre,</p>
     <p> eso es realmente tuyo</p>
     <p className='relative md:mt-11 text-[8px] md:text-sm'>exploranos</p>
    </div>
   </div>
   <div className='absolute -bottom-7 lg:-bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10' onClick={scrollTo}>
    <div className="w-[50%] lg:w-[80%] mx-auto " >
     <Image
      src="/imgs/nosotros/leaf-button.svg"
      alt="leaf"
      width={'100%'}
      height={'100%'}
     />
    </div>

   </div>
  </div>
 )
}

export default Header