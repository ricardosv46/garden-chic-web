import Spinner from '@components/Sppinner'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Error = () => {
	const router = useRouter()
	useEffect(() => {
		router.push('/')
	})
	return (
		<div className='flex items-center justify-center py-96'>
			<Spinner />
		</div>
	)
}

export default Error
