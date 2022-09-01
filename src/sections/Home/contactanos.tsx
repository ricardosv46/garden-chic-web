import React, { FormEvent, useState } from 'react'
import Image from 'next/image'
import Container from '../../components/container'
import InputFloat from '../../components/inputs/InputFloat'
import InputArea from '../../components/inputs/InputArea'
import useForm from '../../hooks/useForm'
interface IProps {
  data: {
    tittle: string,
    OptionForm: string[]
  }
}

const Contactanos = ({ data }: IProps) => {
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
      <div className='flex flex-col lg:flex-row lg:py-10 '>
        <div className='w-full lg:w-1/2 px-0 lg:px-10 h-auto mb-6 sm:mb-0'>
          <h2 className='text-primary-300 font-garden_bold text-xl md:text-2xl lg:text-4xl  pt-20'>
            {data.tittle || ''}
          </h2>
          <div>
            <h3 className='text-primary-300 font-garden_medium text-base lg:text-xl mt-5 lg:mt-14'>
              Tú información
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
                    <option value=''>Selección de servicios</option>
                    {data.OptionForm.map((obj, i) => <option value={i + 1} key={i}>{obj.toUpperCase() || ''}</option>)}
                  </select>
                </div>
              </div>
              <InputArea
                label='Descripción'
                name='decription'
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />

              <div>
                <button
                  type='submit'
                  className='bg-primary-300 text-white border-2 p-2 md:px-10 md:py-4 rounded-full text-xs md:text-base uppercase duration-300 ease-in-out hover:border-primary-300  hover:bg-white hover:text-primary-300'
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='pt-10 pb-5 lg:p-0 w-full lg:w-1/2 h-[530px] sm:h-[830px] relative sm:mt-10 lg:mt-0 p-10 '>
          <Image
            src='/imgs/nosotros/header/04_COTIZA_CON_NOSOTROS.jpg'
            alt='manos'
            loading='lazy'
            objectFit='cover'
            layout='fill'
          />
        </div>
    
      </div>
    </Container>
  )
}

export default Contactanos
