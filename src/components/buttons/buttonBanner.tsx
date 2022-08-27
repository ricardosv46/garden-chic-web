import React from 'react'
import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
}

const ButtonBanner = ({ title, ...props }: Props) => {
	return (
		<button
			className='border-white border bg-white py-[6px] px-10 text-primary-600 text-xl rounded-xl font-medium
             hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300'
			{...props}
		>
			{title}
		</button>
	)
}

export default ButtonBanner
