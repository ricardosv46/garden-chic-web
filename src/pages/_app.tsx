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

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <CarritoState>
          <Header />
          <Component {...pageProps} />
        </CarritoState>
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp
