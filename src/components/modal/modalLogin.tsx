import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'

import Modal from '.'
import useForm from '../../hooks/useForm'
// import { useLogin } from '../../services/useLogin'
import { useUsuario } from '../../services/useUsuario'
import FormLogin from '../authForm/formLogin'
import FormRegister from '../authForm/formRegister'
import { signIn, useSession } from 'next-auth/react'
interface Props {
  isOpen: boolean
  onClose: () => void
}

const ModalLogin = ({ isOpen, onClose }: Props) => {
  const [tipoForm, setTipoForm] = useState('ingresar')
  const { createUsuario, loadingCreate } = useUsuario()
  const [errorMessage, setErrorMessage] = useState('')
  const { status, data } = useSession()
  console.log('data', data)
  // const { loginUsuario } = useLogin()
  const [error, setError] = useState(false)
  const { nombres, apellidos, email, password, onChange, resetForm } = useForm({
    nombres: '',
    apellidos: '',
    email: '',
    password: ''
  })

  const asignarFormulario = () => {
    let component = null

    if (tipoForm === 'ingresar') {
      component = <FormLogin email={email} password={password} onChange={onChange} />
    } else if (tipoForm === 'registrate') {
      component = <FormRegister nombre={nombres} apellido={apellidos} email={email} password={password} onChange={onChange} />
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
    }
  }

  const textoBtnCambiarForm = () => {
    const textos = []

    if (tipoForm === 'ingresar') {
      textos[0] = 'Si no tienes una cuenta '
      textos[1] = 'regístrate aquí'
      textos[2] = 'Iniciar sesión'
      textos[3] = 'Ingresar'
    } else if (tipoForm === 'registrate') {
      textos[0] = 'Si ya tienes una cuenta '
      textos[1] = 'ingrese por aquí'
      textos[2] = 'Regístrate'
      textos[3] = 'Regístrate'
    }

    return textos
  }

  const handleRegister = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (tipoForm === 'registrate')
      createUsuario({ apellidos, email, nombres, password }).then((res) => {
        if (res.ok) {
          setTipoForm('registrate')
        } else {
          setError(true)
          setErrorMessage(res.error)
          setTimeout(() => {
            setError(false)
            setErrorMessage('')
          }, 5000)
        }
      })
    if (tipoForm === 'ingresar') {
      await signIn('credentials', {
        redirect: false,
        email,
        password
      }).then((res) => {
        console.log('res', res)
        if (res?.ok) {
          onClose()
        }
      })

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
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} className='w-[95%] md:w-[800px] md:h-[540px] flex rounded-xl shadow-lg overflow-hidden'>
      {isOpen && (
        <>
          <div className='w-full hidden md:block lg:w-1/2'>
            <Image src='/imgs/contactos/formulario.jpg' alt='Torero' width={500} height={800} objectPosition='center' objectFit='cover' />
          </div>
          <div className=' w-full lg:w-1/2 p-6 bg-white'>
            <div className='flex justify-center mb-5'>
              <Image objectFit='scale-down' className='cursor-pointer filter-logo' src='/imgs/logos/logo-horizontal.svg' width={200} height={80} alt='logo' />
            </div>
            <form onSubmit={handleRegister}>
              {asignarFormulario()}

              <div className='mt-7 flex justify-end'>
                <button type='submit' className=' bg-primary-600 text-white cursor-pointer w-full  py-3 rounded-lg'>
                  {textoBtnCambiarForm()[3]}
                </button>
              </div>
            </form>
            {error && (
              <p className='text-center font-bold text-red-500 mt-3'>
                {tipoForm === 'registrate' && errorMessage}
                {tipoForm === 'ingresar' && 'Correo o contraseña incorrecta'}
              </p>
            )}

            <div className={`${error ? 'mt-2' : 'mt-7'}`}>
              <p className='text-base text-gray-400'>
                {textoBtnCambiarForm()[0]}
                <span className='text-primary-600 cursor-pointer' onClick={cambiarFormulario}>
                  {textoBtnCambiarForm()[1]}
                </span>{' '}
              </p>
            </div>
          </div>
        </>
      )}
    </Modal>
  )
}

export default ModalLogin
