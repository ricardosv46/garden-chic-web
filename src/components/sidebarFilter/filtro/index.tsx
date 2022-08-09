/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, FormEvent, ChangeEvent, Dispatch, SetStateAction } from 'react'
import Accordion from '../../accordion'
import 'react-input-range/lib/css/index.css'
import { HeaderFiltro } from './components/HeaderFiltro'
import { CategoriaProducto, Precio, Producto } from 'src/generated/graphql'
import InputRadio from '@components/inputs/InputRadio'
import InputRange from 'react-input-range'
import InputCheckbox from '@components/inputs/InputCheckbox'
import { FiTrash2 } from 'react-icons/fi'
import { FormikValues } from 'formik'

interface IProps {
	categoriaProductos: CategoriaProducto[]
	dataPriceMinMax: Precio
	tipoOrdenacion: { value: string; label: string }[]
	values: FormikValues
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void
	precio: { min: number; max: number }
	setPrecio: (precio: { min: number; max: number }) => void
	resetForm: () => void
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void
	setIsFiltrados: Dispatch<SetStateAction<boolean>>
}

const Filtro = ({
	categoriaProductos,
	dataPriceMinMax,
	tipoOrdenacion,
	values,
	handleChange,
	precio,
	setPrecio,
	resetForm,
	handleSubmit,
	setIsFiltrados
}: IProps) => {
	const [resetFilter, setResetFilter] = useState(false)

	return (
		<div className=''>
			<HeaderFiltro />
			<form action='' onSubmit={handleSubmit}>
				{/* accordion categorias */}
				<div className='py-4 border-b'>
					<Accordion title='Categoria' reset={resetFilter}>
						<div className='w-full'>
							<div className='mt-4'>
								{/* Render input radios */}
								{categoriaProductos?.map((category) => (
									<InputRadio
										label={category?.titulo || ''}
										name='categoria'
										value={category.slug || ''}
										id={category.titulo || ''}
										key={category.categoriaProductoId}
										onChange={handleChange}
									/>
								))}
							</div>
						</div>
					</Accordion>
				</div>

				{/* accordion rango de precios */}
				<div className='py-4 border-b'>
					{dataPriceMinMax?.maximo && dataPriceMinMax?.minimo && (
						<Accordion title='Precio' reset={resetFilter}>
							<div className='flex flex-col'>
								<div className='mb-10'>
									<p>Selecciona un rango de precio para filtrar tu búsqueda.</p>
								</div>
								<div className='pb-10'>
									<div className='flex justify-between text-primary-600'>
										<div className='flex flex-col '>
											<div className='text-base'>S/. {precio?.min}</div>
										</div>
										<div className='flex flex-col '>
											<div className='text-base'>S/. {precio?.max}</div>
										</div>
									</div>
									<div className='mx-2 mt-2  border-transparent border max-h-6'>
										<InputRange
											name='precio'
											maxValue={dataPriceMinMax?.maximo}
											minValue={dataPriceMinMax?.minimo}
											value={{
												min: precio?.min,
												max: precio?.max
											}}
											onChange={(value: any) => {
												setPrecio(value)
											}}
										/>
									</div>
								</div>
							</div>
						</Accordion>
					)}
				</div>

				{/* accordion ordenamiento */}
				<div className='py-4 border-b'>
					<Accordion title='Ordenar' reset={resetFilter}>
						<div className='w-full'>
							{tipoOrdenacion?.map((order) => (
								<InputRadio
									label={order?.label}
									name='order'
									value={order?.value}
									id={order?.value}
									key={order.value}
									onChange={handleChange}
								/>
							))}
						</div>
					</Accordion>
				</div>

				{/* producto destacado */}
				<div className='py-4 border-b'>
					<Accordion title='Destacado' reset={resetFilter}>
						<div className='w-full'>
							<InputCheckbox label='Producto Destacado' name='destacado' onChange={handleChange} value={values?.destacado} />
						</div>
					</Accordion>
				</div>

				<div className='py-4 flex flex-row gap-2'>
					<button
						className='w-5/6 bg-primary-600 text-white px-8 py-2.5 rounded-lg ease-out duration-300 hover:bg-primary-800'
						type='submit'>
						Filtrar
					</button>
					<button
						type='button'
						className='w-1/6 border  text-black border-red-500 hover:text-white hover:bg-red-700 transition-all duration-300 rounded-md ease-out'
						onClick={() => {
							setPrecio({ min: dataPriceMinMax?.minimo!, max: dataPriceMinMax?.maximo! })
							resetForm()
							setResetFilter(!resetFilter)
							setIsFiltrados(false)
						}}>
						<FiTrash2 className='block m-auto my-3' />
					</button>
				</div>
			</form>
		</div>
	)
}

export default Filtro
