import React from 'react'
import Container from '../../components/container'
import style from './nuestraMision.module.css'

const NuestraMision = () => {
  return (
    <div className="">
      <Container bgColor='bg-primary-100' className='py-5 pb-10'>
        <div className="grid grid-cols-1 md:grid-cols-[60%,40%] bg-white">
          <div className="order-2   py-3 px-6 text-xl md:text-2xl  md:px-12 lg:py-10 xl:pt-32 xl:pb-24  font-light ">
            <h2 className='text-primary-800 font-normal leading-none text-[50px] '>Nuestra misión.</h2>
            <p className='text-lg font-extralight mt-8'>Nuestro objetivo es reflejar lo más fielmente posible el estilo, la decoración y la paleta de colores de la casa del cliente para que exista una fuerte relación visual entre los espacios interiores y exteriores. Trabajamos regularmente en estrecha colaboración con arquitectos y diseñadores de interiores para garantizar que esto se logre. .</p>
          </div>
          <div className="order-1 ">
            <div className={`${style['img-nuestraMision']} `}>
            </div>
          </div>

        </div>
      </Container>
    </div>

  )
}

export default NuestraMision