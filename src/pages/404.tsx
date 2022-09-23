import React from 'react'

const Error = () => {
	return <div>Error</div>
}

export default Error

export const getStaticProps = (context: any) => {
	return {
		redirect: {
			destination: '/',
			permanent: false
		}
	}
}
