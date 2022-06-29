import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { AppProps } from 'next/app'
import Header from '../components/header'

import CarritoState from '../context/carrito/CarritoState'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <CarritoState>
        <Header />
        <Component {...pageProps} />
      </CarritoState>
    </ApolloProvider>
  )
}

export default MyApp
