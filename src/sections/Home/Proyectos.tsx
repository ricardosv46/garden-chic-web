import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Container from '../../components/container'
import { dataProyectos } from '../../data/dataProyectos'

const Proyectos = () => {
  const [show, setShow] = useState(false)
  const router = useRouter()
  return (
    <Container bgColor='bg-[#F9FAFB]' className='pt-10 pb-20'>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-center text-5xl text-primary-300 font-bold'>
          Trabajos
        </h1>
        <ol className='hidden flex-col lg:flex-row gap-3 mt-8 lg:flex'>
          <li className='text-primary-300 text-md font-bold'>All</li>
          <li className='text-primary-300 text-md font-bold'>Eventos</li>
          <li className='text-primary-300 text-md font-bold'>Jardines</li>
          <li className='text-primary-300 text-md font-bold'>Interiores</li>
          <li className='text-primary-300 text-md font-bold'>Mantenimiento</li>
          <li className='text-primary-300 text-md font-bold'>Urbano</li>
        </ol>

        <select className='text-primary-800 text-md font-bold lg:hidden mt-8'>
          <option value='all'>All</option>
          <option value='events'>Events</option>
          <option value='gardens'>Gardens</option>
          <option value='interiors'>Interiors</option>
          <option value='maintance'>Maintance</option>
          <option value='urban'>Urban</option>
        </select>
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center mt-10 '>
        {dataProyectos.map((item, index) => {
          if (index < 6) {
            return (
              <div
                key={item.title}
                className='hover:cursor-pointer relative shadow-sm '
                onClick={() => router.push(`/proyectos/${item.img}`)}
              >
                <div className='hidden lg:flex bg-white text-primary-300 absolute top-0 w-full h-full z-10  justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 ease-out pt-10 hover:pt-0 rounded-lg'>
                  <div className='text-center p-5'>
                    <p className='text-2xl font-bold'>{item.title}</p>
                    <p className='text-lg pt-5 font-semibold'>
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className='image-h-full-hack image-block-hack'>
                  <Image
                    width={800}
                    height={614}
                    src={`/imgs/works/${item.img}`}
                    className='transition-all duration-500 ease-out rounded-lg'
                  />
                </div>
                <div className='lg:hidden p-1'>
                  <p className='text-primary-600 text-xl font-semibold'>
                    {item.title}
                  </p>
                  <p className='text-gray-600'>{item.description}</p>
                </div>
              </div>
            )
          }
        })}
        {show &&
          dataProyectos.map((item, index) => {
            if (index > 5) {
              return (
                <div
                  key={item.title}
                  className='hover:cursor-pointer relative shadow-sm '
                  onClick={() => router.push(`/proyectos/${item.img}`)}
                >
                  <div className='hidden lg:flex bg-white text-primary-300 absolute top-0 w-full h-full z-10  justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 ease-out pt-10 hover:pt-0 rounded-lg'>
                    <div className='text-center p-5'>
                      <p className='text-2xl font-bold'>{item.title}</p>
                      <p className='text-lg pt-5 font-semibold'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className='image-h-full-hack image-block-hack'>
                    <Image
                      width={800}
                      height={614}
                      src={`/imgs/works/${item.img}`}
                      className='transition-all duration-500 ease-out rounded-lg'
                    />
                  </div>
                  <div className='lg:hidden p-1'>
                    <p className='text-primary-600 text-xl font-semibold'>
                      {item.title}
                    </p>
                    <p className='text-gray-600'>{item.description}</p>
                  </div>
                </div>
              )
            }
          })}
      </div>
      <div className='flex justify-center mt-10'>
        {!show && (
          <button
            onClick={() => setShow(true)}
            className='bg-primary-600 text-white px-8 py-2.5 rounded-full ease-out duration-300 hover:bg-primary-800'
          >
            Cargar más
          </button>
        )}
      </div>
    </Container>
  )
}

export default Proyectos
