import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

interface IProps {
  img: string

  subtitle: string
}

const CardBlogsRelacionados = ({ img, subtitle }: IProps) => {
  const router = useRouter()
  return (
    <div className='flex gap-3 border-b-2 border-b-gray-200 py-3'>
      <Image
        onClick={() => router.push(`/blogs/${img}`)}
        loading='lazy'
        className='cursor-pointer'
        src={`/imgs/blogs/${img}`}
        width={75}
        height={75}
        alt='blogs'
      />
      <div className='flex flex-1 justify-center items-center'>
        <p
          onClick={() => router.push(`/blogs/${img}`)}
          className='text-gray-900 text-2xl font-bold  ease-in-out duration-300 hover:text-primary-300 cursor-pointer leading-5'
        >
          {subtitle.slice(0, 26)}...
        </p>
      </div>
    </div>
  )
}

export default CardBlogsRelacionados
