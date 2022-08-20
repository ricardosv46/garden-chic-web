import React from 'react'
import Image from 'next/image'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '../../components/container'

const logos = [
  '/imgs/carrouselNuestrosClientes/img1.svg',
  '/imgs/carrouselNuestrosClientes/img2.svg',
  '/imgs/carrouselNuestrosClientes/img3.svg',
  '/imgs/carrouselNuestrosClientes/img4.svg',
  '/imgs/carrouselNuestrosClientes/img5.svg',
  '/imgs/carrouselNuestrosClientes/img6.svg',
  '/imgs/carrouselNuestrosClientes/img7.svg'
]
const pathname = '/imgs/carrouselNuestrosClientes/png/'
const typeImg = '.png'
interface IProps {
  data: string[]
}

const NuestrosClientes = ({ data }: IProps) => {
  const resolvePath = (path: string) => pathname + path + typeImg
  return (
    <Container className='p-10 py-2 lg:py-28 '>
      <div className='flex items-center gap-x-4 mb-10'>
        <hr className='w-[90%] h-[1px] border border-black  '></hr>

        <h2 className='text-2xl lg:text-5xl text-center font-normal text-primary-800 w-full '>
          Ellos confían en nosotros
        </h2>
        <hr className='w-[90%] h-[1px] border border-black'></hr>
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
          }
        }}
        modules={[Navigation]}
        className='mySwiper'
      >
        {data.map((item) => (
          <SwiperSlide key={item} className='lg:mx-6'>
            <div
              className={`flex flex-col items-center gap-y-5  transition-all duration-500 grayscale hover:grayscale-0 `}
            >
              <Image src={resolvePath(item)} alt={item} width={350} height={350} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default NuestrosClientes
