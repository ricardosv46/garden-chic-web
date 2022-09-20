import { Show } from '@components/show'
import Spinner from '@components/Sppinner'
import { useBancos } from '@services/useBancos'
import { useBancosId } from '@services/useBancosId'
import { useEfectivoMovilId } from '@services/useEfectivoMovilId'
import Image from 'next/image'
import IconArrowLeft from 'public/icons/IconArrowLeft'
import IconCheckRadio from 'public/icons/IconCheckRadio'
import React, { ChangeEvent, useState } from 'react'
import useForm from 'src/hooks/useForm'

interface Props {
	setShow: React.Dispatch<React.SetStateAction<string>>
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
	tipoPago: string
	total: number
}

const FormEfectivo = ({ setShow, tipoPago, total }: Props) => {
	const [imagePrevios, setImagePrevios] = useState(null)
	const [copy, setCopy] = useState(false)
	const { db, loading } = useEfectivoMovilId({ efectivoMovilId: Number(tipoPago) })
	console.log('db', { db, total })

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

	const copyTextToClipboard = async (text: string) => {
		if ('clipboard' in navigator) {
			return await navigator.clipboard.writeText(text)
		} else {
			return document.execCommand('copy', true, text)
		}
	}

	return (
		<div className='relative pt-0 lg:p-10'>
			<button onClick={() => setShow('Efectivo')} className='absolute top-0 lg:left-20 p-1.5 text-white rounded-full bg-garden-option1'>
				<IconArrowLeft />
			</button>
			<h2 className='text-4xl font-bold text-center text-garden-option1'>{db.titulo}</h2>

			<h2 className='mt-10 text-xl font-bold text-center '>Escane el código QR o page al siguiente número de celular.</h2>

			<Show
				condition={!loading}
				isDefault={
					<div className='flex justify-center py-20'>
						<Spinner />
					</div>
				}>
				<div className='mx-auto my-5 w-60 h-60'>
					<Image loading='lazy' src={db.imagenQr?.url!} width={500} height={500} objectFit='contain' alt='imagen' />
				</div>
			</Show>
			<div className='relative flex justify-center '>
				<div className='flex items-center justify-between w-64 px-2.5 py-4 border border-gray-400 border-dashed '>
					<p className='text-sm font-semibold '>{db.numeroCelular}</p>
					<button
						className='p-1 px-2 font-bold text-white bg-garden-option1'
						onClick={() => {
							copyTextToClipboard(db.numeroCelular!)
							setCopy(true)
							setTimeout(() => {
								setCopy(false)
							}, 3000)
						}}>
						Copiar
					</button>
				</div>
				{copy && (
					<div className='absolute flex justify-center -bottom-7 '>
						<p className='text-center text-green-500'>Copiado!</p>
					</div>
				)}
			</div>

			<div className='pt-10'>
				<p className='flex justify-center text-sm font-bold text-center '>Monto a pagar con {db.titulo}</p>

				<p className='text-sm font-bold text-center '>S/. {total?.toFixed(2)}</p>
				<div className='flex flex-col justify-center pt-5'>
					{/* <div className='relative flex flex-col items-center justify-center w-full max-w-lg gap-1 p-5 mx-auto mt-5 text-lg font-bold text-center text-garden-option3 border border-gray-400 border-dashed rounded h-72 relativ'>
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
					</div> */}
				</div>
				<div className='flex justify-center pt-5'>
					<button
						onClick={() => setShow('EfectivoIdUpload')}
						type='button'
						className='px-10 py-4 text-white uppercase duration-300 ease-in-out border-2 rounded-full bg-garden-option1 hover:border-garden-option1 hover:bg-white hover:text-garden-option1'>
						Subir Comprobante
					</button>
				</div>
			</div>
		</div>
	)
}

export default FormEfectivo
