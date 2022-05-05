import React from 'react'
import type {ButtonHTMLAttributes} from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
}

const ButtonBanner = ({title, ...props}: Props) => {
	return (
		<button
			className='border-white border py-2 px-10 text-xl font-light rounded-sm'
			{...props}
		>
			{title}
		</button>
	)
}

export default ButtonBanner
