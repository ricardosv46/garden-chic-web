import Image from 'next/image'
import React from 'react'
import Container from '../../components/container'
import style from './porqueElegirnos.module.css'

const PorqueElegirnos = () => {
  return (
    <Container bgColor='bg-gray-100' className='pt-10 pb-5'>
      <div className='grid grid-cols-1 md:grid-cols-[40%,60%] bg-white'>
        <div className='order-2 md:order-1 py-3 px-6 text-xl md:text-2xl  md:px-12 lg:py-10 xl:pt-28 xl:pb-20  font-light '>
          <h2 className='text-primary-800 font-normal leading-none text-[50px] '>
            ¿Por qué elegirnos?
          </h2>
          <p className='text-lg font-extralight mt-8'>
            Trabajamos con un equipo multidisciplinario que ha participado en los
            principales proyectos de Paisajismo en el país, tales como Los Juegos
            Panamericanos, Edificios con certificación LEED, somos proveedores de
            CASACOR desde el 2015 y somos parte la Asociación de Diseñadores del Perú
            y de Perú Green Building Council que tiene el objetivo de promover la
            reducción de las emisiones de carbono implementando Edificios Sostenibles

          </p>
        </div>
        <div className='order-1 md:order-2'>
          <div className={`${style['img-porqueElegirnos']} `}></div>
        </div>
      </div>
    </Container>
  )
}

export default PorqueElegirnos
