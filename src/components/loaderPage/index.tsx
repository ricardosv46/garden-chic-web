import React from 'react'

export const LoaderPage = () => {
	return (
		<div className='bg-garden-option1 h-screen w-full fixed z-50 flex justify-center items-center opacity-40'>
			<div className='lds-ripple'>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
