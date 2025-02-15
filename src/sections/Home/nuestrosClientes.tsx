import React from 'react'
import Image from 'next/image'
import { Navigation, Autoplay } from 'swiper'
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
    <Container className='p-10 py-2 lg:py-20 '>
      <div className='flex items-center gap-x-4 mb-10'>
        <hr className='w-[10%] md:w-[20%] lg:w-[40%] h-[1px] border border-black  '></hr>

        <h2 className='text-2xl lg:text-3xl text-center font-garden_medium text-garden-option1 w-[60%] '>
          Ellos confían en nosotros
        </h2>
        <hr className='w-[10%]  md:w-[20%] lg:w-[40%] h-[1px] border border-black'></hr>
      </div>
      <Swiper
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
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
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }}
        modules={[Navigation, Autoplay]}
        className='mySwiper'
      >
        {data.map((item) => (
          <SwiperSlide key={item} >
            <div
             // className={`flex flex-col items-center mx-auto  transition-all duration-500 grayscale hover:grayscale-0 aspect-auto h-24 w-full border-2 md:h-32 md:w-40  relative`}
              className={`flex flex-col items-center mx-6  transition-all duration-500 grayscale hover:grayscale-0  h-auto aspect-video  relative`}
           
           >
              <Image src={resolvePath(item)}
                alt={item}
                className="absolute"
                layout="fill"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default NuestrosClientes
