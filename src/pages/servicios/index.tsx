import Image from 'next/image'
import React from 'react'
import Container from '../../components/container'
import Contactanos from '../../sections/Home/contactanos'

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
      <div className='pt-10 '>
        {servicios.map((item) => (
          <div
            key={item.img}
            className={`flex flex-auto flex-col py-7 lg:py-0 lg:flex-row gap-8 lg:gap-0 ${item.position === 'r'
              ? 'lg:flex-row-reverse' : ''
              }`}
          >
            <div className="lg:w-1/2">
              <div style={{ backgroundImage: `url('/imgs/servicios/${item.img}')` }} className={`flex-auto  bg-cover bg-no-repeat w-full h-[500px] lg:h-[512px] `}>

              </div>
            </div>
            {/*       <Image
              className='object-cover'
              width={640}
              height={512}
              src={`/imgs/servicios/${item.img}`}
              alt='imagen proyecto'
            /> */}
            <div className='lg:w-1/2 flex-auto px-10 xl:px-28 flex flex-col justify-center items-center gap-10'>
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
      <div
        className={`flex flex-col py-7 lg:py-0 lg:flex-row gap-8 lg:gap-0 }`}
      >
        <div className="lg:w-1/2">
          <div className="flex-auto bg-[url('/imgs/servicios/servicio5.jpg')] bg-cover bg-no-repeat w-full h-[500px] lg:h-[800px] ">

          </div>
        </div>

        {/* <Image
          className='object-cover'
          width={640}
          height={800}
          src={`/imgs/servicios/servicio5.jpg`}
          alt='imagen proyecto'
        /> */}
        <div className='lg:w-1/2 flex-auto px-10 lg:mx-auto flex flex-col justify-center items-center gap-10'>
          <h2 className='lg:text-center text-4xl sm:text-4xl lg:text-6xl xl:text-7xl text-primary-300 font-bold'>
            We are nice people with a lot of experience.
          </h2>

        </div>
      </div>
      <Contactanos />
    </Container>
  )
}

export default Servicios
