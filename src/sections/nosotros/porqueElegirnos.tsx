import React from 'react'
import Container from '../../components/container'
import style from './porqueElegirnos.module.css'

const PorqueElegirnos = () => {
  return (
    <Container bgColor='bg-gray-100' className='pt-10 pb-5'>
      <div className='grid grid-cols-1 md:grid-cols-[40%,60%] bg-white '>
        <div className='order-2 md:order-1 py-3 px-6 text-xl lg:text-2xl p-10 md:px-12 lg:py-10 xl:pt-28 xl:pb-20 font-light text-primary-800  '>
          <h2 className='font-bold leading-none text-[50px] md:text-4xl'>
            ¿Por qué elegirnos?
          </h2>
          <p className='text-lg font-extralight mt-8  md:text-base text-justify ' >
            Trabajamos con un equipo multidisciplinario que ha participado en los
            principales proyectos de Paisajismo en el país, tales como <span className='font-bold'>Los Juegos
              Panamericanos</span>, Edificios con certificación LEED, además somos proveedor oficial de
            <span className='font-bold'> CASACOR Perú</span> desde el 2018,también formamos parte de la <span className='font-bold'>Asociación de Diseñadores del Perú</span>
            y de <span className='font-blod'>Perú Green Building Council</span> que tiene el objetivo de promover la
            reducción de las emisiones de carbono implementando Edificios Sostenibles

          </p>
        </div>
        <div className='order-1 md:order-2 flex justify-end items-end p-10'>
          <div className={`${style['img-porqueElegirnos']} w-full`} ></div>
        </div>
      </div>
    </Container >
  )
}

export default PorqueElegirnos
