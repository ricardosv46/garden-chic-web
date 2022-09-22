import { useRouter } from 'next/router'
import React from 'react'
import IconCheck from '../../../public/icons/IconCheck'

const CheckPago = () => {
	const navigate = useRouter()
	return (
		<div className='flex flex-col items-center justify-center gap-10 py-5 text-garden-option1'>
			<p className='max-w-lg text-xl font-bold text-center'>
				Se completo el pago exitosamente En breve, nuestro equipo de ventas se comunicará contigo para coordinar la entrega de tu pedido.
				Muchas gracias
			</p>
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
