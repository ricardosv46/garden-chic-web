import Image from 'next/image'
import React from 'react'
import Container from '../../components/container'
import style from './porqueElegirnos.module.css'

const PorqueElegirnos = () => {
  return (
    <div className=''>
      <Container bgColor='bg-primary-300' className='pt-10 pb-5'>
        <div className='grid grid-cols-1 md:grid-cols-[40%,60%] bg-white'>
          <div className='order-2 md:order-1 py-3 px-6 text-xl md:text-2xl  md:px-12 lg:py-10 xl:pt-28 xl:pb-20  font-light '>
            <h2 className='text-primary-800 font-normal leading-none text-[50px] '>
              ¿Por qué elegirnos?
            </h2>
            <p className='text-lg font-extralight mt-8'>
              Trabajamos con un grupo selecto de contratistas de paisajismo,
              especialistas en diseño de iluminación y fuentes de agua para
              garantizar que el proceso de diseño del jardín, desde el concepto
              inicial hasta la finalización del proyecto, sea fluido y sin
              inconvenientes.
            </p>
          </div>
          <div className='order-1 md:order-2'>
            <div className={`${style['img-porqueElegirnos']} `}></div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PorqueElegirnos
