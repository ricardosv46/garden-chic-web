import React from 'react'
import { motion } from 'framer-motion'
interface Props {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const fade = {
  open: { opacity: 1, pointerEvents: 'unset' },
  closed: { opacity: 0, pointerEvents: 'none' }
} as const

const Modal = ({ children, isOpen = false, onClose }: Props) => {
  return (
    <motion.div
      variants={fade}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={isOpen ? 'open' : 'closed'}
      className='fixed h-screen top-0 cursor-pointer w-full flex justify-center items-center bg-black bg-opacity-50 z-50'
    >
      {children}
    </motion.div>
  )
}
export default Modal