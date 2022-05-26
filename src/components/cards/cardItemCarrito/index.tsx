import Image from 'next/image'
import React from 'react'
import IconDelete from '../../../../public/icons/IconDelete'
import IconMinus from '../../../../public/icons/IconMinus'
import IconPlus from '../../../../public/icons/IconPlus'

interface CardItemCarritoProps {
  title: string
  price: number
  img: string
  firtsPrice: number

}
const CardItemCarrito = ({ title, price, img, firtsPrice }: CardItemCarritoProps) => {
  return (
    <div className="flex justify-between mt-5">
      <div className="flex gap-x-3">
        <div className="border">
          <Image
            src={`/imgs/productos/${img}`}
            alt="imagen"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="">
            <p className="font-bold text-primary-800 text-xl">{title}</p>
            <div className="flex gap-x-3 mt-1">
              <p className='text-gray-300 text-sm  line-through'>
                S/. {firtsPrice.toFixed(2)}
              </p>

              <p className="text-black text-sm">S/ {price.toFixed(2)}</p>
            </div>

          </div>


          <div className="flex  gap-x-2 ">
            <button className='bg-gray-200 px-2 py-1 rounded '>
              <IconMinus width={10} height={10} />
            </button>
            <p className="text-black">1</p>
            <button className='bg-gray-200 px-2 py-1 rounded '>
              <IconPlus width={10} height={10} />
            </button>
          </div>
        </div>

      </div>

      <div className="">
        <IconDelete height={16} width={16} fill="red" />
      </div>

    </div>
  )
}

export default CardItemCarrito