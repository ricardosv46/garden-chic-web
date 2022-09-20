import { useRouter } from 'next/router'
import React from 'react'
import IconCheck from '../../../public/icons/IconCheck'

const CheckPago = () => {
	const navigate = useRouter()
	return (
		<div className='flex justify-center flex-col items-center text-garden-option1 gap-10 py-5'>
			<p className='text-center font-bold text-xl'>Secompleto el pago exitosamente</p>
			<div className='flex justify-center mt-4'>
				<IconCheck width={100} height={100} className='text-current' />
			</div>
			<div className='flex flex-col gap-5'>
				<button
					onClick={() => navigate.push('/')}
					className='bg-garden-option1 text-white border-2 px-10 py-2.5 rounded-full font-semibold uppercase duration-300 ease-in-out hover:border-garden-option1  hover:bg-white hover:text-garden-option1'>
					Ir a Inicio
				</button>
				<button
					onClick={() => navigate.push('/tienda')}
					className='bg-white text-garden-option1 border-2 px-10 py-2.5 rounded-full font-semibold uppercase duration-300 ease-in-out border-garden-option1  hover:bg-garden-option1 hover:text-white'>
					Seguir Comprando
				</button>
			</div>
		</div>
	)
}

export default CheckPago
