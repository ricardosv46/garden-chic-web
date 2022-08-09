import React from 'react'
import ButtonBanner from '../../buttons/buttonBanner'
import style from '../items.module.css'
const Item3 = () => {
  return (
    <div className={`${style['item-3']} animate-area `}>
      <div className='mx-auto my-0 w-[90%] xl:w-[1280px] h-full flex justify-center items-center text-white relative z-10 md:justify-start  '>
        <div className=' relative h-80 flex flex-col items-start justify-center'>
          <h4 className='font-bold text-3xl md:text-7xl md:font-extralight'>
            PAISAJISMO
          </h4>
          <p className='mb-10 mt-5 text-sm md:text-2xl'>
            DISFRUTA DE TU ESPACIO
          </p>
          <ButtonBanner title='SABER MÁS' />
        </div>
      </div>
    </div>
  )
}

export default Item3
