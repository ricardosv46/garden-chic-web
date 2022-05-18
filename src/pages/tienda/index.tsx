import { useRouter } from 'next/router'
import React from 'react'
import BannerTienda from '../../components/banner/bannerTienda'
import CardProducto from '../../components/cards/cardProducto'
import CardProductosRelacionados from '../../components/cards/cardProducto/cardProductosRelacionados'
import Container from '../../components/container'
import InputSearch from '../../components/inputs/InputSearch'
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

export default Tienda
