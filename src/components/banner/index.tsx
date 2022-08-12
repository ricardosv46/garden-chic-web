import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import { IBanner } from 'src/data/dataGeneral'
// import required modules
import { Navigation, Pagination } from 'swiper'
import { Item1, Item2, Item3 } from './items_banner'
import { Item } from './items_banner/item'

interface IProps {
  data: IBanner[]
}

const style = {
  '--swiper-navigation-color': '#fff',
  '--swiper-pagination-color': '#fff'
}
const Banner = ({ data }: IProps) => {
  return (
    <div className='relative z-10 '>
      <Swiper
        // style={style}
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
        {data.map((obj, i) => (
          <SwiperSlide key={i}>
            <Item data={obj} />
          </SwiperSlide>))}
        {/* <SwiperSlide>
          <Item1 />
        </SwiperSlide>
        <SwiperSlide>
          <Item2 />
        </SwiperSlide>
        <SwiperSlide>
          <Item3 />
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default Banner
