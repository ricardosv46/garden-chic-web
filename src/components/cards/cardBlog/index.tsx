import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Compartir from '../../compartir'
interface IProps {
  img: string
  title: string
  subtitle: string
  description: string
}

const CarBlog = ({ img, title, subtitle, description }: IProps) => {
  const router = useRouter()
  return (
    <div className='w-full lg:w-[370px] border-2 rounded-lg overflow-hidden pb-2'>
      <Link href={`/blogs/${img}`}
        as={`/blogs/${img}`}
      >
        <Image
          loading='lazy'
          className='cursor-pointer'
          src={`/imgs/blogs/${img}`}
          width={740}
          height={460}
          alt='blogs'
        />
      </Link>


      <div className='p-5'>
        <Link href={`/blogs/${img}`}>
          <p
            className='text-gray-900 text-md font-semibold hover:text-primary-300 ease-in-out duration-300 cursor-pointer'
          >
            {title}
          </p>
        </Link>
        <div className='bg-primary-300 w-10 h-0.5 my-4'></div>
        <Link href={`/blogs/${img}`}>
          <p
            onClick={() => router.push(`/blogs/${img}`)}
            className='text-gray-900 text-3xl font-black hover:text-primary-300 ease-in-out duration-300 cursor-pointer'
          >
            {subtitle}
          </p>
        </Link>
        <p className='text-gray-900 text-md font-normal mt-5'>{description}</p>
        <div className='mt-5'>
          <Compartir ruta={img} />
        </div>
      </div>
    </div>
  )
}

export default CarBlog
