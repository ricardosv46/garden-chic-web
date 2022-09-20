import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CategoriaBlog, Imagen } from '../../../generated/graphql'
import Compartir from '../../compartir'
interface IProps {
	imagenPrincipal: Imagen
	CategoriaBlog: CategoriaBlog
	titulo: string | null | undefined
	descripcionCorta: string | null | undefined
	slug: string | null | undefined
}

const CarBlog = ({ imagenPrincipal, titulo, CategoriaBlog, descripcionCorta, slug }: IProps) => {
	const router = useRouter()
	return (
		<div className='w-full lg:w-[370px] border-2 rounded-lg overflow-hidden pb-2'>
			<Image
				loading='lazy'
				className='cursor-pointer'
				src={imagenPrincipal?.url!}
				width={740}
				height={460}
				alt='blogs'
				onClick={() => router.push(`/blogs/${slug}`)}
			/>
			<div className='p-5'>
				<p
					onClick={() => router.push(`/blogs/${slug}`)}
					className='font-semibold text-garden-option3 duration-300 ease-in-out cursor-pointer text-md hover:text-garden-option1'>
					{CategoriaBlog?.titulo}
				</p>
				<div className='bg-garden-option1 w-10 h-0.5 my-4'></div>
				<p
					onClick={() => router.push(`/blogs/${slug}`)}
					className='text-3xl font-black text-garden-option3 duration-300 ease-in-out cursor-pointer hover:text-garden-option1'>
					{titulo}
				</p>
				<p className='mt-5 font-normal text-garden-option3 text-md'>{descripcionCorta}</p>
				<div className='mt-5'>
					<Compartir ruta={slug!} title={titulo!} />
				</div>
			</div>
		</div>
	)
}

export default CarBlog
