import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CarritoState from '../context/carrito/CarritoState'

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])
  if (!showChild) {
    return null
  }
  return (

    <CarritoState>
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </CarritoState>

  )
}

export default MyApp
