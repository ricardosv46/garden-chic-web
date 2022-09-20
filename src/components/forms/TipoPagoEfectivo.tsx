import { Show } from '@components/show'
import Spinner from '@components/Sppinner'
import { useBancos } from '@services/useBancos'
import { useEfectivoMovil } from '@services/useEfectivoMovil'
import Image from 'next/image'
import IconArrowLeft from 'public/icons/IconArrowLeft'
import IconCheckRadio from 'public/icons/IconCheckRadio'
import React, { ChangeEvent, useMemo, useState } from 'react'
import { Interface } from 'readline'
import useForm from 'src/hooks/useForm'

interface Props {
	setShow: React.Dispatch<React.SetStateAction<string>>
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
	tipoPago: string
}

const TipoPagoEfectivo = ({ onChange, setShow, tipoPago }: Props) => {
	const { db: dbEfectivo, loading } = useEfectivoMovil()

	const disabled = useMemo(() => {
		return dbEfectivo.some((item) => item.titulo === tipoPago)
	}, [tipoPago])

	console.log(disabled)

	return (
		<form onSubmit={() => setShow('EfectivoUpload')} className='relative pt-0 lg:p-10'>
			<button onClick={() => setShow('formulario')} className='absolute top-0 left-0 p-2.5 text-white rounded-full bg-primary-300'>
				<IconArrowLeft />
			</button>
			<h2 className='text-4xl font-bold text-center text-primary-300 xl:text-6xl '>Efectivo Móvil</h2>

			<h2 className='mt-10 text-xl font-bold lg:pl-20 xl:text-3xl'>Escoge el metodo de pago</h2>
			<Show
				condition={!loading}
				isDefault={
					<div className='flex justify-center py-20'>
						<Spinner />
					</div>
				}>
				<div className='grid grid-cols-1 gap-5 mt-10 lg:justify-center lg:px-36 lg:grid-cols-2 xl:grid-cols-3'>
					{dbEfectivo.map((item) => (
						<div key={item.efectivoMovilId} className='relative'>
							<input
								className='hidden group peer'
								type='radio'
								required
								name='tipoPago'
								value={item.titulo!}
								id={item.efectivoMovilId!}
								onChange={onChange}
							/>

							<label
								className=' p-3.5 text-sm px-5 gap-1  flex items-center justify-between  flex-col-reverse  font-medium transition-colors border border-gray-300 rounded-lg shadow-sm cursor-pointer peer-checked:border-primary-300 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500'
								htmlFor={item.efectivoMovilId!}>
								<div className='flex flex-col gap-3'>
									<span className='font-bold'> {item.titulo!} </span>
								</div>

								<div className='w-24 h-24'>
									<Image
										loading='lazy'
										src={item.imagenPrincipal?.url!}
										width={300}
										height={300}
										objectFit='contain'
										alt='imagen'
									/>
								</div>
							</label>

							<IconCheckRadio className='absolute w-5 h-5 opacity-0 text-primary-300 top-2 right-2 peer-checked:opacity-100' />
						</div>
					))}
				</div>
			</Show>

			<div className='pt-10'>
				<div className='flex justify-center pt-5'>
					<button
						disabled={!disabled}
						type='submit'
						className={`${
							!disabled ? 'bg-primary-300 opacity-50' : 'bg-primary-300 hover:border-primary-300 hover:bg-white hover:text-primary-300'
						} px-10 py-4 text-white uppercase duration-300 ease-in-out border-2 rounded-full `}>
						Continuar
					</button>
				</div>
			</div>
		</form>
	)
}

export default TipoPagoEfectivo
