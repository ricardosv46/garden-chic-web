import React, { useEffect, useState } from 'react'
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
  const [isMobile, setIsMobile] = useState(false)

  const updateDimensions = () => window.innerWidth < 1024 ? setIsMobile(true) : setIsMobile(false)

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Container className='flex justify-center items-center h-56 ' bgColor='bg-primary-100 bg-opacity-50'>
      {/*       <h2 className="text-4xl lg:text-5xl text-center font-normal mb-24 text-primary-800 ">
        Servicios
      </h2>
 */}
      <Swiper
        loop={isMobile}
        grabCursor={isMobile}
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
              <div className='flex flex-col items-center gap-y-5 text-primary-600'
              // onMouseOver={() => setIsHover(true)}
              // onMouseOut={() => setIsHover(false)}
              >
                {/* <Hover2 condition={ishover} /> */}
                {obj.Icon1}
                <p className='text-xl font-garden_medium'>{obj.label || null}</p>
              </div>
            </SwiperSlide>


          ))

        }
      </Swiper>
    </Container >
  )
}

export default Servicios
