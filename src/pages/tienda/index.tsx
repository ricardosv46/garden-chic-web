import { useRouter } from 'next/router'
import React, { useState } from 'react'
import BannerTienda from '../../components/banner/bannerTienda'
import CardProducto from '../../components/cards/cardProducto'
import CardProductosRelacionados from '../../components/cards/cardProducto/cardProductosRelacionados'
import Container from '../../components/container'
import InputSearch from '../../components/inputs/InputSearch'
import { dataProductos } from '../../data/dataProductos'
import InputRange, { Range } from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import SidebarFilter from '../../components/sidebarFilter'
import Accordion from '../../components/accordion'
import InputCheckbox from '../../components/inputs/InputCheckbox'
import IconFilter from '../../../public/icons/IconFilter'
import Filtro from '../../components/sidebarFilter/filtro'
import SidebarCart from '../../components/sidebarCart'

const Tienda = () => {
  const router = useRouter()
  const [isOpenCart, setIsOpenCart] = useState(false)

  const initialState = {
    min: 500,
    max: 1000
  }

  const [range, setRange] = useState<number | Range>(initialState)
  const [isOpenFilter, setIsOpenFilter] = useState(false)


  return (
    <div>
      <BannerTienda />
      <Container className='lg:flex py-10 gap-10 '>
        <div className='flex lg:flex-col gap-x-2 sm:gap-x-7 w-full lg:w-3/12 p-5 lg:px-3'>
          <div className="w-1/2 lg:hidden">
            <InputSearch placeholder='Buscar' />
          </div>


          <div className="hidden lg:block w-1/2 lg:w-full">
            <Filtro />
          </div>
          <div className="lg:hidden w-1/2">
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
            {dataProductos.map((item) => (
              <CardProducto key={item.img} {...item} openModal={() => setIsOpenCart(true)} />
            ))}
          </div>
        </div>


      </Container>
      <div className="">
        <SidebarFilter isOpen={isOpenFilter} onClose={() => setIsOpenFilter(false)} />
      </div>
      <SidebarCart isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />
    </div>
  )
}

export default Tienda
