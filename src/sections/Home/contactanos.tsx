import React, { FormEvent, useState } from 'react'
import Image from 'next/image'
import Container from '../../components/container'
import InputFloat from '../../components/inputs/InputFloat'
import InputArea from '../../components/inputs/InputArea'
import useForm from '../../hooks/useForm'

const Contactanos = () => {
  const { nombre, email, celular, onChange } = useForm({
    nombre: '',
    email: '',
    celular: ''
  })

  const [mensaje, setMensaje] = useState('')

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Container bgColor=''>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 px-0 lg:px-10 h-auto '>
          <h2 className='text-primary-300 font-bold text-4xl xl:text-6xl  pt-20'>
            Obtenga un estimado gratis
          </h2>
          <div>
            <h3 className='text-primary-300 font-bold text-xl mt-5 lg:mt-14'>
              Tu información
            </h3>
            <form onSubmit={handleClick} className='flex flex-col gap-y-5 mt-6'>
              <div className='flex flex-col lg:flex-row gap-5 '>
                <InputFloat
                  className='lg:flex-1'
                  label='Nombre'
                  name='nombre'
                  value={nombre}
                  onChange={onChange}
                />
                <InputFloat
                  className='lg:flex-1'
                  label='E-mail'
                  name='email'
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className='flex flex-col lg:flex-row  gap-5 '>
                <InputFloat
                  className='lg:flex-1'
                  label='Celular'
                  name='celular'
                  value={celular}
                  onChange={onChange}
                />
                <select
                  className='lg:flex-1 border-2 border-slate-200 rounded h-12 px-3 focus:border-primary-300 focus:outline-primary-300 text-primary-300 font-semibold'
                  name='service'
                  defaultValue='0'
                >
                  <option value='0'>Seleccione una opcion</option>
                  <option value='1'>Select 1</option>
                  <option value='2'>Select 2</option>
                  <option value='3'>Select 3</option>
                </select>
              </div>
              <InputArea
                label='Decripción'
                name='decription'
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />

              <div>
                <button
                  type='submit'
                  className='bg-primary-300 text-white border-2 px-10 py-4 rounded-full uppercase duration-300 ease-in-out hover:border-primary-300  hover:bg-white hover:text-primary-300'
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='pt-10 pb-5 lg:p-0  w-full lg:w-1/2  '>
          <div className='w-full lg:w-[650px]  lg:h-[900px] '>
            <Image
              layout='responsive'
              loading='lazy'
              src='/imgs/formulario.jpg'
              alt='manos'
              width={975}
              height={1350}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Contactanos
