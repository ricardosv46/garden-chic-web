import React from 'react'

interface IProps {
  titulo: string
  rutaImg: string
}
const BannerContactos = ({ titulo, rutaImg }: IProps) => {
  return (
    <div style={{
      backgroundImage: `url('/imgs/${rutaImg}')`
    }} className={` banner banner-contactos  flex justify-center items-center mb-20`}>
      <div className='mx-auto my-0 w-[90%] xl:w-[1280px]  h-full flex  justify-center items-center text-white relative z-10    md:justify-start  '>
        <h2 className='text-center text-8xl text-white font-bold relative z-10'>
          {titulo}
        </h2>
      </div>
    </div>
  )
}

export default BannerContactos
