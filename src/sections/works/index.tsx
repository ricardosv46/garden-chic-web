import Image from 'next/image'
import React from 'react'
import Container from '../../components/container'

const Works = () => {
  return (
    <Container bgColor='bg-[#FBF9F6]' className='p-10'>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-primary-800 text-5xl'>Works</h1>
        <ol className='flex flex-col lg:flex-row gap-3 mt-8'>
          <li className='text-primary-800 text-md font-bold'>All</li>
          <li className='text-primary-800 text-md font-bold'>Events</li>
          <li className='text-primary-800 text-md font-bold'>Gardens</li>
          <li className='text-primary-800 text-md font-bold'>Interiors</li>
          <li className='text-primary-800 text-md font-bold'>Maintance</li>
          <li className='text-primary-800 text-md font-bold'>Urban</li>
        </ol>
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center mt-10 '>
        <div>
          <Image
            width={400}
            height={307}
            src='/imgs/works/work1.jpg'
            className='rounded-lg '
          />
        </div>
        <div>
          <Image
            width={400}
            height={307}
            src='/imgs/works/work2.jpg'
            className='rounded-lg '
          />
        </div>
        <div>
          <Image
            width={400}
            height={307}
            src='/imgs/works/work3.jpg'
            className='rounded-lg '
          />
        </div>
        <div>
          <Image
            width={400}
            height={307}
            src='/imgs/works/work4.jpg'
            className='rounded-lg '
          />
        </div>
        <div>
          <Image
            width={400}
            height={307}
            src='/imgs/works/work5.jpg'
            className='rounded-lg '
          />
        </div>
        <div>
          <Image
            width={400}
            height={307}
            src='/imgs/works/work6.jpg'
            className='rounded-lg '
          />
        </div>
      </div>
      <button>fff</button>
    </Container>
  )
}

export default Works
