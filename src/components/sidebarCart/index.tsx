/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import IconCart from '../../../public/icons/IconCart'
import { useCarritoContext } from '@context/carrito/CarritoState'
import CardItemCarrito from '../cards/cardItemCarrito'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useModalContext } from '@context/modal/ModalState'

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

const SidebarCart = () => {
	const { carrito, eliminarCarrito, CalcularTotal, actualizarPrecioCarrito, ViewCarrito, OpenCarrito } = useCarritoContext()
	const { changeModal } = useModalContext()
	const navigate = useRouter()
	const { status, data } = useSession()
	const [total, setTotal] = useState(0)
	useEffect(() => {
		const calculoTotal = carrito.reduce((total, product) => total + product.amount * product.price, 0)
		setTotal(calculoTotal)
		CalcularTotal(calculoTotal)
	}, [carrito])

	return (
		<div className='absolute top-0 z-40 h-screen text-garden-option1 md:left-auto md:bottom-px'>
			<motion.div
				variants={fade}
				onClick={() => OpenCarrito(false)}
				animate={ViewCarrito ? 'open' : 'closed'}
				initial={{ opacity: 0, pointerEvents: 'none' }}
				className='fixed top-0 w-full h-screen bg-black bg-opacity-50 '
			/>
			<motion.div
				variants={variants}
				className='fixed top-0 left-0 z-50 h-screen '
				initial={{ opacity: 0 }}
				animate={ViewCarrito ? 'open' : 'closed'}>
				<div className='text-garden-option1 w-[340px]  bg-white  min-h-screen border-r '>
					<div className='flex flex-col w-full h-screen py-6 pl-6 bg-white'>
						<div className='flex items-center justify-between pr-6 '>
							<h2 className='font-bold uppercase'>Mi carrito</h2>
							<p className='font-bold cursor-pointer text-garden-option3' onClick={() => OpenCarrito(false)}>
								Seguir comprando
							</p>
						</div>

						{carrito?.length > 0 ? (
							<div className='h-full pr-6 mt-5 overflow-y-scroll scroll'>
								<div>
									{carrito.map((item) => (
										<CardItemCarrito
											key={item.id}
											{...item}
											eliminarCarrito={eliminarCarrito}
											actualizarPrecioCarrito={actualizarPrecioCarrito}
										/>
									))}
								</div>

								<div className='fixed bottom-0 left-0 w-full p-3 bg-white'>
									<div className='flex justify-between mt-8 mb-4'>
										<p className='text-lg font-semibold'>Subtotal</p>
										<p className='font-bold text-garden-option3'>S/ {total.toFixed(2)}</p>
									</div>
									<div className='flex flex-col gap-y-3 '>
										<button
											onClick={() => {
												OpenCarrito(false)
												if (status === 'authenticated') {
													navigate.push('/comprar')
												} else {
													changeModal(true)
												}
											}}
											className='w-full px-4 py-2 text-sm font-bold text-white uppercase rounded bg-garden-option1'>
											Finalizar compra
										</button>
									</div>
								</div>
							</div>
						) : (
							<div className='flex flex-col items-center justify-center mt-7'>
								<IconCart width={35} height={35} />
								<p className='mt-2 text-sm text-center'>Tu carrito de compras está vacío.</p>
							</div>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	)
}
export default SidebarCart
