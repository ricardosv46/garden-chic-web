/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface IProps {
  img: string
  titulo: string | null
  precioReal: number | null
  precioOferta: number | null
  slug: string | null
}
const CardProductosRelacionados = ({
  img,
  titulo,
  precioReal,
  precioOferta,
  slug
}: IProps) => {
  const [image, setImage] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    setImage(img)
  }, [])
  return (
    <div className='flex gap-3 border-b-2 border-b-gray-200 py-3'>
      {image && (
        <Image
          onClick={() => router.push(`/tienda/${slug}`)}
          loading='lazy'
          className='cursor-pointer'
          src={image}
          width={75}
          height={75}
          alt='blogs'
        />
      )}
      <div className='flex flex-col gap-1 flex-1 justify-center '>
        <p
          onClick={() => router.push(`/tienda/${slug}`)}
          className='text-gray-900 text-xl font-bold  ease-in-out duration-300 hover:text-primary-300 cursor-pointer '
        >
          {titulo}
        </p>
        <span className='w-5 h-1 bg-primary-300'></span>

        <div className='flex gap-3'>
          {precioOferta! < precioReal! && (
            <p className='text-gray-300 text-md font-black line-through'>
              S/. {precioReal!.toFixed(2)}
            </p>
          )}

          <p className='text-gray-900 text-md font-black'>
            {/* S/. {precioOferta!.toFixed(2)} */}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardProductosRelacionados
