import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles

// import required modules
import { Navigation, Pagination } from 'swiper'
import { Item1, Item2, Item3 } from './items_banner'

interface IProps {
  style?: any
}

const style = {
  '--swiper-navigation-color': '#fff',
  '--swiper-pagination-color': '#fff'
}
const Banner = () => {
  return (
    <div className='relative z-10 '>
      <Swiper
        // style={style}z
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true
        }}
        navigation={true}
        pagination={{
          clickable: true
        }}
        modules={[Navigation, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Item1 />
        </SwiperSlide>
        <SwiperSlide>
          <Item2 />
        </SwiperSlide>
        <SwiperSlide>
          <Item3 />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
