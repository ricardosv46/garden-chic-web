import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { DataGeneral } from 'src/data/dataGeneral'
import Container from '../../components/container'
import { servicios } from '../../data/dataServicios'
import Contactanos from '../../sections/Home/contactanos'
import { Tittle } from '@components/common'
const Servicios = () => {
  const router = useRouter()

  return (
    <>
      {/* <HeaderServicios image={DataGeneral.Servicios.BannerHeader} /> */}
      <Container className='py-10'>
        <Tittle tittle='Servicios' />
        <div className='pt-10 pb-10 '>
          {servicios.map((item, i) => (
            <div
              key={i}
              className={`flex flex-auto flex-col py-7 lg:py-0 gap-8 lg:gap-0 ${item.position === 'l' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className='flex h-[512px] lg:w-1/2 bg-primary-800'>
                <Image
                  loading='lazy'
                  objectFit='cover'
                  width={1024}
                  height={512}
                  src={`/imgs/servicios/${item.img}`}
                  alt='imagen proyecto'
                />
              </div>

              <div className='lg:w-1/2 flex-auto px-10 xl:px-28 flex flex-col justify-center items-center gap-10'>
                <h2 className='text-center text-4xl text-primary-300 font-bold'>
                  {item.tittleResumido}
                </h2>
                <p className='text-center  text-lg text-primary-300 font-semibold '>
                  {item.description || ''}
                </p>
                <button
                  onClick={() => router.push(`/servicios/${item.url}`)}
                  className='bg-white text-primary-300 border-2 border-primary-300 px-10 py-3 rounded-full uppercase duration-300 ease-in-out font-medium  hover:text-white hover:bg-primary-300'
                >
                  Más
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <div
          className={`flex flex-col py-7 lg:py-0 lg:flex-row gap-8 lg:gap-0 }`}
        > */}
          {/* <div className='lg:w-1/2'>
            <div className="flex-auto bg-[url('/imgs/servicios/servicio5.jpg')] bg-cover bg-no-repeat w-full h-[500px] lg:h-[800px] "></div>
          </div> */}

          {/* <Image
          className='object-cover'
          width={640}
          height={800}
          src={`/imgs/servicios/servicio5.jpg`}
          alt='imagen proyecto'
        /> */}
          {/* <div className='lg:w-1/2 flex-auto px-10 lg:mx-auto flex flex-col justify-center items-center gap-10'>
            <h2 className='lg:text-center text-4xl sm:text-4xl lg:text-6xl xl:text-7xl text-primary-300 font-bold'>
              We are nice people with a lot of experience.
            </h2>
          </div> */}
        {/* </div> */}
        <Contactanos data={DataGeneral.Servicios.Contactanos} />
      </Container>
    </>
  )
}

export default Servicios
