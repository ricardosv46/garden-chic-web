import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
	IconImpermeablizacion,
	IconJardinesVerticales,
	IconMantenimiento,
	IconPaisajismo,
	IconRiegoTexnificado,
	IconTechosVerdes,
	IconVivero
} from 'public/icons/servicios/linear'
import Container from '../../components/container'
import { Hover } from './components/hover'
import {
	IconImpermeabilizacionColor,
	IconJardinesVerticalesColor,
	IconMantenimientoColor,
	IconPaisajismoColor,
	IconRiegoTecnificadoColor,
	IconTechosVerdesColor,
	IconViverosColor
} from 'public/icons/servicios/color'
import { IIconos } from 'src/data/dataGeneral'
import { Show } from '@components/show'
interface IProps {
	data: IIconos[] | { Icon1: string; label: string }[]
	loop?: boolean
}

const Servicios = ({ data, loop = true }: IProps) => {
	// const ResolveIconString = ({ name }: { name: string }) => <Image src={resolvePath(name)}
	//   alt={name}
	//   className="object-contain"
	//   layout="fill"
	// />
	return (
		<Container className='flex items-center justify-center h-56 ' bgColor='bg-garden-option2 bg-opacity-50'>
			<Swiper
				loop={loop}
				grabCursor={loop}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
				}}
				slidesPerView={1}
				spaceBetween={0}
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
				modules={[Autoplay, Navigation]}
				className='mySwiper'>
				{data.map((obj, i) => (
					<SwiperSlide key={i}>
						{/* obj.icon1 es jsx.element*
            <Show condition={typeof obj.Icon1 !== "string"}>
              <div className="flex flex-col items-center h-32 gap-y-5 text-garden-option1">
                {obj.Icon1}
                <p className="text-xl font-garden_medium">
                  {obj.label || null}
                </p>
              </div>
            </Show>
            /}
            {/* obj.icon1 es string o src*/}
						<Show condition={typeof obj.Icon1 === 'string'}>
							<div className='relative flex flex-col items-center text-garden-option1 h-36'>
								<div className='relative w-full h-full aspect-square '>
									<Image src={obj.Icon1} alt='image' className='object-contain' layout='fill' />
								</div>
								<p className='text-xl font-garden_medium'>{obj.label || null}</p>
							</div>
						</Show>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	)
}

export default Servicios
