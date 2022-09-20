import { SelectSearch } from '@components/SelectSearch'
import IconCheckRadio from 'public/icons/IconCheckRadio'
import React, { ChangeEvent } from 'react'
import { useEffect } from 'react'
import { useDepartamentos } from '../../services/useDepartamentos'
import { useDistritos } from '../../services/useDistritos'
import { useProvincias } from '../../services/useProvincias'
import InputFloat from '../inputs/InputFloat'
import Select from '../select'

interface PayProps {
	payment_method_id: string
	token: string
	installments: number
}

interface IProps {
	setShow: React.Dispatch<React.SetStateAction<string>>
	venta: string
	depa: string
	recojo: string
	prov: string
	dist: string
	ruc: string
	razonSocial: string
	celular: string
	direccion: string
	tipoPago: string
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
	setStateMutation: (key: string, value: string | number) => void
}

const FormEnvio = ({
	setShow,
	ruc,
	razonSocial,
	celular,
	direccion,
	venta,
	depa,
	recojo,
	tipoPago,
	prov,
	dist,
	onChange,
	setStateMutation
}: IProps) => {
	const { db: departamentos } = useDepartamentos()
	const { db: provincias } = useProvincias({ DepCode: depa.toString() })
	const { db: distritos } = useDistritos({ ProCode: prov.toString() })

	const dataDepartamentos = departamentos.map((depa) => ({
		value: depa?.DeparCodi!,
		titulo: depa?.DeparNom!
	}))

	const dataProvincias = provincias.map((prov) => ({
		value: prov?.ProvCodi!,
		titulo: prov?.ProvNom!
	}))
	const dataDistritos = distritos.map((prov) => ({
		value: prov?.DistCodi!,
		titulo: prov?.DistNom!
	}))

	useEffect(() => {}, [depa, prov, dist])

	return (
		<div className='flex justify-center '>
			<div className='w-full h-auto md:w-2/5 '>
				<h2 className='text-4xl font-bold text-center text-garden-option1 xl:text-6xl '>Completa tu información</h2>
				<div>
					<form onSubmit={() => setShow(tipoPago)} className='flex flex-col mt-10 gap-y-5 '>
						<Select
							required
							label='Tipo de recibo'
							name='venta'
							value={venta}
							onChange={onChange}
							data={[
								{ value: 'boleta', titulo: 'Boleta' },
								{ value: 'factura', titulo: 'Factura' }
							]}
						/>

						<Select
							required
							label='Tipo de recojo'
							name='recojo'
							value={recojo}
							onChange={onChange}
							data={[
								{ value: 'Tienda', titulo: 'Tienda' },
								{ value: 'Delivery', titulo: 'Delivery' }
							]}
						/>

						{venta === 'factura' && (
							<>
								<InputFloat required type='text' label='Ruc' name='ruc' id='ruc' htmlFor='ruc' value={ruc} onChange={onChange} />
								<InputFloat
									required
									type='text'
									label='Razon Social'
									name='razonSocial'
									id='razonSocial'
									htmlFor='razonSocial'
									value={razonSocial}
									onChange={onChange}
								/>
							</>
						)}

						{recojo === 'Delivery' && (
							<div className='flex flex-col gap-5 xl:flex-row '>
								<SelectSearch
									tittle='Departamento'
									data={dataDepartamentos}
									name='depa'
									value={depa}
									setStateMutation={setStateMutation}
								/>
								<SelectSearch
									tittle='Provincia'
									data={dataProvincias}
									name='prov'
									value={prov}
									disabled={depa ? false : true}
									setStateMutation={setStateMutation}
								/>
								<SelectSearch
									tittle='Distrito'
									data={dataDistritos}
									name='dist'
									value={dist}
									disabled={prov ? false : true}
									setStateMutation={setStateMutation}
								/>
							</div>
						)}
						<div>
							<p className='text-sm font-semibold duration-300  text-garden-option1 ml-2.5'>Tipo De Pago</p>
							<div className='grid grid-cols-1 gap-5 mt-1 xl:grid-cols-3'>
								<div className='relative'>
									<input
										className='hidden group peer'
										type='radio'
										required
										name='tipoPago'
										value='Transferencia'
										id='Transferencia'
										onChange={onChange}
									/>

									<label
										className='block p-3.5 text-sm font-medium transition-colors border border-gray-300 rounded-lg shadow-sm cursor-pointer peer-checked:border-garden-option1 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500'
										htmlFor='Transferencia'>
										<span> Transferencia </span>
									</label>
									<IconCheckRadio className='absolute w-5 h-5 opacity-0 text-garden-option1 top-4 right-4 peer-checked:opacity-100' />
								</div>

								<div className='relative'>
									<input
										className='hidden group peer'
										type='radio'
										required
										name='tipoPago'
										value='Efectivo'
										id='Efectivo'
										onChange={onChange}
									/>

									<label
										className='block p-3.5 text-sm font-medium transition-colors border border-gray-300 rounded-lg shadow-sm cursor-pointer peer-checked:border-garden-option1 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500'
										htmlFor='Efectivo'>
										<span> Efectivo Móvil </span>
									</label>

									<IconCheckRadio className='absolute w-5 h-5 opacity-0 text-garden-option1 top-4 right-4 peer-checked:opacity-100' />
								</div>
								<div className='relative'>
									<input
										className='hidden group peer'
										type='radio'
										required
										name='tipoPago'
										value='Tarjeta'
										id='Tarjeta'
										onChange={onChange}
									/>

									<label
										className='block p-3.5 text-sm font-medium transition-colors border border-gray-300 rounded-lg shadow-sm cursor-pointer peer-checked:border-garden-option1 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500'
										htmlFor='Tarjeta'>
										<span> Tarjeta </span>
									</label>

									<IconCheckRadio className='absolute w-5 h-5 opacity-0 text-garden-option1 top-4 right-4 peer-checked:opacity-100' />
								</div>
							</div>
						</div>

						<InputFloat
							required
							type='number'
							label='Celular'
							name='celular'
							id='celular'
							htmlFor='celular'
							value={celular}
							maxLength={9}
							onChange={onChange}
						/>
						<InputFloat
							required
							type='text'
							label='Dirección'
							name='direccion'
							id='direccion'
							htmlFor='direccion'
							maxLength={255}
							value={direccion}
							onChange={onChange}
						/>

						<div className='flex justify-center pt-5'>
							<button
								type='submit'
								className='px-10 py-4 text-white uppercase duration-300 ease-in-out border-2 rounded-full bg-garden-option1 hover:border-garden-option1 hover:bg-white hover:text-garden-option1'>
								Continuar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default FormEnvio
