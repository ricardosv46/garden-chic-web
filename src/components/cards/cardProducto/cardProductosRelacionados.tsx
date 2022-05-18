import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

interface IProps {
  img: string
  title: string
  firtsPrice?: string
  price: string
}
const CardProductosRelacionados = ({
  img,
  title,
  firtsPrice = '',
  price
}: IProps) => {
  const router = useRouter()
  return (
    <div className='flex gap-3 border-b-2 border-b-gray-200 py-3'>
      <Image
        onClick={() => router.push(`/tienda/${img}`)}
        loading='lazy'
        className='cursor-pointer'
        src={`/imgs/productos/${img}`}
        width={75}
        height={75}
        alt='blogs'
      />
      <div className='flex flex-col gap-1 flex-1 justify-center '>
        <p
          onClick={() => router.push(`/tienda/${img}`)}
          className='text-gray-900 text-xl font-bold  ease-in-out duration-300 hover:text-primary-300 cursor-pointer '
        >
          {title}
        </p>
        <span className='w-5 h-1 bg-primary-300'></span>
        <div className='flex gap-3'>
          {firtsPrice.length > 0 && (
            <p className='text-gray-300 text-md font-black line-through'>
              {firtsPrice}
            </p>
          )}
          <p className='text-gray-900 text-md font-black'>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default CardProductosRelacionados
