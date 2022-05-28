import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import IconCart from '../../../public/icons/IconCart'
import { useCarritoContext } from '../../context/carrito/CarritoState'
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

  const { carrito, eliminarCarrito, CalcularTotal, actualizarPrecioCarrito } = useCarritoContext()

  const [total, setTotal] = useState(0)
  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, product) => total + product.amount * product.price,
      0
    )
    setTotal(calculoTotal)
  }, [carrito])

  console.log(total);

  return (
    <div className="fixed top-0 text-primary-800  h-screen md:left-auto md:bottom-px z-40">
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
          <div className="flex flex-col w-full bg-white  py-6 pl-6 h-screen">
            <div className="flex justify-between items-center pr-6 ">
              <h2 className='uppercase font-bold'>Mi carrito</h2>
              <p className="font-bold text-black cursor-pointer" onClick={onClose}>Seguir comprando</p>

            </div>

            {carrito.length > 0 ?
              <div className="mt-5 h-[800px] scroll overflow-y-scroll pr-6">
                {carrito.map((item, index) => (
                  <CardItemCarrito
                    key={index}
                    {...item}
                    eliminarCarrito={eliminarCarrito}
                    actualizarPrecioCarrito={actualizarPrecioCarrito}
                  />
                ))}

                <div className="flex justify-between mb-4 mt-8">
                  <p className='font-semibold text-lg'>Subtotal</p>
                  <p className='font-bold text-black'>S/ {total.toFixed(2)}</p>
                </div>
                <div className="flex flex-col gap-y-3 ">
                  <button
                    className="bg-white text-sm text-primary-800 border border-primary-800 font-bold py-2 px-4 rounded w-full uppercase hover:bg-primary-800 hover:text-white duration-300 ease-in">
                    Ver carrito
                  </button>
                  <button
                    className="bg-primary-800 text-sm text-white font-bold py-2 px-4 rounded w-full uppercase"
                    /* onClick={() => CalcularTotal(total)} */>
                    Finalizar compra
                  </button>
                </div>
              </div>


              : <div className="flex flex-col items-center justify-center mt-7">
                <IconCart width={35} height={35} />
                <p className="text-center text-sm mt-2">Tu carrito de compras está vacío.</p>
              </div>}



          </div>


        </div>
      </motion.div>
    </div >

  )
}
export default SidebarCart
