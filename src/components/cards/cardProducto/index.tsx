import React, { useState } from 'react'
import { Show } from '@components/show'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCarritoContext } from '@context/carrito/CarritoState'
import { Imagen } from '../../../generated/graphql'
import { FiShoppingCart, FiEye, FiHeart } from 'react-icons/fi'
import { formatPercent } from '@utils'
import Link from 'next/link'
interface IProps {
	id: number
	img: Imagen
	slug: string
	titulo: string
	firtsPrice: number
	price: number
	categoty1: string
	rebaja: boolean
	amount: number
	stockTotal: number
}

const CardProducto = ({ id, img, titulo, firtsPrice, price, categoty1, slug, rebaja, amount, stockTotal }: IProps) => {
	const { agregarCarrito, OpenCarrito } = useCarritoContext()
	const [hover, setHover] = useState(false)
	const router = useRouter()
	return (
		<div>
			<div className='w-full rounded-xl '>
				<div className='relative z-0 flex border-b-2 cursor-pointer' onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
					<div className='absolute inset-0 z-20 md:hidden md:invisible md:z-0' onClick={() => router.push(`/tienda/${slug}`)} />
					<Image loading='lazy' src={img.url!} width={1080} height={1080} className='rounded-t-2xl' alt='blogs' />
					{/* hover images buttons */}
					<div
						className={`hidden md:flex absolute transition-all ease-in duration-300 bg-gray-500  flex-row justify-center items-center gap-2 z-0 ${
							hover ? 'bg-gradiant-primary inset-0 rounded-t-xl scale-100' : ' inset-[50%] rounded-full scale-0'
						} `}>
						<div className='z-40 flex items-center justify-center w-10 h-10 bg-white rounded-md'>
							<button
								className='w-full h-full'
								onClick={() => {
									agregarCarrito({
										id,
										img: img.url!,
										title: titulo,
										firtsPrice,
										price,
										categoty1,
										rebaja,
										amount,
										stockTotal
									})
									OpenCarrito(true)
								}}>
								<FiShoppingCart className='m-auto' />
							</button>
						</div>
						<div className='z-40 flex items-center justify-center w-10 h-10 bg-white rounded-md'>
							<button onClick={() => router.push(`/tienda/${slug}`)} className='w-full h-full'>
								<FiEye className='m-auto' />
							</button>
						</div>
					</div>

					{/* Items */}
					<Show condition={rebaja}>
						{/* Sale */}
						<div className='absolute top-0 left-0 w-14 h-6 bg-[#3F72AF] rounded-tl-xl  text-white flex justify-center items-center z-10'>
							<span className='ml-2'>Sale!</span>
						</div>

						{/* Top o destacado */}
						<div className='absolute top-0 left-2 w-14 h-6 bg-[#3F72AF] transform -skew-x-[18deg] z-0'></div>
						<div className='absolute top-0 z-10 flex items-center justify-center w-6 text-white bg-red-700 right-2 h-14'>
							<FiHeart className='mt-2' />
						</div>
						<div className='absolute top-2 right-2 w-6 h-14  bg-red-700 transform -skew-y-[30deg] z-0'></div>
						<div className='absolute top-2 right-2 w-6 h-14  bg-red-700 transform skew-y-[30deg] z-0'></div>
					</Show>
				</div>
				<div className='flex flex-col p-2 border-b-2 border-x-2 rounded-b-xl md:flex-row'>
					<div className='w-full '>
						{/* title product */}
						<p
							onClick={() => router.push(`/tienda/${slug}`)}
							className='text-xl font-bold capitalize duration-300 ease-in-out cursor-pointer text-garden-option3 hover:text-garden-option1'>
							{titulo}
						</p>
						<div className='flex flex-col justify-between h-24'>
							{/* Price old and current */}
							<div className='flex flex-col'>
								{price < firtsPrice && (
									<div className='flex flex-row gap-2'>
										<p className='font-bold line-through text-garden-option3'>S/. {firtsPrice.toFixed(2)}</p>
										<p className='text-red-700 '>{formatPercent(firtsPrice, price)}%</p>
									</div>
								)}
								<p className='text-xl font-black text-garden-option3 '>S./ {price.toFixed(2)}</p>
							</div>
						</div>
					</div>
					{/* group button bottom */}
					<div className='flex flex-row items-center justify-center w-full gap-4 my-2 md:hidden md:flex-col'>
						<button
							className='w-8 h-8 border border-[#3F72AF] rounded-md hover:bg-[#F9F7F7] '
							onClick={() => {
								agregarCarrito({
									id,
									img: img.url!,
									title: titulo,
									firtsPrice,
									price,
									categoty1,
									rebaja,
									amount,
									stockTotal
								})
								OpenCarrito(true)
							}}>
							<FiShoppingCart className='mx-auto my-auto' />
						</button>
						{/* onClick={() => router.push(`/tienda/${slug}`)} */}

						<button
							className='w-8 h-8 border border-[#3F72AF] rounded-md hover:bg-[#F9F7F7] '
							onClick={() => router.push(`/tienda/${slug}`)}>
							<FiEye className='mx-auto my-auto' />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardProducto
