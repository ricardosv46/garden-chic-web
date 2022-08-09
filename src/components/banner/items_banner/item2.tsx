import React from 'react'
import ButtonBanner from '../../buttons/buttonBanner'
import style from '../items.module.css'
const Item2 = () => {
  return (
    <div className={`${style['item-2']} animate-area`}>
      <div className='mx-auto my-0 w-[90%] xl:w-[1280px]  h-full flex  justify-center items-center text-white relative z-10     '>
        <div className=' relative h-80 flex flex-col items-center justify-center'>
          <h4 className='font-bold text-3xl md:text-7xl md:font-extralight'>
            JARDINES VERTICALES
          </h4>
          <p className='mb-10 mt-5 text-sm md:text-2xl'>
            UNA NUEVA EXPERIENCIA EN DECORACION
          </p>
          <ButtonBanner title='SABER MÁS' />
        </div>
      </div>
    </div>
  )
}

export default Item2
