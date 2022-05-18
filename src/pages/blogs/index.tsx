import Image from 'next/image'
import React from 'react'
import BannerBlogs from '../../components/banner/bannerBlogs'
import CarBlog from '../../components/cards/cardBlog'
import Container from '../../components/container'
import { dataBlogs } from '../../data/dataBlogs'

const blogs = [
  'All',
  'Decorations',
  'Design',
  'Flowers',
  'Gardening',
  'Gardens',
  'Landscaping',
  'Plants'
]

const Blogs = () => {
  return (
    <>
      <BannerBlogs />
      <Container>
        <div className='flex flex-col items-center justify-center '>
          <ol className='hidden flex-col lg:flex-row gap-3 mt-24 lg:flex'>
            {blogs.map((item) => (
              <li
                key={item}
                className='text-gray-900 text-lg font-semibold border-b-2 ease-in-out duration-300 border-white hover:border-primary-300 hover:cursor-pointer py-1'
              >
                {item}
              </li>
            ))}
          </ol>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center mt-16 '>
            {dataBlogs.map((item, index) => (
              <CarBlog {...item} key={index} />
            ))}
          </div>
          <div className='mt-10'></div>
        </div>
      </Container>
    </>
  )
}

export default Blogs
