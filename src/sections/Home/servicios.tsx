import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IconImpermeablizacion, IconJardinesVerticales, IconMantenimiento, IconPaisajismo, IconRiegoTexnificado, IconTechosVerdes, IconVivero } from 'public/icons/servicios/linear'
import Container from '../../components/container'
import { Hover } from './components/hover'
import { IconImpermeabilizacionColor, IconJardinesVerticalesColor, IconMantenimientoColor, IconPaisajismoColor, IconRiegoTecnificadoColor, IconTechosVerdesColor, IconViverosColor } from 'public/icons/servicios/color'
import { IIconos } from 'src/data/dataGeneral'
import { Show } from '@components/show'
interface IProps {
  data: IIconos[] | { Icon1: string, label: string }[],
  loop?: boolean
}
const pathname = '/icons/png/'
const typeImg = '.png'

const Servicios = ({ data, loop = true }: IProps) => {

  const resolvePath = (path: string) => pathname + path + typeImg

  const ResolveIconString = ({ name }: { name: string }) => <Image src={resolvePath(name)}
    alt={name}
    className="object-contain "
    width={80}
    height={80}
  />
  return (
    <Container className='flex justify-center items-center h-56 ' bgColor='bg-primary-100 bg-opacity-50'>
      {/*       <h2 className="text-4xl lg:text-5xl text-center font-normal mb-24 text-primary-800 ">
        Servicios
      </h2>
 */}
      <Swiper
        loop={loop}
        grabCursor={loop}
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
            spaceBetween: 10
          }
        }}
        // modules={[Navigation]}
        className='mySwiper'
      >
        {
          data.map((obj, i) => (
            <SwiperSlide key={i} >
              {/* obj.icon1 es jsx.element*/}
              <Show condition={typeof obj.Icon1 !== 'string'}>
                <div className='flex flex-col items-center gap-y-5 text-primary-600 h-32'>
                  {obj.Icon1}
                  <p className='text-xl font-garden_medium'>{obj.label || null}</p>
                </div>
              </Show>
              {/* obj.icon1 es string o src*/}
              <Show condition={typeof obj.Icon1 === 'string'}>
                <div className='flex flex-col items-center gap-y-5 text-primary-600 h-36 ' >
                  <ResolveIconString name={String(obj.Icon1)} />
                  <p className='text-xl font-garden_medium'>{obj.label || null}</p>
                </div>
              </Show>
            </SwiperSlide>


          ))

        }
      </Swiper>
    </Container >
  )
}

export default Servicios
