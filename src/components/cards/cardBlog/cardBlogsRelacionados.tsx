import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { Imagen } from '../../../generated/graphql'

interface IProps {
	imagenPrincipal: Imagen
	titulo: string
	slug: string
}

const CardBlogsRelacionados = ({ imagenPrincipal, titulo, slug }: IProps) => {
	const router = useRouter()
	return (
		<div className='flex gap-3 py-3 border-b-2 border-b-gray-200'>
			<Image
				onClick={() => router.push(`/blogs/${slug}`)}
				loading='lazy'
				className='cursor-pointer'
				src={imagenPrincipal?.url!}
				width={75}
				height={75}
				alt='blogs'
			/>
			<div className='flex items-center justify-start flex-1'>
				<p
					onClick={() => router.push(`/blogs/${slug}`)}
					className='text-lg font-bold leading-5 text-garden-option3 duration-300 ease-in-out cursor-pointer hover:text-garden-option1'>
					{titulo}
				</p>
			</div>
		</div>
	)
}

export default CardBlogsRelacionados
