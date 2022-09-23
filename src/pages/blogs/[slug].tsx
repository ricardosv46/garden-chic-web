import request from 'graphql-request'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import CardBlogsRelacionados from '../../components/cards/cardBlog/cardBlogsRelacionados'
import Compartir from '../../components/compartir'
import Container from '../../components/container'
import InputSearch from '../../components/inputs/InputSearch'
import OpenGraph from '../../components/openGraph'

import { Blog } from '../../generated/graphql'
import { GET_SLUG_BLOG, URL } from '../../graphql/ssr/ssr'
import { useBlogs } from '../../services/useBlogs'
import { useCategoriaBlogs } from '../../services/useCategoriaBlogs'

interface PropsStatic {
	blog: {
		title: string
		subtitle: string
		description: string
		img: string
	}
}
interface IProps {
	slug: string
}

interface IDataBlog {
	params: IProps
}

interface Blogs {
	blog: Blog
}

const DetalleBlog = ({ blog }: Blogs) => {
	const { db: categorias } = useCategoriaBlogs()
	const { db: blogs, loading } = useBlogs()

	return (
		<>
			<OpenGraph
				title={blog?.titulo!}
				link={`https://gardenchicperu.com/blogs/${blog.slug}`}
				description={blog?.descripcionCorta!}
				img={blog?.imagenPrincipal?.url!}
				url={`https://gardenchicperu.com/blogs/${blog.slug}`}
				keywords='jardines, jardin, plantas'
				domain={`https://gardenchicperu.com/blogs/${blog.slug}`}
			/>
			<Container className='gap-10 py-10 lg:flex'>
				<div className='w-full lg:w-9/12'>
					<h1 className='font-semibold duration-300 ease-in-out cursor-pointer text-garden-option3 text-md hover:text-garden-option1'>
						{blog?.CategoriaBlog?.titulo}
					</h1>
					<div className='bg-garden-option1 w-5 h-0.5 my-2'></div>
					<p className='py-5 text-5xl font-black text-garden-option3'>{blog?.titulo}</p>
					{/* <p className='py-5 mb-5 font-semibold text-garden-option3 text-md'>
            January 10, 2018
            <span className='text-garden-option1'>by BoldThemes</span>
          </p> */}
					<Image loading='lazy' className='cursor-pointer' src={blog?.imagenSecundaria?.url!} width={1110} height={690} alt='blogs' />
					<div
						className='mt-16 font-medium leading-8 text-garden-option3 text-md lg:pr-20'
						dangerouslySetInnerHTML={{ __html: blog?.descripcionLarga! }}>
						{/* {descripcionLarga} */}
					</div>
					<div className='flex justify-end py-10 mt-5 lg:pr-20 lg:py-0'>
						<Compartir ruta={blog?.slug!} />
					</div>
				</div>

				<div className='w-full px-3 lg:w-3/12'>
					<InputSearch placeholder='Buscar' onClick={() => {}} />
					<p className='py-10 text-2xl font-bold text-garden-option3'>Publicaciones Recientes</p>
					{blogs.map((item, i) => {
						if (i < 5) {
							return <CardBlogsRelacionados titulo={item.titulo!} slug={item.slug!} imagenPrincipal={item.imagenPrincipal!} key={i} />
						} else {
							return null
						}
					})}
					<p className='py-10 text-2xl font-bold text-garden-option3'>Categorias</p>
					{categorias.map((item) => (
						<div key={item.slug} className='py-5 border-b-2 border-b-gray-200'>
							<p className='text-xl font-semibold duration-300 ease-in-out cursor-pointer text-garden-option3 hover:text-garden-option1'>
								{item.titulo}
							</p>
						</div>
					))}
				</div>
			</Container>
		</>
	)
}

export default DetalleBlog

export async function getServerSideProps({ params }: any) {
	const res = await request(URL, GET_SLUG_BLOG, {
		slug: params.slug
	})

	const data = res?.GetBlogSlug

	return {
		props: {
			blog: data
		}
	}
}
