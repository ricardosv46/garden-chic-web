import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import { IBanner } from 'src/data/dataGeneral'
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Item, ItemPrincipal } from './items_banner'
import { Show } from '@components/show'

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
        modules={[Navigation, Pagination, Autoplay]}
        className='mySwiper'
      >

        {data.map((obj, i) => (
          <SwiperSlide key={i}>
            <Show condition={!obj.itemPrincipal}
              isDefault={<ItemPrincipal data={obj} />}
            >
              <Item data={obj} />
            </Show>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner
