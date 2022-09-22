import Image from 'next/image'
import * as ReactDOM from 'react-dom'
import React, { Fragment, useEffect, useMemo, useState } from 'react'
import Modal from '.'
import Spinner from '@components/Sppinner'

interface Props {
	isOpen: boolean
}

const ModalLoading = ({ isOpen }: Props) => {
	return (
		<Modal isOpen={isOpen} onClose={() => {}}>
			<div className='relative px-10 pt-10 bg-white rounded-2xl '>
				<h1 className='text-xl font-bold text-garden-option1'>Procesando Pago</h1>
				<div className='flex justify-center py-10 text-garden-option1'>
					<Spinner className='border-l-garden-option1 border-t-garden-option1' />
				</div>
			</div>
		</Modal>
	)
}

export default ModalLoading
