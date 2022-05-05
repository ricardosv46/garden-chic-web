import React from 'react'
import style from './index.module.css'
const Menu = () => {
	return (
		<nav
			className={`${style.header} w-full px-20 py-3 
            text-white flex items-center `}
		>
			<p className='relative text-3xl font-bold font-mono'>Garden Chic</p>
			<ul className='  flex relative'>
				<li className='p-7 cursor-pointer '>Inicio</li>
				<li className='p-7 cursor-pointer'>Nosotros</li>
				<li className='p-7 cursor-pointer'>Servicios</li>
				<li className='p-7 cursor-pointer'>Galeria</li>
				<li className='p-7 cursor-pointer'>Reseñas</li>
				<li className='p-7 cursor-pointer'>Contactos</li>
			</ul>
		</nav>
	)
}

export default Menu
