import React from 'react'
import ButtonBanner from '../../buttons/buttonBanner'
import style from '../index.module.css'
const Item1 = () => {
	return (
		<div
			className={`${style['item-1']} text-white flex md:pr-20  justify-center md:justify-end  items-center`}
		>
			<div className=' relative h-80 flex flex-col items-center md:items-start justify-center '>
				<h4 className='font-bold text-3xl md:text-7xl md:font-extralight'>
					MANTENIMIENTO
				</h4>
				<p className='mb-10 mt-5 text-sm md:text-2xl'>
					SOMOS EXPERTOS EN EL CUIDADO DE TU JARDIN
				</p>
				<ButtonBanner title='SABER MÁS' />
			</div>
		</div>
	)
}

export default Item1
