import React from 'react'
import ButtonBanner from '../../buttons/buttonBanner'
import style from '../index.module.css'
const Item2 = () => {
	return (
		<div
			className={`${style['item-2']} text-white  flex : ;
            justify-center  items-center`}
		>
			<div className=' relative h-80 flex flex-col items-center justify-center'>
				<h4 className='font-bold text-3xl md:text-7xl md:font-extralight'>
					JARDINES VERTICALES
				</h4>
				<p className='mb-10 mt-5 text-sm md:text-2xl'>
					UNA NUEVA EXPERIENCIA EN DECORACION
				</p>
				<ButtonBanner title='SABER MÁS' />
			</div>
		</div>
	)
}

export default Item2
