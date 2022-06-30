import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CategoriaBlog, Imagenes } from '../../../generated/graphql'
import Compartir from '../../compartir'
interface IProps {
  imagenPrincipal: Imagenes
  CategoriaBlog: CategoriaBlog
  titulo: string | null | undefined
  descripcionCorta: string | null | undefined
  slug: string | null | undefined
}

const CarBlog = ({
  imagenPrincipal,
  titulo,
  CategoriaBlog,
  descripcionCorta,
  slug
}: IProps) => {
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
          className='text-gray-900 text-md font-semibold hover:text-primary-300 ease-in-out duration-300 cursor-pointer'
        >
          {CategoriaBlog.titulo}
        </p>
        <div className='bg-primary-300 w-10 h-0.5 my-4'></div>
        <p
          onClick={() => router.push(`/blogs/${slug}`)}
          className='text-gray-900 text-3xl font-black hover:text-primary-300 ease-in-out duration-300 cursor-pointer'
        >
          {titulo}
        </p>
        <p className='text-gray-900 text-md font-normal mt-5'>
          {descripcionCorta}
        </p>
        <div className='mt-5'>
          <Compartir ruta={slug!} title={titulo!} />
        </div>
      </div>
    </div>
  )
}

export default CarBlog
