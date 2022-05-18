import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import BannerTienda from '../../components/banner/bannerTienda'
import CardProducto from '../../components/cards/cardProducto'
import Container from '../../components/container'
import { dataBlogs } from '../../data/dataBlogs'
import { dataProductos } from '../../data/dataProductos'

const Tienda = () => {
  const router = useRouter()
  return (
    <div>
      <BannerTienda />
      <Container className='lg:flex py-10 gap-10'>
        <div className='w-full lg:w-9/12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center mt-16 '>
            {dataProductos.map((item) => (
              <CardProducto key={item.img} {...item} />
            ))}
          </div>
        </div>

        <div className='w-full lg:w-3/12 px-3'>
          <div className='flex items-center justify-between relative overflow-hidden'>
            <input
              type='text'
              className='w-full  h-12 text-black px-6 border-gray-300 border-2 focus:outline-none overflow-hidden rounded-lg'
              placeholder='Buscar'
            />
            <div className='bg-gray-300 hover:bg-primary-300  border-2 ease-in-out duration-300 absolute border-l-0 border-r-2  border-b-2 border-t-2 border-gray-300 hover:border-primary-300  top-0 right-0 flex items-center justify-center w-10 h-full rounded-tr-lg rounded-br-lg'>
              <svg
                stroke='currentColor'
                fill='#fff'
                viewBox='0 0 512 512'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
              </svg>
            </div>
          </div>
          <p className='text-gray-900 text-2xl font-bold py-10'>Carrito</p>
          {dataBlogs.map((item, i) => {
            if (i < 5) {
              return (
                <div
                  key={item.img}
                  className='flex gap-3 border-b-2 border-b-gray-200 py-3'
                >
                  <Image
                    onClick={() => router.push(`/blog/${item.img}`)}
                    loading='lazy'
                    className='cursor-pointer'
                    src={`/imgs/blogs/${item.img}`}
                    width={75}
                    height={75}
                    alt='blogs'
                  />
                  <div className='flex flex-1 justify-center items-center'>
                    <p
                      onClick={() => router.push(`/blogs/${item.img}`)}
                      className='text-gray-900 text-2xl font-bold  ease-in-out duration-300 hover:text-primary-300 cursor-pointer leading-5'
                    >
                      {item.subtitle.slice(0, 26)}...
                    </p>
                  </div>
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
      </Container>
    </div>
  )
}

export default Tienda
