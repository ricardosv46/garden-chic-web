import { useRouter } from 'next/router'
import React, { useState } from 'react'
import BannerTienda from '../../components/banner/bannerTienda'
import CardProducto from '../../components/cards/cardProducto'
import CardProductosRelacionados from '../../components/cards/cardProducto/cardProductosRelacionados'
import Container from '../../components/container'
import InputSearch from '../../components/inputs/InputSearch'
import { dataProductos } from '../../data/dataProductos'
import InputRange, { Range } from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import SidebarFilter from '../../components/sidebarFilter'
import Accordion from '../../components/accordion'
import InputCheckbox from '../../components/inputs/InputCheckbox'
import IconFilter from '../../../public/icons/IconFilter'
import Filtro from '../../components/sidebarFilter/filtro'
import SidebarCart from '../../components/sidebarCart'
import { useProductos } from '../../services/useProducto'

const Tienda = () => {
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [isOpenFilter, setIsOpenFilter] = useState(false)

  const { db: productos, loading } = useProductos()

  return (
    <div>
      <BannerTienda />
      {loading ? (
        <div className='flex justify-center py-10'>
          <svg
            className='animate-spin  h-8 w-8 text-primary-300'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        </div>
      ) : (
        <Container className='lg:flex py-10 gap-10 '>
          <div className='flex lg:flex-col gap-x-2 sm:gap-x-7 w-full lg:w-3/12 p-5 lg:px-3'>
            <div className='w-1/2 lg:hidden'>
              <InputSearch placeholder='Buscar' />
            </div>

            <div className='hidden lg:block w-1/2 lg:w-full'>
              <Filtro />
            </div>
            <div className='lg:hidden w-1/2'>
              <button
                onClick={() => setIsOpenFilter(true)}
                className='w-full bg-primary-600 text-white px-8 py-2.5 rounded-lg ease-out duration-300 hover:bg-primary-800'
              >
                Filtrar
              </button>
            </div>
          </div>
          <div className='w-full lg:w-9/12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center mt-16 '>
              {productos.map((item) => (
                <CardProducto
                  key={item.slug}
                  slug={item.slug!}
                  titulo={item.titulo!}
                  amount={14}
                  firtsPrice={item.precioReal!}
                  categoty1={item.CategoriaProducto?.titulo!}
                  price={item.precioOferta!}
                  id={14}
                  img={item.imagenPrincipal!}
                  rebaja
                  openModal={() => setIsOpenCart(true)}
                />
              ))}
            </div>
          </div>
        </Container>
      )}
      <div className=''>
        <SidebarFilter
          isOpen={isOpenFilter}
          onClose={() => setIsOpenFilter(false)}
        />
      </div>
      <SidebarCart isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />
    </div>
  )
}

export default Tienda
