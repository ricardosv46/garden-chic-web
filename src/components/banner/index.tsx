import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import required modules
import {Navigation, Pagination} from 'swiper'

import Item2 from './items_banner/item2.jsx'
import Item1 from './items_banner/item1.jsx'
import Item3 from './items_banner/item3.jsx'

interface IProps {
	style?: any
}

const style = {
	'--swiper-navigation-color': '#fff',
	'--swiper-pagination-color': '#fff'
}
const Banner = () => {
	return (
		<div className='relative z-10'>
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
