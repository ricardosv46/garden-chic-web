import React, {useState} from 'react'
import BtnBurger from '../../btnBurger'
import style from '../index.module.css'
const MenuMobile = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div>
			<nav className='flex justify-between py-6 px-4 items-center relative'>
				<p className='text-3xl  font-bold font-mono text-primary-600'>
					Garden Chic
				</p>
				<BtnBurger isOpen={isOpen} setIsOpen={setIsOpen} />
				<ul
					className={`${style['menu-mobile']} ${
						isOpen && style['menu-mobile-active']
					} text-center`}
				>
					<li className='cursor-pointer text-primary-600 py-2 font-semibold'>
						Inicio
					</li>
					<li className='cursor-pointer text-primary-600 py-2 font-semibold'>
						Nosotros
					</li>
					<li className='cursor-pointer text-primary-600 py-2 font-semibold'>
						Servicios
					</li>
					<li className='cursor-pointer text-primary-600 py-2 font-semibold'>
						Galeria
					</li>
					<li className='cursor-pointer text-primary-600 py-2 font-semibold'>
						Reseña
					</li>
					<li className='cursor-pointer text-primary-600 py-2 font-semibold'>
						Contactos
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default MenuMobile
