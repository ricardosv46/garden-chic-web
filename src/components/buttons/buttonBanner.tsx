import React from 'react'
import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
}

const ButtonBanner = ({ title, ...props }: Props) => {
	return (
		<button
			className='border-white border bg-white md:py-[4px] lg:py-[6px] px-2 md:px-8 lg:px-10 text-primary-600 text-[8px] md:text-sm w-auto lg:text-xl rounded-3xl font-garden_medium
             hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300'
			{...props}
		>
			{title}
		</button>
	)
}

export default ButtonBanner
