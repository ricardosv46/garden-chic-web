import Image from 'next/image'
import React from 'react'
import BannerBlogs from '../../components/banner/bannerBlogs'
import CarBlog from '../../components/cards/cardBlog'
import Container from '../../components/container'
import { dataBlogs } from '../../data/dataBlogs'
import { useBlogs } from '../../services/useBlogs'
import { useCategoriaBlogs } from '../../services/useCategoriaBlogs'

const blogs = ['All', 'Decorations', 'Design', 'Flowers', 'Gardening', 'Gardens', 'Landscaping', 'Plants']

const Blogs = () => {
	const { db: blogs, loading } = useBlogs()
	const { db: categorias } = useCategoriaBlogs()

	console.log({ blogs })

	return (
		<>
			<BannerBlogs />
			<Container>
				{loading ? (
					<div className='flex justify-center py-10'>
						<svg
							className='w-8 h-8 animate-spin text-primary-300'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 24 24'>
							<circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth={4}></circle>
							<path
								className='opacity-75'
								// fill='currentColor'
								d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
						</svg>
					</div>
				) : (
					<div className='flex flex-col items-center justify-center '>
						<ol className='flex-col hidden gap-3 mt-24 lg:flex-row lg:flex'>
							{categorias.map((item) => (
								<li
									key={item?.slug}
									className='py-1 text-lg font-semibold text-gray-900 duration-300 ease-in-out border-b-2 border-white hover:border-primary-300 hover:cursor-pointer'>
									{item?.titulo}
								</li>
							))}
						</ol>
						<div className='grid grid-cols-1 gap-5 mt-16 md:grid-cols-2 lg:grid-cols-3 justify-items-center '>
							{blogs.map((item, index) => (
								<CarBlog
									CategoriaBlog={item?.CategoriaBlog!}
									imagenPrincipal={item?.imagenPrincipal!}
									descripcionCorta={item?.descripcionCorta}
									slug={item?.slug}
									titulo={item?.titulo}
									key={index}
								/>
							))}
						</div>
						<div className='mt-10'></div>
					</div>
				)}
			</Container>
		</>
	)
}

export default Blogs
