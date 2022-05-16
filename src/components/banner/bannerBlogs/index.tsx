import React from 'react'
import style from './banner.module.css'
const BannerBlogs = () => {
  return (
    <div className={`${style['banner-blogs']} `}>
      <div className='w-full h-full flex flex-col justify-center items-center text-white relative z-10 '>
        <p className='text-xl'>READ OUR</p>
        <span className='bg-primary-300 px-5 py-0.5 my-7'></span>
        <p className='text-7xl font-bold'>Latest News</p>
      </div>
    </div>
  )
}

export default BannerBlogs
