import React, { useState } from 'react'
import InputRange, { Range } from 'react-input-range'
import IconFilter from '../../../../public/icons/IconFilter'
import { dataProductos } from '../../../data/dataProductos'
import Accordion from '../../accordion'
import CardProductosRelacionados from '../../cards/cardProducto/cardProductosRelacionados'
import InputCheckbox from '../../inputs/InputCheckbox'
import InputSearch from '../../inputs/InputSearch'

const Filtro = () => {

  const initialState = {
    min: 500,
    max: 1000
  } as const

  const [range, setRange] = useState<number | Range>(initialState)
  return (
    <div className="">
      <div className="flex gap-x-3 mt-5 items-center">
        <IconFilter height={22} width={22} fill="#35405E" />
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
              <div className="flex justify-between text-primary-600">
                <div className="flex flex-col ">
                  <div className='text-base'>Minimo</div>
                  <p className='text-sm'>S/ {(range as Range).min}</p>
                </div>
                <div className="flex flex-col ">
                  <div className='text-base'>Máximo</div>
                  <p className='text-sm'>S/ {(range as Range).max}</p>
                </div>
              </div>
              <div className="mx-2 mt-2">
                <InputRange
                  maxValue={initialState.max as number}
                  minValue={initialState.min as number}
                  value={range}
                  formatLabel={range => `S./ ${range} `}
                  onChange={value => setRange(value)}
                />
              </div>

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
  )
}

export default Filtro