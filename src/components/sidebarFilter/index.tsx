import React, { useState } from 'react'
import { motion } from 'framer-motion'
import IconCart from '../../../public/icons/IconCart'
import InputRange from 'react-input-range'
import Accordion from '../accordion'
import InputSearch from '../inputs/InputSearch'

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
  open: { opacity: 1, pointerEvents: 'unset' },
  closed: { opacity: 0, pointerEvents: 'none' }
}


interface SidebarFilterProps {
  isOpen: boolean
  range: { min: number, max: number }
  onClose: () => void
  setRange: () => void
}

const SidebarFilter = ({ isOpen = false, range, onClose, setRange }: SidebarFilterProps) => {

  return (
    <div className="fixed top-0 text-primary-800 h-screen md:right-auto md:bottom-px z-40">
      <motion.div
        variants={fade}
        onClick={onClose}
        animate={isOpen ? 'open' : 'closed'}
        initial={{ opacity: 0, pointerEvents: 'none' }}
        className="fixed top-0 w-full h-screen bg-black bg-opacity-50"
      />
      <motion.div
        variants={variants}
        className="absolute top-0 z-50 h-screen"
        initial={{ opacity: 0, x: '-100%' }}
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className="text-primary-600 w-[340px]  bg-white  min-h-screen border-r p-6 ">
          <div className="py-4 border-b">
            <Accordion title="Marca">
              <div className="w-full">
                <InputSearch placeholder='Buscar' />
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
      </motion.div>
    </div>

  )
}
export default SidebarFilter
