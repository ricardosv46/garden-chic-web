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
    <div className='flex gap-3 border-b-2 border-b-gray-200 py-3'>
      <Image
        onClick={() => router.push(`/blogs/${slug}`)}
        loading='lazy'
        className='cursor-pointer'
        src={imagenPrincipal?.url!}
        width={75}
        height={75}
        alt='blogs'
      />
      <div className='flex flex-1 justify-center items-center'>
        <p
          onClick={() => router.push(`/blogs/${slug}`)}
          className='text-gray-900 text-lg font-bold  ease-in-out duration-300 hover:text-primary-300 cursor-pointer leading-5'
        >
          {titulo}
        </p>
      </div>
    </div>
  )
}

export default CardBlogsRelacionados
