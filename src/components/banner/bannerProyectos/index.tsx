import React from 'react'

const BannerProyectos = ({ img }: { img: string }) => {
  return (
    <div className='banner flex justify-center items-center' style={{ backgroundImage: `url(${img})` }}>
      <h2 className='text-center  text-5xl lg:text-8xl text-white font-bold z-10'>Despues</h2>
    </div>
  )
}

export default BannerProyectos
