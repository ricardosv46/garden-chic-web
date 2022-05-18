import React from 'react'
import Image from 'next/image'

const Contactanos = () => {
  return (
    <div className='bg-primary-600'>
      <div className='mx-auto my-0 w-[90%] xl:w-[1280px] '>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full lg:w-7/12 px-10 h-auto lg:h-[850px]  '>
            <h2 className='text-white font-bold text-4xl xl:text-6xl  pt-20'>
              Obtenga un estimado gratis
            </h2>
            <div className=''>
              <h3 className='text-white font-bold text-xl mt-5 lg:mt-14'>
                Tu información
              </h3>
              <div className='flex flex-col gap-y-5 mt-6'>
                <input
                  type='text'
                  className='w-full rounded h-12 text-black px-6'
                  placeholder='Nombre'
                />
                <input
                  type='text'
                  className='w-full rounded h-12 text-black px-6'
                  placeholder='Telefono'
                />
                <select
                  className='w-full rounded h-12 px-6'
                  name='service'
                  defaultValue='1'
                >
                  <option value='' disabled hidden className='text-gray-400'>
                    Seleccione una opcion
                  </option>
                  <option value='1'>select 1</option>
                  <option value='2'>select 2</option>
                  <option value='3'>select 3</option>
                </select>
                <input
                  type='text'
                  className='w-full rounded h-12 text-black px-6'
                  placeholder='E-mail'
                />
              </div>
              <div className='mt-10'>
                <button className='bg-orange-300 text-white px-8 py-4 rounded uppercase duration-300 ease-in-out  hover:bg-white hover:text-orange-300'>
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <div className='pt-10 pb-5 lg:p-0 relative w-full lg:w-5/12'>
            <div className='w-full lg:w-[850px] lg:h-[850px] lg:absolute top-0 overflow-hidden'>
              <Image
                className='right-10 top-10 block overflow-hidden'
                loading='lazy'
                src='/imgs/formulario.jpg'
                alt='manos'
                width={1280}
                height={1280}
                // objectFit='cover'
                // sizes={'(max-width: 640px) 80vw, 640px'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactanos
