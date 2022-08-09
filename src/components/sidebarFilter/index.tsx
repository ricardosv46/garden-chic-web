import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Filtro from './filtro'

const variants = {
	open: {
		x: 0,
		opacity: 1,
		transition: { ease: 'easeInOut' }
	},
	closed: {
		opacity: 0,
		x: '-100%',
		transition: { ease: 'easeOut' }
	}
}

const fade = {
	open: {
		opacity: 1,
		pointerEvents: 'unset'
	},
	closed: {
		opacity: 0,
		pointerEvents: 'none'
	}
} as const

interface SidebarFilterProps {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
}

const SidebarFilter = ({ isOpen = false, onClose, children }: SidebarFilterProps) => {
	return (
		<div className='fixed top-0 text-primary-800 h-screen md:right-auto md:bottom-px z-40 block lg:hidden'>
			<motion.div
				variants={fade}
				onClick={onClose}
				animate={isOpen ? 'open' : 'closed'}
				initial={{ opacity: 0, pointerEvents: 'none' }}
				className='fixed top-0 w-full h-screen bg-black bg-opacity-50'
			/>
			<motion.div
				variants={variants}
				className='absolute top-0 z-50 h-screen  '
				initial={{ opacity: 0, x: '-100%' }}
				animate={isOpen ? 'open' : 'closed'}>
				<div className='text-primary-600 w-[340px]  bg-white  min-h-screen border-r p-6 h-full overflow-y-scroll scroll'>{children}</div>
			</motion.div>
		</div>
	)
}
export default SidebarFilter
