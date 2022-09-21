import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Autoplay, EffectFade, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import Modal from '.'
import IconArrowLeft from '../../../public/icons/IconArrowLeft'
import IconArrowRight from '../../../public/icons/IconArrowRight'
import IconDelete from '../../../public/icons/IconDelete'
import { Imagen } from '../../generated/graphql'

interface Props {
	isOpen: boolean
	onClose: () => void
	data: Imagen[]
}

const ModalProduct = ({ isOpen, onClose, data }: Props) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} className='w-[90%] sm:w-[600px]  flex  rounded-xl shadow-lg z-10'>
			{isOpen && (
				<>
					<button onClick={onClose} className='absolute z-10 top-5 right-5'>
						<IconDelete height={25} width={25} fill='white' />
					</button>

					<div className='relative w-full h-full bg-white'>
						<Swiper
							loop={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: true
							}}
							slidesPerView={1}
							centeredSlides={true}
							spaceBetween={50}
							pagination={{
								clickable: true
							}}
							navigation={{ prevEl: '.prev', nextEl: '.next' }}
							modules={[Autoplay, Navigation]}
							className='mySwiper'>
							{data?.map((item, index) => (
								<SwiperSlide key={index} className='flex'>
									<Image src={item.url!} loading='lazy' width={800} height={800} alt='productos' />
								</SwiperSlide>
							))}
						</Swiper>
						<button className=' absolute top-[45%] -left-7 sm:-left-10 z-10 prev'>
							<IconArrowLeft height={35} width={35} fill='white' />
						</button>
						<button className=' absolute top-[45%] -right-7 sm:-right-10 z-10 next'>
							<IconArrowRight height={35} width={35} fill='white' />
						</button>
					</div>
				</>
			)}
		</Modal>
	)
}

export default ModalProduct
