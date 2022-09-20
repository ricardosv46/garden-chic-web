import Image from 'next/image'
import IconArrowLeft from 'public/icons/IconArrowLeft'
import React, { ChangeEvent, useState } from 'react'

interface Props {
	setShow: React.Dispatch<React.SetStateAction<string>>
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
	tipoPago: string
}

const FormTransferencia = ({ setShow }: Props) => {
	const [imagePrevios, setImagePrevios] = useState(null)

	const changeImage = (e?: any) => {
		if (e.target.files[0]) {
			const reader = new FileReader()
			reader.readAsDataURL(e.target.files[0])
			reader.onload = (e: any) => {
				e.preventDefault()
				setImagePrevios(e?.target?.result)
			}
		}
	}

	return (
		<div className='relative p-10 pt-0'>
			<button onClick={() => setShow('Transferencia')} className='absolute top-0 left-0 p-2.5 text-white rounded-full bg-primary-300'>
				<IconArrowLeft />
			</button>
			<h2 className='text-4xl font-bold text-center text-primary-300 xl:text-6xl '>Tranferencia Bancaria</h2>

			<div className='pt-10'>
				<p className='flex justify-center text-sm font-bold text-center xl:text-4xl'>Adjunta el boucher</p>
				<div className='flex flex-col justify-center pt-5'>
					<div className='relative flex flex-col items-center justify-center w-full max-w-lg gap-1 p-5 mx-auto mt-5 text-lg font-bold text-center text-gray-400 border border-gray-400 border-dashed rounded h-72 relativ'>
						{!imagePrevios && (
							<>
								<p>Arrastre la imagen o haga click aquí</p>
								<p>Archivos permitidos: .jpg, .jpeg, .png</p>
							</>
						)}

						<input
							className='absolute z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer'
							type='file'
							accept='image/*'
							onChange={(e) => changeImage(e)}
						/>
						{imagePrevios && <Image width={1000} height={1000} objectFit='contain' src={imagePrevios} alt='image' />}
					</div>
				</div>
				<div className='flex justify-center pt-10'>
					<button
						type='button'
						className='px-10 py-4 text-white uppercase duration-300 ease-in-out border-2 rounded-full bg-primary-300 hover:border-primary-300 hover:bg-white hover:text-primary-300'>
						Continuar
					</button>
				</div>
			</div>
		</div>
	)
}

export default FormTransferencia
