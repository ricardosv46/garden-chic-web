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

const Tienda = () => {
  const router = useRouter()
  const [range, setRange] = useState<number | Range>({ min: 40, max: 180 })
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
            <div className="flex gap-x-3 mt-5 items-center">
              <IconFilter height={22} width={22} />
              <h2 className='text-2xl font-light uppercase'>Filtros</h2>
            </div>

            <div className="py-4 border-b">
              <Accordion title="Marca">
                <div className="w-full">
                  <InputSearch placeholder='Buscar' />
                  <div className="mt-4">
                    <InputCheckbox label='Marca 1' name='Marca 1' stock={1} />
                    <InputCheckbox label='Marca 2' name='Marca 2' stock={2} />
                    <InputCheckbox label='Marca 3' name='Marca 3' stock={3} />
                  </div>
                </div>


              </Accordion>
            </div>
            <div className="py-4 border-b">
              <Accordion title="Precio">
                <div className="flex flex-col">
                  <div className="mb-10">
                    <p>Selecciona un rango de precio para filtrar tu búsqueda.</p>
                  </div>
                  <div className="pb-10">
                    <InputRange
                      maxValue={200}
                      minValue={0}
                      value={range}
                      formatLabel={range => `S./ ${range} `}
                      onChange={value => setRange(value)}
                    />
                  </div>
                </div>
              </Accordion>
            </div>
            <button
              className='w-full bg-primary-600 text-white px-8 py-2.5 rounded-lg ease-out duration-300 hover:bg-primary-800'
            >
              Aplicar Filtros
            </button>

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
              <CardProducto key={item.img} {...item} />
            ))}
          </div>
        </div>


      </Container>
      <div className="">
        <SidebarFilter isOpen={isOpenFilter} onClose={() => setIsOpenFilter(false)} range={range} setRange={setRange} />
      </div>

    </div>
  )
}

export default Tienda
