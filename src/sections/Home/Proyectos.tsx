import Image from 'next/image'
import React, { useState } from 'react'
import Container from '../../components/container'

const works = [
  {
    img: 'work1.jpg',
    title: 'Somerset',
    description: 'Mirum est notare quam littera gothica, quam nunc.'
  },
  {
    img: 'work2.jpg',
    title: 'Wimbledon',
    description: 'Mirum est notare quam littera gothica, quam nunc.'
  },
  {
    img: 'work3.jpg',
    title: 'Holly',
    description: 'Mirum est notare quam littera gothica, quam nunc.'
  },
  {
    img: 'work4.jpg',
    title: 'Water',
    description: 'Mirum est notare quam littera gothica, quam nunc.'
  },
  {
    img: 'work5.jpg',
    title: 'Stefan',
    description: 'Mirum est notare quam littera gothica, quam nunc.'
  },
  {
    img: 'work6.jpg',
    title: 'Fairy',
    description: 'Mirum est notare quam littera gothica, quam nunc.'
  }
]
const works2 = [
  {
    img: 'work7.jpg',
    title: 'Lean',
    description: 'Mirum est notare quam littera gothica, quam nunc.'
  },
  {
    img: 'work8.jpg',
    title: 'Rural Terrace',
    description: 'Mirum est notare quam littera gothica, quam nunc.'
  },
  {
    img: 'work9.jpg',
    title: 'Notting Hill',
    description: 'Mirum est notare quam littera gothica, quam nunc.'
  },
  {
    img: 'work10.jpg',
    title: 'Jet Black',
    description: 'Mirum est notare quam littera gothica, quam nunc.'
  },
  {
    img: 'work11.jpg',
    title: 'Spa',
    description: 'Mirum est notare quam littera gothica, quam nunc.'
  },
  {
    img: 'work12.jpg',
    title: 'Engineering',
    description: 'Mirum est notare quam littera gothica, quam nunc.'
  }
]

const Proyectos = () => {
  const [show, setShow] = useState(false)
  return (
    <Container bgColor='bg-[#FBF9F6]' className='p-10'>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-primary-800 text-5xl'>Trabajos</h1>
        <ol className='hidden flex-col lg:flex-row gap-3 mt-8 lg:flex'>
          <li className='text-primary-800 text-md font-bold'>All</li>
          <li className='text-primary-800 text-md font-bold'>Eventos</li>
          <li className='text-primary-800 text-md font-bold'>Jardines</li>
          <li className='text-primary-800 text-md font-bold'>Interiores</li>
          <li className='text-primary-800 text-md font-bold'>Mantenimiento</li>
          <li className='text-primary-800 text-md font-bold'>Urbano</li>
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
        {works.map((item) => (
          <div key={item.title}>
            <Image
              width={400}
              height={307}
              src={`/imgs/works/${item.img}`}
              className='rounded-lg '
            />
            <div className='lg:hidden'>
              <p className='text-primary-600 text-xl font-semibold'>
                {item.title}
              </p>
              <p className='text-gray-600'>{item.description}</p>
            </div>
          </div>
        ))}
        {show &&
          works2.map((item) => (
            <div key={item.title}>
              <Image
                width={400}
                height={307}
                src={`/imgs/works/${item.img}`}
                className='rounded-lg '
              />
              <div className='lg:hidden'>
                <p className='text-primary-600 text-xl font-semibold'>
                  {item.title}
                </p>
                <p className='text-gray-600'>{item.description}</p>
              </div>
            </div>
          ))}
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
