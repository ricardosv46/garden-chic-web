import React from 'react'
import Container from '../../components/container'
import style from './porqueElegirnos.module.css'

const PorqueElegirnos = () => {
  return (
    <Container bgColor='bg-gray-100' className='pt-10 pb-5'>
      {/* <div className='flex flex-col bg-white'> */}

      <div className='grid grid-cols-1 md:grid-cols-[50%,50%] bg-white '>
        <div className='order-2 md:order-1 py-3 px-6 text-xl lg:text-2xl h-full p-10 md:px-12 lg:py-10  font-light text-primary-800 '>
          <h2 className='font-bold leading-none text-xl md:text-2xl lg:text-4xl'>
            ¿Por qué elegirnos?
          </h2>
          <p className='text-xs md:text-lg lg:text-2xl font-extralight mt-8 text-justify ' >
            Trabajamos con un equipo multidisciplinario que ha participado en los
            principales proyectos de paisajismo en el país, tales como <span className='font-bold'>Los Juegos
              Panamericanos</span>, Edificios con certificación LEED, además somos proveedor oficial de
            <span className='font-bold'> CASACOR Perú</span> desde el 2018, también formamos parte de la
            <span className='font-bold'> Asociación de Diseñadores del Perú</span> y de
            <span className='font-bold'> Perú Green Building Council</span> que tiene como objetivo principal el promover la
            reducción de las emisiones de carbono implementando Edificios Sostenibles.

          </p>
        </div>
        <div className='order-1 md:order-2  p-10 '>
          <div className={`w-full bg-top bg-no-repeat bg-cover h-[250px] md:h-full `} style={{ backgroundImage: `url('/imgs/nosotros/header/02_POR_ELEGIRNOS.jpg')` }} />

        </div>
      </div>
      {/* <div className='bg-white'>
        <div className='pt-10 pl-10 pr-10 pb-0 hidden md:block'>
          <h2 className='font-bold leading-none text-xl md:text-2xl lg:text-4xl  '>
            ¿Por qué elegirnos?
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[50%,50%] p-6 lg:p-10 gap-4 md:gap-7'>

          <div className='order-2 md:order-1 text-xl font-light text-primary-800 md:p-2 '>
            <h2 className='font-bold leading-none text-xl md:text-2xl lg:text-4xl mb-4 md:mb-6 md:hidden'>
              ¿Por qué elegirnos?
            </h2>
            <div className='h-full'>
              <p className='text-xs md:text-xl lg:text-2xl font-extralight text-justify ' >
                Trabajamos con un equipo multidisciplinario que ha participado en los
                principales proyectos de paisajismo en el país, tales como <span className='font-bold'>Los Juegos
                  Panamericanos</span>, Edificios con certificación LEED, además somos proveedor oficial de
                <span className='font-bold'> CASACOR Perú</span> desde el 2018, también formamos parte de la
                <span className='font-bold'> Asociación de Diseñadores del Perú</span> y de
                <span className='font-bold'> Perú Green Building Council</span> que tiene como objetivo principal el promover la
                reducción de las emisiones de carbono implementando Edificios Sostenibles.
              </p>

            </div>
          </div>
          <div className='order-1 md:order-2 flex justify-end items-end pr-4 md:pr-12' >
            <div className={`w-full bg-top bg-no-repeat bg-cover h-[250px] md:h-full `} style={{ backgroundImage: `url('/imgs/nosotros/header/02_POR_ELEGIRNOS.jpg')` }} />
          </div>
        </div>
      </div> */}

    </Container >
  )
}
// .img-porqueElegirnos {
//   background-image: url('/imgs/nosotros/header/02_POR_ELEGIRNOS.jpg');
//   background-position: top;
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 500px;
//   margin-top: auto;
//   margin-bottom: auto;

// }

// @media (max-width: 768px) {
//   .img-porqueElegirnos {
//     width: 100%;
//     height: 250px;
//   }
// }


export default PorqueElegirnos
