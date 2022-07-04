import { useRouter } from 'next/router'
import React from 'react'
import IconCheck from '../../../public/icons/IconCheck'

const CheckPago = () => {
  const navigate = useRouter()
  return (
    <div className='flex justify-center flex-col items-center text-primary-300 gap-10 py-5'>
      <p className='text-center font-bold text-xl'>
        Secompleto el pago exitosamente
      </p>
      <div className='flex justify-center mt-4'>
        <IconCheck width={100} height={100} className='text-current' />
      </div>
      <div className='flex flex-col gap-5'>
        <button
          onClick={() => navigate.push('/')}
          className='bg-primary-300 text-white border-2 px-10 py-2.5 rounded-full font-semibold uppercase duration-300 ease-in-out hover:border-primary-300  hover:bg-white hover:text-primary-300'
        >
          Ir a Inicio
        </button>
        <button
          onClick={() => navigate.push('/tienda')}
          className='bg-white text-primary-300 border-2 px-10 py-2.5 rounded-full font-semibold uppercase duration-300 ease-in-out border-primary-300  hover:bg-primary-300 hover:text-white'
        >
          Seguir Comprando
        </button>
      </div>
    </div>
  )
}

export default CheckPago
