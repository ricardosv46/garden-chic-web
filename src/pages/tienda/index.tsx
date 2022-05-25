import { useRouter } from 'next/router'
import React, { useState } from 'react'
import BannerTienda from '../../components/banner/bannerTienda'
import CardProducto from '../../components/cards/cardProducto'
import CardProductosRelacionados from '../../components/cards/cardProducto/cardProductosRelacionados'
import Container from '../../components/container'
import InputSearch from '../../components/inputs/InputSearch'
import { dataProductos } from '../../data/dataProductos'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import SidebarFilter from '../../components/sidebarFilter'
import Accordion from '../../components/accordion'

const Tienda = () => {
  const router = useRouter()
  const [range, setRange] = useState({ min: 40, max: 180 })
  const [isOpenCart, setIsOpenCart] = useState(false)

  return (
    <div>
      <BannerTienda />
      <Container className='lg:flex py-10 gap-10 '>
        <div className='flex lg:flex-col gap-x-2 sm:gap-x-7 w-full lg:w-3/12 p-5 lg:px-3'>
          <div className="w-1/2 lg:hidden">
            <InputSearch placeholder='Buscar' />
          </div>


          <div className="hidden lg:block w-1/2 lg:w-full">
            <div className="py-4 border-b">
              <Accordion title="Marca">
                <div className="w-full">
                  <InputSearch placeholder='Buscar' />
                  {/* <div className="">
                    <input type="checkbox" id='marca1' className="w-6 h-6 rounded " />
                    <label htmlFor='marca1' className="text-5xl">Marca 1</label>
                  </div> */}
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
                      onChange={setRange}
                    />
                  </div>
                </div>
              </Accordion>
            </div>

          </div>
          <div className="lg:hidden w-1/2">
            <button
              onClick={() => setIsOpenCart(true)}
              className='w-full bg-primary-600 text-white px-8 py-2.5 rounded-lg ease-out duration-300 hover:bg-primary-800'
            >
              Filtrar
            </button>
          </div>

          {/*         <p className='text-gray-900 text-2xl font-bold py-10'>
            Productos similares
          </p>
          {dataProductos.map((item, i) => {
            if (i < 5) {
              return <CardProductosRelacionados key={i} {...item} />
            } else {
              return null
            }
          })} */}
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
        <SidebarFilter isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} range={range} setRange={setRange} />
      </div>

    </div>
  )
}

export default Tienda
