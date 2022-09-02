import React from 'react'
import Container from '../../components/container'
import style from './nuestraMision.module.css'

const NuestraMision = () => {
  return (
    <Container bgColor='bg-gray-100' className='py-5 pb-10'>
      {/* <div className='grid grid-cols-1 md:grid-cols-[60%,40%] bg-white'>
          <div className='order-2   py-3 px-6 text-xl md:text-2xl  md:px-12 lg:py-10 xl:pt-32 xl:pb-24  font-light text-primary-800'>
            <h2 className='font-bold leading-none text-xl md:text-2xl lg:text-4xl'>
              Nuestra misión
            </h2>
            <p className='text-xs md:text-lg lg:text-2xl font-extralight mt-8 text-justify '>
              Servir a nuestros clientes de una manera excelente, tratando
              de reflejar lo más fielmente posible el estilo, la decoración,
              los colores y mantenimiento del área verde, donde se vea reflejado las
              expectativas logradas en obra y diseño a través del jardín. Con el objetivo de superar sus expectativas

            </p>
          </div>
          <div className='order-1 flex justify-end items-end p-10'>
            <div className={`${style['img-nuestraMision']} w-full `}></div>
          </div>
        </div> */}

      <div className='grid grid-cols-1 md:grid-cols-[50%,50%] bg-white '>
        <div className='order-2  py-3 px-6 text-xl lg:text-2xl h-full p-10 md:px-12 lg:py-10  font-light text-primary-800 '>
          <h2 className='font-bold leading-none text-xl md:text-2xl lg:text-4xl'>
            Nuestra misión
          </h2>
          <p className='text-xs md:text-lg lg:text-2xl font-extralight mt-8 text-justify ' >
            Servir a nuestros clientes de una manera excelente, tratando
            de reflejar lo más fielmente posible el estilo, la decoración,
            los colores y mantenimiento del área verde, donde se vea reflejado las
            expectativas logradas en obra y diseño a través del jardín. Con el objetivo de superar sus expectativas

          </p>
        </div>
        <div className='order-1   p-10 '>
          <div className={`w-full bg-top bg-no-repeat bg-cover h-[250px] md:h-[450px] `} style={{ backgroundImage: `url('/imgs/nosotros/header/03_NUESTRA_MISION.jpg')` }} />

        </div>
      </div>
    </Container>
  )
}

export default NuestraMision
