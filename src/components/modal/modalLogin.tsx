import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import Swal from 'sweetalert2'
import Modal from '.'
import useForm from '../../hooks/useForm'
// import { useLogin } from '../../services/useLogin'
import { useUsuario } from '../../services/useUsuario'
import FormLogin from '../authForm/formLogin'
import FormRegister from '../authForm/formRegister'
import { signIn, useSession } from 'next-auth/react'
import { IsEmail } from '@utils'
import FormRecoveryPassword from '@components/authForm/formRecoveryPassword'
import { useRecoveryPassword } from '@services/useRecoveryPassword'
import Spinner from '@components/Sppinner'
interface Props {
	isOpen: boolean
	onClose: () => void
}
interface IerrorForm {
	email: string[]
}

const ModalLogin = ({ isOpen, onClose }: Props) => {
	const [tipoForm, setTipoForm] = useState('ingresar')
	const { createUsuario, loadingCreate } = useUsuario()
	const { recoveryPassword, loadingRecovery } = useRecoveryPassword()
	const [errorForm, setErrorForm] = useState<IerrorForm>({
		email: []
	})
	const [messageRecovery, setMessageRecovery] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const { status, data } = useSession() as { status: string; data: { user: any } }

	const [error, setError] = useState(false)
	const { nombres, apellidos, email, password, onChange, resetForm } = useForm({
		nombres: '',
		apellidos: '',
		email: '',
		password: ''
	})

	const handleOnchange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { target } = e
		const { name, value } = target
		switch (name) {
			case 'email':
				setErrorForm({ ...errorForm, email: IsEmail(target.value) })
		}
		onChange(e)
	}
	const asignarFormulario = () => {
		let component = null

		if (tipoForm === 'ingresar') {
			component = <FormLogin email={email} password={password} onChange={handleOnchange} errorForm={errorForm} />
		} else if (tipoForm === 'registrate') {
			component = (
				<FormRegister
					nombre={nombres}
					apellido={apellidos}
					email={email}
					password={password}
					onChange={handleOnchange}
					errorForm={errorForm}
				/>
			)
		} else if (tipoForm === 'recuperar') {
			component = <FormRecoveryPassword email={email} onChange={onChange} />
		}

		return component
	}

	const cambiarFormulario = () => {
		if (tipoForm === 'ingresar') {
			resetForm()
			setTipoForm('registrate')
		} else if (tipoForm === 'registrate') {
			resetForm()
			setTipoForm('ingresar')
		} else if (tipoForm === 'recuperar') {
			resetForm()
			setTipoForm('ingresar')
		}
	}

	const textoBtnCambiarForm = () => {
		const textos = []

		if (tipoForm === 'ingresar') {
			textos[0] = 'Si no tienes una cuenta '
			textos[1] = 'regístrate aquí'
			textos[2] = 'Iniciar sesión'
			textos[3] = 'Ingresar'
			textos[4] = '¿Olvidaste tu contraseña?'
		} else if (tipoForm === 'registrate') {
			textos[0] = 'Si ya tienes una cuenta '
			textos[1] = 'ingrese por aquí'
			textos[2] = 'Regístrate'
			textos[3] = 'Regístrate'
		} else if (tipoForm === 'recuperar') {
			textos[0] = 'Si ya tienes una cuenta '
			textos[1] = 'ingrese por aquí'
			textos[2] = 'Iniciar sesión'
			textos[3] = 'Recuperar Contraseña'
		}

		return textos
	}

	const handleRegister = async (e: ChangeEvent<HTMLFormElement>) => {
		// const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
		// if (regEx.test(email))
		e.preventDefault()
		if (tipoForm === 'registrate') {
			await Swal.fire({
				title: '¿Seguro quieres registrarte?',
				icon: 'question',
				showCancelButton: true,
				cancelButtonText: 'No',
				confirmButtonText: 'Si!'
			}).then(async (res) => {
				// if (IsEmail(email)) {
				if (res.isConfirmed) {
					createUsuario({ apellidos, email, nombres, password }).then((res) => {
						if (res.ok) {
							Swal.fire({ title: 'Registro con exito', icon: 'success' })
							setTipoForm('ingresar')
						} else {
							setError(true)
							setErrorMessage(res.error)
							Swal.fire({ title: res.error, icon: 'error' })
							setTimeout(() => {
								setError(false)
								setErrorMessage('')
							}, 5000)
						}
					})
				} else {
					// }
					// else {
					setTimeout(() => {
						setError(false)
						setErrorMessage('')
					}, 5000)
				}
			})
		}

		if (tipoForm === 'ingresar') {
			await signIn('credentials', {
				redirect: false,
				email,
				password
			})
				.then((res) => {
					// if (IsEmail(email)) {

					if (res?.ok) {
						onClose()
					} else {
						setError(true)
						setErrorMessage(res?.error || '')
						setTimeout(() => {
							setError(false)
							setErrorMessage('')
						}, 5000)
					}
				})
				.catch((err) => {})
		}

		if (tipoForm === 'recuperar') {
			const res = await recoveryPassword({ email: email })
			if (res?.ok) {
				setMessageRecovery(res?.data!)
				resetForm()
				setTimeout(() => {
					setErrorMessage('')
					setMessageRecovery('')
					setTipoForm('ingresar')
				}, 5000)
			} else {
				setError(true)
				setErrorMessage(res?.error || '')
				resetForm()
				setTimeout(() => {
					setError(false)
					setErrorMessage('')
				}, 5000)
			}
		}

		// loginUsuario({ email, password }).then((res) => {
		//   if (res?.ok) {
		//     onClose()
		//   } else {
		//     setError(true)

		//     setTimeout(() => {
		//       setError(false)
		//     }, 5000)
		//   }
		// })
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} className='w-[95%] md:w-[800px] md:h-[540px] flex rounded-xl shadow-lg overflow-hidden'>
			{isOpen && (
				<>
					<div className='hidden w-full md:block lg:w-1/2'>
						<Image src='/imgs/contactos/formulario.jpg' alt='Torero' width={500} height={800} objectPosition='center' objectFit='cover' />
					</div>
					<div className='w-full p-6 bg-white lg:w-1/2'>
						<div className='flex justify-center mb-5'>
							<Image
								objectFit='scale-down'
								className='cursor-pointer filter-logo'
								src='/imgs/logos/logo-horizontal.svg'
								width={200}
								height={80}
								alt='logo'
							/>
						</div>
						<form onSubmit={handleRegister}>
							{asignarFormulario()}
							{messageRecovery && <p className='mt-5 text-sm text-garden-option1'>{messageRecovery}</p>}
							<div className='flex justify-end mt-7'>
								<button
									type='submit'
									className={`w-full py-3 inline text-white rounded-lg cursor-pointer bg-garden-option1 ${loadingRecovery || loadingCreate ? 'opacity-50' : ''}` }
									disabled={loadingRecovery || loadingCreate}>
										<div className='flex items-center justify-center gap-2 text-center'>{textoBtnCambiarForm()[3] } {loadingRecovery && <Spinner size='sm'/>} {loadingCreate && <Spinner size='sm'/>}</div>
									
								</button>
							</div>
						</form>
						{error && (
							<p className='mt-3 font-bold text-center text-red-500'>
								{tipoForm === 'registrate' && errorMessage}
								{tipoForm === 'ingresar' && errorMessage}
								{tipoForm === 'recuperar' && errorMessage}
							</p>
						)}

						<div className={`${error ? 'mt-2' : 'mt-7'}`}>
							<p className='text-base text-garden-option3'>
								{textoBtnCambiarForm()[0]}
								<span className='cursor-pointer text-garden-option1' onClick={cambiarFormulario}>
									{textoBtnCambiarForm()[1]}
								</span>{' '}
							</p>
							<span className='cursor-pointer text-garden-option1' onClick={() => setTipoForm('recuperar')}>
								{textoBtnCambiarForm()[4]}
							</span>
						</div>
					</div>
				</>
			)}
		</Modal>
	)
}

export default ModalLogin
