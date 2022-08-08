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
    <Container>
      <div className='flex flex-col lg:flex-row '>
        <div className='w-full lg:w-1/2 px-0 lg:px-10 h-auto '>
          <h2 className='text-primary-300 font-bold text-4xl xl:text-6xl  pt-20'>
            Obtenga un estimado gratis
          </h2>
          <div>
            <h3 className='text-primary-300 font-bold text-xl mt-5 lg:mt-14'>
              Tu información
            </h3>
            <form
              onSubmit={handleClick}
              className='flex flex-col gap-y-5 mt-6  '
            >
              <div className='flex flex-col lg:flex-row gap-5 '>
                <InputFloat
                  type='text'
                  label='Nombre'
                  name='nombre'
                  value={nombre}
                  onChange={onChange}
                />
                <InputFloat
                  type='email'
                  label='E-mail'
                  name='email'
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className='flex flex-col lg:flex-row  gap-5 '>
                <InputFloat
                  type='text'
                  label='Celular'
                  name='celular'
                  value={celular}
                  onChange={onChange}
                />
                <div className='w-full '>
                  <select
                    className='w-full px-2.5 text-primary-300   py-3.5 text-sm font-semibold border border-gray-300  focus:outline-none focus:ring-0 focus:border-primary-300 peer rounded-md'
                    name='service'
                    defaultValue='0'
                  >
                    <option value='0'>Seleccione una opcion</option>
                    <option value='1'>Select 1</option>
                    <option value='2'>Select 2</option>
                    <option value='3'>Select 3</option>
                  </select>
                </div>
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
        <div className='pt-10 pb-5 lg:p-0  w-full lg:w-1/2 h-[830px]  relative mt-10 lg:mt-0'>
          <Image
            src='/imgs/contactos/formulario.jpg'
            alt='manos'
            loading='lazy'
            objectFit='contain'
            layout='fill'
          />
          {/* <div className='w-full h-auto lg:w-[650px] border-4 lg:h-[830px] overflow-hidden relative'> */}
          {/* <Image
              loading='lazy'
              src='/imgs/contactos/formulario.jpg'
              alt='manos'
              objectFit='cover'
              objectPosition='center'
              width={875}
              height={1350}
            /> */}

          {/* </div> */}
        </div>
        {/* la otra forma de hacer la imagen */}
        {/* <div className='w-full lg:w-1/2'>
          <div
            style={{ backgroundImage: `url('/imgs/contactos/formulario.jpg` }}
            className={`flex-auto mt-5 lg:mt-0 bg-center  bg-cover bg-no-repeat w-full h-[700px] lg:h-[750px] `}
          ></div>
        </div> */}
      </div>
    </Container>
  )
}

export default Contactanos
