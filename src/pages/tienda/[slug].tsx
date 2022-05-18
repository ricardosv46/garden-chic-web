import { useRouter } from 'next/router'
import React from 'react'
import CardProducto from '../../components/cards/cardProducto'
import CardProductosRelacionados from '../../components/cards/cardProducto/cardProductosRelacionados'
import Container from '../../components/container'
import Gallery from '../../components/gallery'
import InputSearch from '../../components/inputs/InputSearch'
import { dataProductos } from '../../data/dataProductos'

const Productos = () => {
  const router = useRouter()

  const producto = dataProductos.find((item) => item.img === router.query.slug)

  return (
    <div>
      <Container className='lg:flex py-10 gap-10'>
        <div className='w-full lg:w-9/12 '>
          <div className='lg:flex gap-5'>
            <div className='flex-1'>
              <Gallery
                data={[`${producto?.img}`, 'producto5.jpg', 'producto8.jpg']}
              />
            </div>
            <div className='flex-1 '>
              <div className='flex gap-3 items-center'>
                <p className='text-gray-900 text-md font-semibold ease-in-out duration-300 hover:text-primary-300 cursor-pointer'>
                  {producto?.categoty1}
                </p>
                <span className='w-1 h-1 bg-primary-300 rounded-full'></span>
                <p className='text-gray-900 text-md font-semibold ease-in-out duration-300 hover:text-primary-300 cursor-pointer'>
                  {producto?.categoty2}
                </p>
              </div>

              <p className='text-gray-900 text-3xl  font-bold mt-3'>
                {producto?.title}
              </p>
              <div className='w-5 h-0.5 bg-primary-300 my-5'></div>
              <p className='text-gray-900 text-5xl  '> {producto?.price}</p>

              <p className='text-gray-900 text-lg  my-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus porttitor tempor nisl sit amet euismod. Cras tincidunt
                urna a dictum pellentesque. Maecenas bibendum aliquet sem.
                Curabitur et ultrices massa. Nam iaculis vestibulum risus nec
                sodales. Phasellus et risus lobortis, scelerisque odio sed,
                tempus enim. Duis luctus at tortor id sodales. Aliquam tincidunt
                interdum lorem ut finibus. Donec in sem non erat volutpat
                ultrices.
              </p>
              <div className='flex justify-between border-2'>
                <div className='flex-1 flex justify-center items-center'>
                  <input
                    type='number'
                    min='0'
                    placeholder='0'
                    className='w-16 p-2 focus:outline-none border-2 rounded-lg'
                  />
                </div>

                <p className='flex-1 p-5 border-l-2 text-primary-300 text-center'>
                  {producto?.title}
                </p>
                <p className='flex-1 p-5 border-l-2'>$20.00</p>
              </div>

              <button className='mt-5 py-3 px-5 border-primary-300 bg-primary-300 border-2 hover:bg-white ease-in-out duration-300 text-white hover:text-primary-300 font-bold text-sm rounded-lg'>
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
          <div>
            <p className='text-gray-900 text-3xl  font-bold mt-10'>
              Descripción
            </p>
            <p className='text-gray-900 text-lg  my-5'>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
            <p className='text-gray-900 text-3xl  font-bold mt-10'>
              También te puede interesar
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center py-10'>
              <CardProducto {...dataProductos[0]} />
              <CardProducto {...dataProductos[1]} />
            </div>
            <p className='text-gray-900 text-3xl  font-bold mt-10'>
              Productos relacionados
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center py-10'>
              <CardProducto {...dataProductos[4]} />
              <CardProducto {...dataProductos[5]} />
              <CardProducto {...dataProductos[6]} />
            </div>
            <p className='text-gray-900 text-3xl  font-bold my-5'>Reseñas</p>

            <p className='text-gray-900 text-xl   my-5'>Aún no hay reseñas</p>

            <p className='text-gray-900 text-3xl  font-bold my-5'>
              Sé el primero en valorar
            </p>
            <p className='text-gray-900 text-xl   mt-5 '>Tu calificación</p>
            <div className='mb-10 flex gap-1 mt-1'>
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  key={item}
                  stroke='currentColor'
                  fill={true ? '#7E94C1' : '#CECECE'}
                  viewBox='0 0 576 512'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
                </svg>
              ))}
            </div>

            <label
              htmlFor='reseña'
              className='text-gray-900 text-xl  font-semibold '
            >
              Tu reseña
            </label>
            <textarea
              id='reseña'
              className='w-full focus:outline-primary-300 border-2  rounded h-60 text-gray-800 p-5 mb-5'
            />

            <label
              htmlFor='nombre'
              className='text-gray-900 text-xl  font-semibold '
            >
              Nombre *
            </label>
            <input
              type='text'
              id='nombre'
              className='w-full focus:outline-primary-300 border-2  rounded h-12 text-gray-800 px-5 mb-5'
            />
            <label
              htmlFor='email'
              className='text-gray-900 text-xl  font-semibold '
            >
              Email *
            </label>
            <input
              type='email'
              id='email'
              className='w-full focus:outline-primary-300 border-2  rounded h-12 text-gray-800 px-5 mb-5'
            />
            <div className='flex gap-3 items-center'>
              <input type='checkbox' />
              <p className='text-gray-900 text-lg'>
                Guarde mi nombre, correo electrónico y sitio web en este
                navegador para la próxima vez que comente.
              </p>
            </div>

            <div className='flex justify-center mt-10'>
              <button className='px-5 py-2 border-primary-300 border-2 rounded-lg hover:bg-primary-300 ease-in-out duration-300 text-primary-300 hover:text-white font-bold text-sm '>
                ENVIAR
              </button>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-3/12 px-3'>
          <InputSearch placeholder='Buscar' />
          <p className='text-gray-900 text-2xl font-bold py-10'>
            Productos similares
          </p>
          {dataProductos.map((item, i) => {
            if (i < 5) {
              return <CardProductosRelacionados key={i} {...item} />
            } else {
              return null
            }
          })}
        </div>
      </Container>
    </div>
  )
}

export default Productos
