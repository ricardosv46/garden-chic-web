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
        link={`https://garden-chic-web.vercel.app/blogs/${blog.slug}`}
        description={blog?.descripcionCorta!}
        img={blog?.imagenPrincipal?.url!}
        url={`https://garden-chic-web.vercel.app/blogs/${blog.slug}`}
        keywords='jardines, jardin, plantas'
        domain={`https://garden-chic-web.vercel.app/blogs/${blog.slug}`}
      />
      <Container className='lg:flex py-10 gap-10'>
        <div className='w-full lg:w-9/12'>
          <h1 className='text-gray-900 text-md font-semibold hover:text-primary-300 ease-in-out duration-300 cursor-pointer'>
            {blog?.CategoriaBlog?.titulo}
          </h1>
          <div className='bg-primary-300 w-5 h-0.5 my-2'></div>
          <p className='text-gray-900 text-5xl font-black   py-5'>
            {blog?.titulo}
          </p>
          {/* <p className='text-gray-900 text-md font-semibold py-5 mb-5'>
            January 10, 2018
            <span className='text-primary-300'>by BoldThemes</span>
          </p> */}
          <Image
            loading='lazy'
            className='cursor-pointer'
            src={blog?.imagenPrincipal?.url!}
            width={1110}
            height={690}
            alt='blogs'
          />
          <p className='text-gray-900 text-md font-medium leading-8  mt-16 lg:pr-20'>
            {blog?.descripcionLarga}
          </p>
          <div className='mt-5 flex justify-end lg:pr-20 py-10 lg:py-0'>
            <Compartir ruta={blog?.slug!} />
          </div>
        </div>

        <div className='w-full lg:w-3/12 px-3'>
          <InputSearch placeholder='Buscar' onClick={()=>console.log('buscando publicaciones recientes')} />
          <p className='text-gray-900 text-2xl font-bold py-10'>
            Publicaciones Recientes
          </p>
          {blogs.map((item, i) => {
            if (i < 5) {
              return (
                <CardBlogsRelacionados
                  titulo={item.titulo!}
                  slug={item.slug!}
                  imagenPrincipal={item.imagenPrincipal!}
                  key={i}
                />
              )
            } else {
              return null
            }
          })}
          <p className='text-gray-900 text-2xl font-bold py-10'>Categorias</p>
          {categorias.map((item) => (
            <div key={item.slug} className='border-b-2 border-b-gray-200 py-5'>
              <p className='text-gray-700 text-xl font-semibold hover:text-primary-300 ease-in-out duration-300 cursor-pointer'>
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
  console.log(res)
  const data = res?.GetBlogSlug

  return {
    props: {
      blog: data
    }
  }
}
