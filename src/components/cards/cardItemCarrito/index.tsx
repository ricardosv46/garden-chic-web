import Image from 'next/image'
import React from 'react'
import IconDelete from '../../../../public/icons/IconDelete'
import IconMinus from '../../../../public/icons/IconMinus'
import IconPlus from '../../../../public/icons/IconPlus'
import { CarritoProps } from '../../../context/carrito/CarritoState'

interface CardItemCarritoProps {
	id: number
	title: string
	price: number
	img: string
	firtsPrice: number
	categoty1: string
	rebaja: boolean
	amount: number
	eliminarCarrito: (id: number) => void
	actualizarPrecioCarrito: (payload: CarritoProps) => void
}
const CardItemCarrito = ({
	id,
	title,
	price,
	img,
	firtsPrice,
	categoty1,
	rebaja,
	amount,
	eliminarCarrito,
	actualizarPrecioCarrito
}: CardItemCarritoProps) => {
	const incrementPrice = () => {
		console.log('increment')

		actualizarPrecioCarrito({
			id,
			img,
			title,
			firtsPrice,
			price,
			categoty1,
			rebaja,
			amount: amount + 1
		})
	}
	const decrementPrice = () => {
		actualizarPrecioCarrito({
			id,
			img,
			title,
			firtsPrice,
			price,
			categoty1,
			rebaja,
			amount: amount > 1 ? amount - 1 : amount
		})
	}
	return (
		<div className='flex justify-between mt-5'>
			<div className='flex gap-x-3'>
				<div className='border'>
					<Image src={img} alt='imagen' width={100} height={100} />
				</div>
				<div className='flex flex-col justify-between'>
					<div className=''>
						<p className='font-bold text-garden-option1 text-xl'>{title}</p>
						<div className='flex gap-x-3 mt-1'>
							{firtsPrice > price && <p className='text-garden-option3 text-sm  line-through'>S/. {firtsPrice.toFixed(2)}</p>}

							<p className='text-garden-option3 text-sm'>S/ {price.toFixed(2)}</p>
						</div>
					</div>

					<div className='flex  gap-x-2 '>
						<button className='bg-gray-200 px-2 py-1 rounded ' onClick={decrementPrice}>
							<IconMinus width={10} height={10} />
						</button>
						<p className='text-garden-option3'>{amount}</p>
						<button className='bg-gray-200 px-2 py-1 rounded ' onClick={() => incrementPrice()}>
							<IconPlus width={10} height={10} />
						</button>
					</div>
				</div>
			</div>

			<div className='cursor-pointer h-full mt-2' onClick={() => eliminarCarrito(id)}>
				<IconDelete height={16} width={16} fill='red' />
			</div>
		</div>
	)
}

export default CardItemCarrito
