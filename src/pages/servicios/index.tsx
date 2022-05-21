import Image from 'next/image'
import React from 'react'
import Container from '../../components/container'

const servicios = [
  {
    title: 'Urbano',
    position: 'l',
    img: 'servicio1.jpg',
    icon: ''
  },
  {
    title: 'Gardines',
    position: 'r',
    img: 'servicio2.jpg',
    icon: ''
  },
  {
    title: 'Mantenimiento',
    position: 'l',
    img: 'servicio3.jpg',
    icon: ''
  },
  {
    title: 'Eventos',
    position: 'r',
    img: 'servicio4.jpg',
    icon: ''
  }
]

const Servicios = () => {
  return (
    <Container className='py-10'>
      <h1 className='text-center text-5xl text-primary-300 font-bold'>
        Servicios
      </h1>
      <div className='py-10'>
        {servicios.map((item) => (
          <div
            key={item.img}
            className={`flex gap-5 ${
              item.position === 'r' ? 'flex-row-reverse' : ''
            }`}
          >
            <Image
              className='object-cover'
              width={640}
              height={512}
              src={`/imgs/servicios/${item.img}`}
              alt='imagen proyecto'
            />
            <div className='flex-1 px-28 flex flex-col justify-center items-center gap-10'>
              <h2 className='text-center text-4xl text-primary-300 font-bold'>
                {item.title}
              </h2>
              <p className='text-center  text-lg text-primary-300 font-semibold '>
                Plants are expensive and need to be looked after. For clients
                who have used any of our services, we can offer on-going advice
                on design, styling and planting.
              </p>
              <button className='bg-white text-primary-300 border-2 border-primary-300 px-10 py-3 rounded-full uppercase duration-300 ease-in-out   hover:text-white hover:bg-primary-300'>
                Mas
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Servicios
