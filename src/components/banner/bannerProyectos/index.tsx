import React from 'react'

const BannerProyectos = ({ img }: { img: string }) => {
  return (
    <div className='banner flex justify-center items-center' style={{ backgroundImage: `url(${img})` }} />
  )
}

export default BannerProyectos
