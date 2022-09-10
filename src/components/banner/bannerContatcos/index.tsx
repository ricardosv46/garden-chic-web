import React from 'react'

interface IProps {
  titulo: string | undefined | string[]
  rutaImg: string
}
const BannerContactos = () => {
  return (
    <div
      className={` banner banner-contactos  flex justify-center items-center mb-20  `}
    >
      <div className='mx-auto my-0 w-[90%] xl:w-[1280px]  h-full flex  justify-center items-center text-white relative z-10    md:justify-start  '>
        <h2 className='text-center text-5xl sm:text-8xl text-white font-bold relative z-10 capitalize drop-shadow-3xl '>
          Contacto
        </h2>
      </div>
    </div>
  )
}

export default BannerContactos
