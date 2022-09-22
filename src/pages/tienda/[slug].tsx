/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import request from 'graphql-request'
import React, { useState, useEffect, useMemo } from 'react'
import CardProducto from '@components/cards/cardProducto'
import CardProductosRelacionados from '@components/cards/cardProducto/cardProductosRelacionados'
import Container from '@components/container'
import Gallery from '@components/gallery'
import InputSearch from '@components/inputs/InputSearch'
import ModalProduct from '@components/modal/modalProduct'
import SidebarCart from '@components/sidebarCart'
import { Imagen } from '../../generated/graphql'
import { GET_SLUG_PRODUCTO, URL } from '../../graphql/ssr/ssr'
import { useProductos } from '@services/useProducto'
import { BreadCrumb } from '@components/breadcrumb'
import { useProductContext } from '@context/products/ProductsContext'
import { useCarritoContext } from '@context/carrito/CarritoState'
import IconPdf from 'public/icons/IconPdf'

interface IProps {
	slug: string
}

interface Producto {
	producto: {
		galeria: Imagen[]
		CategoriaProducto: { titulo: string }
		titulo: string
		precioOferta: number
		descripcionLarga: string
		descripcionCorta: string
		fichaTecnica: string
	}
}

const Productos = ({ producto }: Producto) => {
	const [isOpen, setIsOpen] = useState(false)

	const { db: productos, loading } = useProductos()
	const { DataProducts, DispatchProducts } = useProductContext()
	const { Product } = DataProducts
	const [imageModal, setImageModal] = useState<Imagen[]>([])

	const { agregarCarrito, OpenCarrito } = useCarritoContext()

	useEffect(() => {
		DispatchProducts({ type: 'SelectProduct', payload: producto })
	}, [producto])

	useEffect(() => {
		setImageModal([])
	}, [])

	return (
		<div>
			<Container className='py-4 mt-6'>
				<BreadCrumb />
			</Container>
			<ModalProduct isOpen={isOpen} onClose={() => setIsOpen(false)} data={imageModal} />
			<Container className='gap-10 py-10 lg:flex'>
				<div className='w-full lg:w-9/12 '>
					<div className='gap-5 lg:flex'>
						<div className='flex-1'>
							<Gallery
								onClick={() => {
									if (imageModal.length === 0) {
										setImageModal(Product?.galeria!)
									}

									setIsOpen(true)
								}}
								data={Product?.galeria!}
								setImageModal={setImageModal}
							/>
						</div>
						<div className='relative flex-1 '>
							<div className='flex items-center gap-3'>
								<p className='font-semibold duration-300 ease-in-out cursor-pointer text-garden-option3 text-md hover:text-garden-option1'>
									{Product?.CategoriaProducto?.titulo!}
								</p>
								<span className='w-1 h-1 rounded-full bg-garden-option1'></span>
							</div>

							<p className='mt-3 text-3xl font-bold text-garden-option3'>{Product?.titulo!}</p>
							<div className='w-5 h-0.5 bg-garden-option1 my-5'></div>
							<p className='text-5xl text-garden-option3 '>S/ {Product?.precioOferta?.toFixed(2)}</p>
							<p className='my-5 text-lg text-garden-option3'>{Product?.descripcionCorta!}</p>
							<div className='flex gap-3 py-3'>
								{/* <div className='flex items-center justify-center flex-1'>
									<input type='number' min='1' placeholder='1' className='w-16 p-2 border-2 rounded-lg focus:outline-none' />
								</div> */}

								<p className='font-bold text-garden-option1'>Stock</p>
								<p className=''>{Product?.stockReal!}</p>
							</div>
							<div className='flex items-center gap-10 mt-5'>
								<button
									disabled={Product?.stockReal! <= 0}
									className={`${
										Product?.stockReal! <= 0 ? 'opacity-50' : 'hover:bg-white hover:text-garden-option1'
									} px-5 py-3  text-sm font-bold text-white duration-300 ease-in-out border-2 rounded-lg border-garden-option1 bg-garden-option1 `}
									onClick={() => {
										agregarCarrito({
											id: Number(Product.productoId!),
											amount: 1,
											categoty1: Product.CategoriaProducto?.titulo!,
											img: Product.imagenPrincipal?.url!,
											title: Product.titulo!,
											firtsPrice: Product.precioReal!,
											price: Product.precioOferta!,
											rebaja: true,
											stockTotal: Product?.stockReal!
										})
										OpenCarrito(true)
									}}>
									AGREGAR AL CARRITO
								</button>
								{Product?.stockReal! <= 0 && (
									<button className='px-4 py-1 text-lg font-semibold text-white bg-red-500'>Agotado</button>
								)}
							</div>
						</div>
					</div>
					<div>
						<p className='mt-10 text-3xl font-bold text-garden-option3'>Descripción</p>
						<div className='my-5 text-lg text-garden-option3' dangerouslySetInnerHTML={{ __html: Product?.descripcionLarga! }}>
							{/* {descripcionLarga} */}
						</div>
						{Product?.fichaTecnica?.length > 0 && (
							<button
								className={` px-5 items-center flex gap-3 py-3   text-sm font-bold text-white duration-300 ease-in-out border-2 rounded-lg border-garden-option1 hover:bg-white hover:text-garden-option1 bg-garden-option1 `}
								onClick={() => window.open(Product?.fichaTecnica!)}>
								Ficha Técnica <IconPdf className='w-6 h-6' />
							</button>
						)}
						<p className='mt-10 text-3xl font-bold text-garden-option3'>También te puede interesar</p>
						<div className='grid grid-cols-1 gap-5 py-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
							{productos.map((item, i) => {
								if (i < 3) {
									return (
										<CardProducto
											key={item.slug}
											slug={item.slug!}
											titulo={item.titulo!}
											stockTotal={Product?.stockReal!}
											amount={14}
											firtsPrice={item.precioReal!}
											categoty1={item.CategoriaProducto?.titulo!}
											price={item.precioOferta!}
											id={Number(item.productoId!)}
											img={item.imagenPrincipal!}
											rebaja
										/>
									)
								} else {
									return null
								}
							})}
						</div>
						<p className='mt-10 text-3xl font-bold text-garden-option3'>Productos relacionados</p>
						<div className='grid grid-cols-1 gap-5 py-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
							{productos.map((item, i) => {
								if (i > 2 && i < 5) {
									return (
										<CardProducto
											key={item.slug}
											slug={item.slug!}
											titulo={item.titulo!}
											amount={14}
											stockTotal={Product?.stockReal!}
											firtsPrice={item.precioReal!}
											categoty1={item.CategoriaProducto?.titulo!}
											price={item.precioOferta!}
											id={14}
											img={item.imagenPrincipal!}
											rebaja
										/>
									)
								} else {
									return null
								}
							})}
						</div>
					</div>
				</div>

				<div className='w-full px-3 lg:w-3/12'>
					<InputSearch placeholder='Buscar' onClick={() => console.log('buscando publicaciones recientes')} />
					<p className='py-10 text-2xl font-bold text-garden-option3'>Productos similares</p>
					{productos.map((item, i) => {
						if (i < 5) {
							return (
								<CardProductosRelacionados
									slug={item?.slug!}
									img={item.imagenPrincipal?.url!}
									precioOferta={item?.precioOferta!}
									precioReal={item?.precioReal!}
									titulo={item?.titulo!}
									key={i}
									{...item}
								/>
							)
						} else {
							return null
						}
					})}
				</div>
			</Container>
			<SidebarCart />
		</div>
	)
}
export default Productos

export async function getServerSideProps({ params }: any) {
	const res = await request(URL, GET_SLUG_PRODUCTO, {
		slug: params.slug
	})
	const data = res?.GetProductoSlug
	return {
		props: {
			producto: data
		}
	}
}
