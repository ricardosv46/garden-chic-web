import { Show } from '@components/show'
import Spinner from '@components/Sppinner'
import { useBancos } from '@services/useBancos'
import Image from 'next/image'
import IconArrowLeft from 'public/icons/IconArrowLeft'
import IconCheckRadio from 'public/icons/IconCheckRadio'
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'

interface Props {
  setShow: React.Dispatch<React.SetStateAction<string>>
  setMediopago: React.Dispatch<React.SetStateAction<string>>
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  tipoPago: string
}

const TipoPagoBancos = ({ onChange, tipoPago, setShow, setMediopago }: Props) => {
  const { db: dbBancos, loading } = useBancos()

  const [disabled, setDisabled] = useState(true)

  return (
    <form
      onSubmit={() => {
        setShow('TransferenciaId')
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }}
      className='relative pt-0 lg:p-10'>
      <button
        onClick={() => {
          setShow('formulario')
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}
        className='absolute top-0 lg:left-20 p-1.5 text-white rounded-full bg-garden-option1'>
        <IconArrowLeft />
      </button>
      <h2 className='text-4xl font-bold text-center text-garden-option1'>Tranferencia Bancaria</h2>

      <h2 className='mt-10 text-xl font-bold lg:pl-20 '>Escoge el tipo de banco con el que deseas transferir</h2>
      <Show
        condition={!loading}
        isDefault={
          <div className='flex justify-center py-20'>
            <Spinner />
          </div>
        }>
        <div className='grid grid-cols-1 gap-5 mt-10 lg:justify-center lg:px-36 lg:grid-cols-2 xl:grid-cols-3'>
          {dbBancos.map((item) => (
            <div key={item.bancoId} className='relative'>
              <input
                className='hidden group peer'
                type='radio'
                required
                name='tipoPago'
                value={item.bancoId!}
                id={item.bancoId!}
                onChange={(e) => {
                  onChange(e)
                  setMediopago(item.titulo!)
                  setDisabled(false)
                }}
              />

              <label
                className=' p-3.5 text-sm px-5 gap-1   flex items-center flex-col-reverse justify-between   font-medium transition-colors border border-gray-300 rounded-lg shadow-sm cursor-pointer peer-checked:border-garden-option1 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500'
                htmlFor={item.bancoId!}>
                <div className='flex flex-col gap-3'>
                  <span className='font-bold'> {item.titulo!} </span>
                </div>

                <div className='w-24 h-24'>
                  <Image loading='lazy' src={item.imagenPrincipal?.url!} width={300} height={300} objectFit='contain' alt='imagen' />
                </div>
              </label>

              <IconCheckRadio className='absolute w-5 h-5 opacity-0 text-garden-option1 top-2 right-2 peer-checked:opacity-100' />
            </div>
          ))}
        </div>
      </Show>

      <div className='pt-10'>
        <div className='flex justify-center pt-5'>
          <button
            disabled={disabled}
            type='submit'
            className={`${
              disabled ? 'bg-garden-option1 opacity-50' : 'bg-garden-option1 hover:border-garden-option1 hover:bg-white hover:text-garden-option1'
            } px-10 py-4 text-white uppercase duration-300 ease-in-out border-2 rounded-full `}>
            Continuar
          </button>
        </div>
      </div>
    </form>
  )
}

export default TipoPagoBancos
