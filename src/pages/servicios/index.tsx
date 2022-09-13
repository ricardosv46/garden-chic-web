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
                <h2 className='text-center text-2xl md:text-4xl text-garden-option1 font-garden_bold'>
                  {item.tittleResumido}
                </h2>
                <p className='text-center text-base md:text-lg text-garden-option3 font-garden_medium '>
                  {item.description || ''}
                </p>
                <button
                  onClick={() => router.push(`/servicios/${item.url}`)}
                  className='bg-white text-garden-option1 border-2 border-garden-option1 px-4 py-1 md:px-10 md:py-3 rounded-full uppercase duration-300 ease-in-out font-garden_medium  hover:text-white hover:bg-garden-option1'
                >
                  Más
                </button>
              </div>
            </div>
          ))}
        </div>
        <Contactanos data={DataGeneral.Servicios.Contactanos} />
      </Container>
    </>
  )
}

export default Servicios
