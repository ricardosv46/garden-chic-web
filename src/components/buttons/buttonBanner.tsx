import React from 'react'
import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string,
	onclick?: () => void
}

const ButtonBanner = ({ title, onclick, ...props }: Props) => {
	return (
		<button
			onClick={onclick}
			className='border-white border bg-white md:py-[4px] lg:py-[6px] px-2 md:px-8 lg:px-10 text-primary-600 text-[12px] md:text-sm w-auto lg:text-xl rounded-3xl font-garden_medium
             hover:bg-garden-option1 hover:text-white hover:border-garden-option1 transition-all duration-300'
			{...props}
		>
			{title}
		</button>
	)
}

export default ButtonBanner
