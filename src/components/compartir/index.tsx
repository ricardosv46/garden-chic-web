import React, { useState } from 'react'

interface PropsCompartir {
	ruta: string | undefined
	title?: string
}

interface PropsShare {
	title?: string
	text?: string
	url: string
}
const Compartir = ({ ruta, title }: PropsCompartir) => {
	const [hoverF, setHoverF] = useState(false)
	const [hoverT, setHoverT] = useState(false)
	const [hoverL, setHoverL] = useState(false)

	const shareResponsive = ({ title, text, url }: PropsShare) => {
		if (navigator.share) {
			navigator.share({ title, text, url })
		}
		return false
	}

	return (
		<>
			<div className='flex items-center gap-2'>
				{/* Facebook */}
				<div
					onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=https://gardenchicperu.com/blogs/${ruta}/`, '_blank')}
					onMouseOver={() => setHoverF(true)}
					onMouseOut={() => setHoverF(false)}
					className='flex items-center justify-center duration-300 ease-in-out border-2 rounded-full cursor-pointer w-7 h-7 border-garden-option1 hover:bg-garden-option1'>
					<svg
						stroke='currentColor'
						fill={hoverF ? '#fff' : '#014969'}
						viewBox='0 0 320 512'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
					</svg>
				</div>
				{/* Twitter */}
				<div
					onMouseOver={() => setHoverT(true)}
					onMouseOut={() => setHoverT(false)}
					className='flex items-center justify-center duration-300 ease-in-out border-2 rounded-full cursor-pointer w-7 h-7 border-garden-option1 hover:bg-garden-option1'
					onClick={() => window.open(`https://twitter.com/intent/tweet?text=https://gardenchicperu.com/blogs/${ruta}`, '_blank')}>
					<svg
						stroke='currentColor'
						fill={hoverT ? '#fff' : '#014969'}
						viewBox='0 0 512 512'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
					</svg>
				</div>
				{/* Linkendin */}
				<div
					onMouseOver={() => setHoverL(true)}
					onMouseOut={() => setHoverL(false)}
					className='flex items-center justify-center duration-300 ease-in-out border-2 rounded-full cursor-pointer w-7 h-7 border-garden-option1 hover:bg-garden-option1'
					onClick={() =>
						window.open(
							` https://www.linkedin.com/shareArticle?mini=true&url=https://gardenchicperu.com/blogs/${ruta}/&title=${title} `,
							'_blank'
						)
					}>
					<svg
						stroke='currentColor'
						fill={hoverL ? '#fff' : '#014969'}
						viewBox='0 0 448 512'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
					</svg>
				</div>
				{/* Icon Mobile */}
				<div
					className='lg:hidden'
					onClick={() =>
						shareResponsive({
							title,
							url: `https://gardenchicperu.com/blogs/${ruta}`
						})
					}>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='32px' height='32px'>
						<path
							// fill='#014969'
							d='M7.9,256C7.9,119,119,7.9,256,7.9C393,7.9,504.1,119,504.1,256c0,137-111.1,248.1-248.1,248.1C119,504.1,7.9,393,7.9,256z'
						/>
						<path
							// fill='#FFF'
							d='M154.4 203.09999999999997A53.8 53.8 0 1 0 154.4 310.7 53.8 53.8 0 1 0 154.4 203.09999999999997zM318.7 107.39999999999999A53.8 53.8 0 1 0 318.7 215 53.8 53.8 0 1 0 318.7 107.39999999999999zM318.7 297A53.8 53.8 0 1 0 318.7 404.6 53.8 53.8 0 1 0 318.7 297z'
						/>
						<g>
							<path
								// fill='#FFF'
								d='M222.1 112.2H251V302.3H222.1z'
								transform='rotate(59.786 236.552 207.272)'
							/>
						</g>
						<g>
							<path
								// fill='#FFF'
								d='M141.5 288.5H331.6V317.4H141.5z'
								transform='rotate(30.214 236.576 302.965)'
							/>
						</g>
					</svg>
				</div>
			</div>
		</>
	)
}

export default Compartir
