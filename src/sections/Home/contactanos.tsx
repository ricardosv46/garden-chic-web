import React, { FormEvent, useState } from 'react'
import Image from 'next/image'
import Container from '../../components/container'
import InputFloat from '../../components/inputs/InputFloat'
import InputArea from '../../components/inputs/InputArea'
import useForm from '../../hooks/useForm'
import { useContactos } from '@services/useContactos'
interface IProps {
	data: {
		tittle: string
		OptionForm: string[]
	}
}

const Contactanos = ({ data }: IProps) => {
	const { nombre, email, celular, tipoServicio, onChange, resetForm } = useForm({
		nombre: '',
		email: '',
		celular: '',
		tipoServicio: ''
	})

	const [descripcion, setDescripcion] = useState('')
	const [mensaje, setMensaje] = useState(false)
	const { crearContacto, loadingCreate } = useContactos()

	const handleClick = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		crearContacto({ celular, descripcion, email, nombre, tipoServicio }).then((res) => {
			if (res.ok) {
				resetForm()
				setDescripcion('')
				setMensaje(true)
				setTimeout(() => {
					setMensaje(false)
				}, 3000)
			}
		})
	}

	return (
		<Container>
			<div className='flex flex-col lg:flex-row lg:py-10 '>
				<div className='w-full h-auto px-0 mb-6 lg:w-1/2 lg:px-10 sm:mb-0'>
					<h2 className='pt-20 text-xl text-garden-option1 font-garden_bold md:text-2xl lg:text-4xl'>{data.tittle || ''}</h2>
					<div>
						<h3 className='mt-5 text-base text-garden-option1 font-garden_medium lg:text-xl lg:mt-14'>Tú información</h3>
						<form onSubmit={handleClick} className='flex flex-col mt-6 gap-y-5 '>
							<div className='flex flex-col gap-5 lg:flex-row '>
								<InputFloat required type='text' label='Nombre' name='nombre' value={nombre} onChange={onChange} />
								<InputFloat required type='email' label='E-mail' name='email' value={email} onChange={onChange} />
							</div>
							<div className='flex flex-col gap-5 lg:flex-row '>
								<InputFloat type='text' label='Celular' name='celular' value={celular} onChange={onChange} />
								<div className='w-full '>
									<select
										className='w-full px-2.5 text-garden-option1   py-3.5 text-sm font-semibold border border-gray-300  focus:outline-none focus:ring-0 focus:border-garden-option1 peer rounded-md'
										name='tipoServicio'
										required
										value={tipoServicio}
										defaultValue=''
										onChange={onChange}>
										<option value=''>Selección de servicios</option>
										{data.OptionForm.map((obj, i) => (
											<option value={obj.toUpperCase()} key={i}>
												{obj.toUpperCase() || ''}
											</option>
										))}
									</select>
								</div>
							</div>
							<InputArea
								required
								label='Descripción'
								name='decription'
								value={descripcion}
								onChange={(e) => setDescripcion(e.target.value)}
							/>

							<div className='flex flex-col items-start justify-between gap-3 md:items-center md:flex-row'>
								<button
									type='submit'
									disabled={loadingCreate}
									className={`${
										loadingCreate ? 'opacity-50' : 'opacity-100'
									} p-2 text-xs text-white uppercase duration-300 ease-in-out border-2 rounded-full bg-garden-option1 md:px-10 md:py-4 md:text-base hover:border-garden-option1 hover:bg-white hover:text-garden-option1`}>
									Enviar
								</button>
								<p className='text-green-500'>{mensaje ? 'Información enviada Correctamente' : ''}</p>
							</div>
						</form>
					</div>
				</div>
				<div className='pt-10 pb-5 mb-6 mg:mb-0 lg:p-0 w-full lg:w-1/2 h-[530px] sm:h-[830px] relative sm:mt-10 lg:mt-0 p-10 '>
					<Image src='/imgs/nosotros/header/04_COTIZA_CON_NOSOTROS.jpg' alt='manos' loading='lazy' objectFit='cover' layout='fill' />
				</div>
			</div>
		</Container>
	)
}

export default Contactanos
