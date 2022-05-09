import React from 'react'
import ButtonBanner from '../../buttons/buttonBanner'
import style from '../index.module.css'
const Item3 = () => {
	return (
		<div
			className={`${style['item-1']} text-white  flex : ;
            md:justify-start justify-center md:pl-20 items-center`}
		>
			<div className=' relative h-80 flex flex-col items-start justify-center'>
				<h4 className='font-bold text-3xl md:text-7xl md:font-extralight'>
					PAISAJISMO
				</h4>
				<p className='mb-10 mt-5 text-sm md:text-2xl'>DISFRUTA DE TU ESPACIO</p>
				<ButtonBanner title='SABER MÁS' />
			</div>
		</div>
	)
}

export default Item3
