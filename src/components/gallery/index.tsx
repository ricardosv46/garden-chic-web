import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Imagenes, Maybe } from '../../generated/graphql'

interface IProps {
  data: Array<Maybe<Imagenes>>
  onClick: () => void
}

const Gallery = ({ data, onClick }: IProps) => {
  const [image, setImage] = useState<string>('')
  useEffect(() => {
    setImage(data[0]?.url!)
  }, [])
  const [hover, setHover] = useState(false)

  return (
    <>
      <div className='border-2 border-gray-100 relative'>
        {image && (
          <Image
            src={image}
            loading='lazy'
            width={1000}
            height={1000}
            alt='productos'
          />
        )}

        <button
          onClick={onClick}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className='w-9 h-9 cursor-pointer rounded-full bg-primary-300 absolute top-5 right-5 flex items-center justify-center hover:bg-white border-2 border-primary-300 ease-in-out duration-300'
        >
          <svg
            stroke='currentColor'
            fill={hover ? '#7E94C1' : '#fff'}
            viewBox='0 0 512 512'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
          </svg>
        </button>
      </div>
      <div className='flex  gap-5 mt-5'>
        {data.map((item) => (
          <div
            key={item?.url}
            onClick={() => setImage(item?.url!)}
            className='border-2 border-gray-100 flex-1 flex'
          >
            <Image
              src={item?.url!}
              loading='lazy'
              className='cursor-pointer'
              width={130}
              height={130}
              alt='blogs'
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Gallery
