import React from 'react'
import { motion } from 'framer-motion'
import IconCart from '../../../public/icons/IconCart'
import { useCarritoContext } from '../../context/carrito/CarritoState'
import Image from 'next/image'
import IconDelete from '../../../public/icons/IconDelete'
import IconMinus from '../../../public/icons/IconMinus'
import IconPlus from '../../../public/icons/IconPlus'
import CardItemCarrito from '../cards/cardItemCarrito'

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
} as const


interface SidebarCartProps {
  isOpen: boolean
  onClose: () => void
}

const SidebarCart = ({ isOpen = false, onClose }: SidebarCartProps) => {

  const { carrito/* , actualizarPrecioCarrito, eliminarCarrito, CalcularTotal */ } = useCarritoContext()
  console.log(carrito);

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
        <div className="text-primary-600 w-[340px]  bg-white  min-h-screen border-r  ">
          <div className="w-full  bg-white  p-6 ">
            <div className="flex justify-between items-center  ">
              <h2 className='uppercase font-bold'>Mi carrito</h2>
              <p className="font-bold text-black cursor-pointer" onClick={onClose}>Seguir comprando</p>

            </div>

            {carrito.length > 0 ?
              <div className="mt-5 ">
                {carrito.map((item, index) => (
                  <CardItemCarrito
                    key={index}
                    title={item.title}
                    price={item.price}
                    img={item.img}
                    firtsPrice={item.firtsPrice}
                  />
                ))}
              </div>

              : <div className="flex flex-col items-center justify-center mt-7">
                <IconCart width={35} height={35} />
                <p className="text-center text-sm mt-2">Tu carrito de compras está vacío.</p>
              </div>}

          </div>


        </div>
      </motion.div >
    </div >

  )
}
export default SidebarCart
