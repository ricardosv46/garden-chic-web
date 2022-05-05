import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import required modules
import {Navigation, Autoplay} from 'swiper'

import Item1 from './items_banner/item1.jsx'
const Banner = () => {
	return (
		<div>
			<Swiper
				style={{
					height: '100%'
				}}
				loop={true}
				grabCursor={true}
				autoplay={{
					delay: 5500,
					disableOnInteraction: false
				}}
				slidesPerView={1}
				spaceBetween={30}
				modules={[Autoplay, Navigation]}
				className='mySwiper'
			>
				<SwiperSlide>
					<Item1 />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Banner
