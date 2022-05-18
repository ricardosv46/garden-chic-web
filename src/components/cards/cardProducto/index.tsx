import Image from 'next/image'
import React from 'react'
interface IProps {
  img: string
  title: string
  firtsPrice?: string
  price: string
  categoty1: string
  categoty2: string
}

const CardProducto = ({
  img,
  title,
  firtsPrice = '',
  price,
  categoty1,
  categoty2
}: IProps) => {
  return (
    <div className='w-full lg:w-[280px] border-2 rounded hover:shadow-2xl hover:-translate-y-3 ease-in-out duration-500'>
      <div className='border-b-2 cursor-pointer'>
        <Image
          loading='lazy'
          src={`/imgs/productos/${img}`}
          width={540}
          height={540}
          alt='blogs'
        />
      </div>
      <div className='p-6'>
        <div className='flex gap-3 items-center'>
          <p className='text-gray-900 text-md font-semibold ease-in-out duration-300 hover:text-primary-300 cursor-pointer'>
            {categoty1}
          </p>
          <span className='w-1 h-1 bg-primary-300 rounded-full'></span>
          <p className='text-gray-900 text-md font-semibold ease-in-out duration-300 hover:text-primary-300 cursor-pointer'>
            {categoty2}
          </p>
        </div>
        <div className='w-5 h-0.5 bg-primary-300 my-5'></div>
        <p className='text-gray-900 text-3xl  font-bold ease-in-out duration-300 hover:text-primary-300 cursor-pointer'>
          {title}
        </p>
        <div className='flex gap-3 mt-5'>
          {firtsPrice.length > 0 && (
            <p className='text-gray-300 text-xl font-black line-through'>
              {firtsPrice}
            </p>
          )}

          <p className='text-gray-900 text-xl font-black '>{price}</p>
        </div>

        <button className='w-full py-2 border-primary-300 border-2 hover:bg-primary-300 ease-in-out duration-300 text-primary-300 hover:text-white font-bold text-sm mt-20'>
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  )
}

export default CardProducto
