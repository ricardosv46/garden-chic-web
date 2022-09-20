import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { DataGeneral } from 'src/data/dataGeneral'
import Container from '../../components/container'
import { servicios } from '../../data/dataServicios'
import Contactanos from '../../sections/Home/contactanos'
import { Tittle } from '@components/common'
const Servicios = () => {
	const router = useRouter()

	return (
		<>
			<Container className='py-10'>
				<Tittle tittle='Servicios' />
				<div className='pt-10 pb-10 '>
					{servicios.map((item, i) => (
						<div
							key={i}
							className={`flex flex-auto flex-col py-7 lg:py-0 gap-8 lg:gap-0 ${
								item.position === 'l' ? 'lg:flex-row' : 'lg:flex-row-reverse'
							}`}>
							<div className='flex h-[512px] lg:w-1/2 bg-garden-option1'>
								<Image
									loading='lazy'
									objectFit='cover'
									width={1024}
									height={512}
									src={`/imgs/servicios/${item.img}`}
									alt='imagen proyecto'
								/>
							</div>

							<div className='flex flex-col items-center justify-center flex-auto gap-10 px-10 lg:w-1/2 xl:px-28'>
								<h2 className='text-2xl text-center md:text-4xl text-garden-option1 font-garden_bold'>{item.tittleResumido}</h2>
								<p className='text-base text-center md:text-lg text-garden-option3 font-garden_medium '>{item.description || ''}</p>
								<button
									onClick={() => router.push(`/servicios/${item.url}`)}
									className='px-4 py-1 uppercase duration-300 ease-in-out bg-white border-2 rounded-full text-garden-option1 border-garden-option1 md:px-10 md:py-3 font-garden_medium hover:text-white hover:bg-garden-option1'>
									Más
								</button>
							</div>
						</div>
					))}
				</div>
				<Contactanos data={DataGeneral.Servicios.Contactanos} />
			</Container>
		</>
	)
}

export default Servicios
