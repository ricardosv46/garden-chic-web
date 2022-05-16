import React from 'react'
import Image from 'next/image'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '../../components/container'

const NuestrosClientes = () => {
  return (
    <Container className='p-10  py-36'>
      <div className="flex items-center gap-x-4 mb-10">
        <hr className="w-[90%] h-[1px] border border-black  "></hr>

        <h2 className="text-2xl lg:text-5xl text-center font-normal text-primary-800 w-full ">
          Nuestros Clientes
        </h2>
        <hr className="w-[90%] h-[1px] border border-black"></hr>
      </div>
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
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
            navigation: false
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 10
          },
        }}
        modules={[Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-5 text-primary-600">
            <Image
              src='/imgs/carrouselNuestrosClientes/img1.svg'
              alt="manos"
              width={350}
              height={350}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-5 text-primary-600">
            <Image
              src='/imgs/carrouselNuestrosClientes/img2.svg'
              alt="manos"
              width={350}
              height={350}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-5 text-primary-600">
            <Image
              src='/imgs/carrouselNuestrosClientes/img3.svg'
              alt="manos"
              width={350}
              height={350}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-5 text-primary-600">
            <Image
              src='/imgs/carrouselNuestrosClientes/img4.svg'
              alt="manos"
              width={350}
              height={350}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-5 text-primary-600">
            <Image
              src='/imgs/carrouselNuestrosClientes/img5.svg'
              alt="manos"
              width={350}
              height={350}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-5 text-primary-600">
            <Image
              src='/imgs/carrouselNuestrosClientes/img6.svg'
              alt="manos"
              width={350}
              height={350}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-5 text-primary-600">
            <Image
              src='/imgs/carrouselNuestrosClientes/img7.svg'
              alt="manos"
              width={350}
              height={350}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>

  )
}

export default NuestrosClientes