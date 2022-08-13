import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IconImpermeablizacion, IconJardinesVerticales, IconMantenimiento, IconPaisajismo, IconRiegoTexnificado, IconTechosVerdes, IconVivero } from 'public/icons/servicios/linear'
import Container from '../../components/container'
import { Hover } from './components/hover'
import { IconImpermeabilizacionColor, IconJardinesVerticalesColor, IconMantenimientoColor, IconPaisajismoColor, IconRiegoTecnificadoColor, IconTechosVerdesColor, IconViverosColor } from 'public/icons/servicios/color'
import { IIconos } from 'src/data/dataGeneral'
import { Show } from '@components/show'
interface IProps {
  data: IIconos[]
}

const Servicios = ({ data }: IProps) => {
  return (
    <Container className='p-10  py-20' bgColor='bg-primary-100 bg-opacity-50'>
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
              spaceBetween: 10
            }
          }}
          modules={[Navigation]}
          className='mySwiper'
        >


          {
            data.map((obj, i) => (
              <SwiperSlide key={i} >
                <Show condition={typeof obj.Icon2 !== 'undefined'}

                  isDefault={<div className='flex flex-col items-center gap-y-5 text-primary-600'>
                    {obj.Icon1}
                  </div>}
                >
                  <Hover
                    // Icon1={<IconPaisajismoColor />}
                    // Icon2={<IconPaisajismo />}
                    // label="Paisajismo"
                    {...obj}
                  />
                </Show>

              </SwiperSlide>


            ))

          }
          {/*  */}

          {/* <SwiperSlide>
            <Hover
              Icon1={<IconPaisajismoColor />}
              Icon2={<IconPaisajismo />}
              label="Paisajismo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Hover
              Icon1={<IconJardinesVerticalesColor />}
              Icon2={<IconJardinesVerticales />}
              label="Jardines Verticales"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Hover
              Icon1={<IconMantenimientoColor />}
              Icon2={<IconMantenimiento />}
              label="Mantenimiento"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Hover
              Icon1={<IconImpermeabilizacionColor />}
              Icon2={<IconImpermeablizacion />}
              label='Impermeabilización'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Hover
              Icon1={<IconRiegoTecnificadoColor />}
              Icon2={<IconRiegoTexnificado />}
              label='Riego Tecnificado'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Hover
              Icon1={<IconTechosVerdesColor />}
              Icon2={<IconTechosVerdes />}
              label='Techos Verdes'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Hover
              Icon1={<IconViverosColor />}
              Icon2={<IconVivero />}
              label='Vivero'
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </Container >
  )
}

export default Servicios
