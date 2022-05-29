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
import Filtro from './filtro'

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
  onClose: () => void
}

const SidebarFilter = ({
  isOpen = false,
  onClose,
}: SidebarFilterProps) => {
  return (
    <div className='fixed top-0 text-primary-800 h-screen md:right-auto md:bottom-px z-40 '>
      <motion.div
        variants={fade}
        onClick={onClose}
        animate={isOpen ? 'open' : 'closed'}
        initial={{ opacity: 0, pointerEvents: 'none' }}
        className='fixed top-0 w-full h-screen bg-black bg-opacity-50'
      />
      <motion.div
        variants={variants}
        className='absolute top-0 z-50 h-screen  '
        initial={{ opacity: 0, x: '-100%' }}
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className='text-primary-600 w-[340px]  bg-white  min-h-screen border-r p-6 h-full overflow-y-scroll scroll'>
          <Filtro />
        </div>
      </motion.div>
    </div>
  )
}
export default SidebarFilter
