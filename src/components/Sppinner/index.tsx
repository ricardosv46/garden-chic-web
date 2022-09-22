import React from 'react'

const Spinner = ({ size = 'md', className = '' }) => {
	let classSize = ''

	if (size === 'md') {
		classSize = 'h-[30px] w-[30px]'
	}

	if (size === 'sm') {
		classSize = 'h-[20px] w-[20px]'
	}

	return (
		<div
			className={[
				classSize,
				className,
				'rounded-[50%] border-[3.5px] border-t-secondary-300 dark:border-t-secondary-500 border-l-secondary-300 dark:border-l-secondary-500 border-r-transparent border-b-transparent animate-spin'
			].join(' ')}
		/>
	)
}

export default Spinner
