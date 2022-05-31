import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useCarritoContext } from '../../../context/carrito/CarritoState'
interface IProps {
  id: number,
  img: string
  title: string
  firtsPrice: number
  price: number
  categoty1: string
  categoty2: string
  rebaja: boolean
  amount: number
  openModal: () => void
}

const CardProducto = ({
  id,
  img,
  title,
  firtsPrice,
  price,
  categoty1,
  categoty2,
  rebaja,
  amount,
  openModal
}: IProps) => {

  const { agregarCarrito } = useCarritoContext()
  const router = useRouter()
  return (
    <div className='w-full lg:w-[280px] border-2 rounded hover:shadow-2xl hover:-translate-y-2 ease-in-out duration-700 '>
      <div
        onClick={() => router.push(`/tienda/${img}`)}
        className='border-b-2 cursor-pointer relative'
      >
        <Image
          loading='lazy'
          src={`/imgs/productos/${img}`}
          width={540}
          height={540}
          alt='blogs'
        />
        {rebaja && (
          <div className='absolute top-4 right-4 w-16 h-16 bg-primary-300 rounded-full text-white flex justify-center items-center'>
            Sale!
          </div>
        )}
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
        <p
          onClick={() => router.push(`/tienda/${img}`)}
          className='text-gray-900 text-3xl  font-bold ease-in-out duration-300 hover:text-primary-300 cursor-pointer'
        >
          {title}
        </p>
        <div className='flex gap-3 mt-5'>
          {price < firtsPrice && (
            <p className='text-gray-300 text-xl font-black line-through'>
              S/. {firtsPrice.toFixed(2)}
            </p>
          )}

          <p className='text-gray-900 text-xl font-black '>S./ {price.toFixed(2)}</p>
        </div>

        <button className='w-full py-2 border-primary-300 border-2 hover:bg-primary-300 ease-in-out duration-300 text-primary-300 hover:text-white font-bold text-sm mt-20'
          onClick={() => {
            agregarCarrito({
              id,
              img,
              title,
              firtsPrice,
              price,
              categoty1,
              categoty2,
              rebaja,
              amount
            });
            openModal()
          }


          }>
          AGREGAR AL CARRITO
        </button>
      </div>
    </div >
  )
}

export default CardProducto
