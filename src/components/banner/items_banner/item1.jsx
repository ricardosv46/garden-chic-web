import React from 'react'
import ButtonBanner from '../../buttons/buttonBanner'
import style from '../index.module.css'
const Item1 = () => {
	return (
		<div
			className={`${style['item-1']} text-white  flex 
            justify-end pr-20 items-center`}
		>
			<div className=' relative h-80 flex flex-col items-start justify-center'>
				<h4 className={`${style['item__title']} font-light `}>MANTENIMIENTO</h4>
				<p className={`${style['item__subtitle']} mb-10 mt-5 `}>
					SOMOS EXPERTOS EN EL CUIDADO DE TU JARDIN
				</p>
				<ButtonBanner title='SABER MÁS' />
			</div>
		</div>
	)
}

export default Item1
