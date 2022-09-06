import React from 'react'

const BannerProyectos = ({ img }: { img: string }) => {
  return (
    <div className='banner flex justify-center items-center' style={{ backgroundImage: `url(${img})` }}>
      <h2 className='text-center  text-5xl lg:text-8xl text-primary-600 font-garden_bold z-10 drop-shadow-2xl shadow-primary-800'>Después</h2>
    </div>
  )
}

export default BannerProyectos
