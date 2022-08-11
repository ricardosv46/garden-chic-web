import React from 'react'
import Container from '../../components/container'
import style from './nuestraMision.module.css'

const NuestraMision = () => {
  return (
    <div className=''>
      <Container bgColor='bg-gray-100' className='py-5 pb-10'>
        <div className='grid grid-cols-1 md:grid-cols-[60%,40%] bg-white'>
          <div className='order-2   py-3 px-6 text-xl md:text-2xl  md:px-12 lg:py-10 xl:pt-32 xl:pb-24  font-light '>
            <h2 className='text-primary-800 font-normal leading-none text-[50px] '>
              Nuestra misión.
            </h2>
            <p className='text-lg font-extralight mt-8'>
              Servir a nuestros clientes de una manera excelente, tratando
              de reflejar lo más fielmente posible el estilo, la decoración,
              los colores y mantenimiento del área verde, donde se vea reflejado las
              expectativas logradas en obra y diseño a través del jardín. Con el objetivo de superar sus expectativas

            </p>
          </div>
          <div className='order-1 '>
            <div className={`${style['img-nuestraMision']} `}></div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NuestraMision
