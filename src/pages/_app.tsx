import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CarritoState from '../context/carrito/CarritoState'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarritoState>
      <Header />
      <Component {...pageProps} />
    </CarritoState>
  )
}

export default MyApp
