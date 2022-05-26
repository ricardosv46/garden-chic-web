import React, { Dispatch, SetStateAction, useState } from 'react'
import { motion } from 'framer-motion'
import IconCart from '../../../public/icons/IconCart'
import InputRange, { Range } from 'react-input-range'
import Accordion from '../accordion'
import InputSearch from '../inputs/InputSearch'
import IconFilter from '../../../public/icons/IconFilter'
import InputCheckbox from '../inputs/InputCheckbox'
import CardProductosRelacionados from '../cards/cardProducto/cardProductosRelacionados'
import { dataProductos } from '../../data/dataProductos'


const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { ease: 'easeInOut' }
  },
  closed: {
    opacity: 0,
    x: '-100%',
    transition: { ease: 'easeOut' }
  }
}

const fade = {
  open: {
    opacity: 1,
    pointerEvents: 'unset'
  },
  closed: {
    opacity: 0,
    pointerEvents: 'none'
  }
} as const


interface SidebarFilterProps {
  isOpen: boolean
  range: number | Range
  onClose: () => void
  setRange: Dispatch<SetStateAction<number | Range>>
}

const SidebarFilter = ({ isOpen = false, range, onClose, setRange }: SidebarFilterProps) => {

  return (
    <div className="fixed top-0 text-primary-800 h-screen md:right-auto md:bottom-px z-40 ">
      <motion.div
        variants={fade}
        onClick={onClose}
        animate={isOpen ? 'open' : 'closed'}
        initial={{ opacity: 0, pointerEvents: 'none' }}
        className="fixed top-0 w-full h-screen bg-black bg-opacity-50"
      />
      <motion.div
        variants={variants}
        className="absolute top-0 z-50 h-screen  "
        initial={{ opacity: 0, x: '-100%' }}
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className="text-primary-600 w-[340px]  bg-white  min-h-screen border-r p-6 h-full overflow-y-scroll scroll">

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
                    onChange={setRange}
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
      </motion.div>
    </div>

  )
}
export default SidebarFilter
