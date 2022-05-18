import Image from 'next/image'
import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '../../components/container'

const Servicios = () => {
  return (
    <Container className='p-10  py-36' bgColor='bg-primary-100'>
      {/*       <h2 className="text-4xl lg:text-5xl text-center font-normal mb-24 text-primary-800 ">
        Servicios
      </h2>
 */}
      <div className=''>
        <Swiper
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false
          }}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            380: {
              slidesPerView: 1,
              spaceBetween: 5
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
              navigation: false
            }
          }}
          modules={[Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='flex flex-col items-center gap-y-5 text-primary-600'>
              <Image
                src='/imgs/carrouselHome/manos.png'
                alt='manos'
                width={50}
                height={50}
              />
              <p className='font-semibold'>Lawr Moving</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center gap-y-5 text-primary-600'>
              <Image
                src='/imgs/carrouselHome/manos.png'
                alt='manos'
                width={50}
                height={50}
              />
              <p className='font-semibold'>Lawr Moving</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center gap-y-5 text-primary-600'>
              <Image
                src='/imgs/carrouselHome/manos.png'
                alt='manos'
                width={50}
                height={50}
              />
              <p className='font-semibold'>Lawr Moving</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center gap-y-5 text-primary-600'>
              <Image
                src='/imgs/carrouselHome/manos.png'
                alt='manos'
                width={50}
                height={50}
              />
              <p className='font-semibold'>Lawr Moving</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center gap-y-5 text-primary-600'>
              <Image
                src='/imgs/carrouselHome/manos.png'
                alt='manos'
                width={50}
                height={50}
              />
              <p className='font-semibold'>Lawr Moving</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  )
}

export default Servicios
