import Image from 'next/image'
import React from 'react'
interface IProps {
  img: string
  title: string
  subtitle: string
  description: string
}

const CarBlog = ({ img, title, subtitle, description }: IProps) => {
  return (
    <div className='w-full lg:w-[370px] border-2 rounded-lg overflow-hidden pb-10'>
      <Image src={`/imgs/blogs/${img}`} width={740} height={460} />
      <div className='p-5'>
        <p className='text-gray-900 text-md font-semibold hover:text-primary-300 ease-in-out duration-300 cursor-pointer'>
          {title}
        </p>
        <div className='bg-primary-300 w-10 h-0.5 my-4'></div>
        <p className='text-gray-900 text-3xl font-black hover:text-primary-300 ease-in-out duration-300 cursor-pointer'>
          {subtitle}
        </p>
        <p className='text-gray-900 text-md font-normal mt-5'>{description}</p>
      </div>
    </div>
  )
}

export default CarBlog
