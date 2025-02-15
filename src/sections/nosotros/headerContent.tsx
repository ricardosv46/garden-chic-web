import React from 'react'
import Container from '../../components/container'

const HeaderContent = () => {
	return (
		<Container>
			<div className='flex flex-col md:flex-row w-full py-10 md:py-16'>
				<div className='flex flex-auto text-2xl md:text-3xl leading-none md:w-1/2 md:px-5 md:my-auto m-2 font-garden_bold text-garden-option1 '>
					Garden Chic ofrece un servicio completo y especializado para el mantenimiento y creación del jardín de tus sueños.
				</div>
				<div className='flex flex-col gap-4 mt-5 text-base md:text-xl md:w-1/2 md:px-5 m-2 font-light text-justify tracking-tighter font-garden_regular text-garden-option3'>
					<span>Contamos con un equipo especializado y con experiencia exclusivamente al sector de paisajismo.</span>
					<span>
						Realizamos proyectos como implementación de jardines verticales, techos verdes, sistemas de riego, mantenimiento de áreas
						verdes, comercialización de productos, entre otros servicios del rubro, además contamos con un vivero propio.
					</span>
				</div>
			</div>
		</Container>
	)
}

export default HeaderContent
