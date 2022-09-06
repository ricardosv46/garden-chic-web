import React from 'react'
import Image from 'next/image'
import style from './header.module.css'
const Header = () => {
  const scrollTo = () => {
    window.scrollTo({
      top: 400,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`${style['banner-nosotros']} h-40`}>
      <div className='w-full h-full flex flex-col justify-center items-center text-white relative z-10 '>
        <div className=' text-sm sm:text-2xl md:text-3xl 2xl:text-4xl font-bold text-white w-full lg:w-1/2 text-center px-4 font-garden_bold'>
          <p className='mt-4 md:mt-8'>¡Queremos ser parte de tus proyectos de áreas verdes!</p>
          {/* <p> plasmamos tus sueños en tus áreas verdes y le brindamos mantenimiento como si fueran propios.</p> */}
          <p className='relative md:mt-11 text-[8px] md:text-sm'>Conócenos</p>
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

export default Header
