/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer, useState } from 'react'
import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import CarritoState from '../context/carrito/CarritoState'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo'
import { SessionProvider } from 'next-auth/react'
import { ScreenProvider } from 'src/context/screen/ScreenProvider'
import ProgressBar from 'nextjs-progressbar'
import { Footer } from '@components/footer'
import { ProductsProvider } from 'src/context/products/ProductsProvider'
import ModalState from '@context/modal/ModalState'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<SessionProvider session={session}>
				<ScreenProvider>
					<ProgressBar />
					<ProductsProvider>
						<ModalState>
							<CarritoState>
								<Header />
								<Component {...pageProps} />
								<Footer />
							</CarritoState>
						</ModalState>
					</ProductsProvider>
				</ScreenProvider>
			</SessionProvider>
		</ApolloProvider>
	)
}

export default MyApp
