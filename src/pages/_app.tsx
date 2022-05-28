import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CarritoState from '../context/carrito/CarritoState'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

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
        <Head>
          <title>Garden Chic - Inicio</title>
          <meta
            name='description'
            content='Somos expertos en el cuidado de tu jardin.'
          />
          <meta name='keywords' content='jardines, jardin, plantas' />
        </Head>
        <NextSeo
          title="Garden Chic - Inicio"
          titleTemplate="Garden Chic - Inicio"
          defaultTitle="Garden Chic - Inicio"
          description="Somos expertos en el cuidado de tu jardin."
          canonical="https://garden-chic-web.vercel.app"
          openGraph={{
            url: "https://garden-chic-web.vercel.app",
            title: "Garden Chic",
            description: "Somos expertos en el cuidado de tu jardin.",
            images: [
              {
                url: "/imgs/banner/banner__item1.jpg",
                width: 800,
                height: 420,
                alt: "Garden Chic",
              },
            ],
          }}
          twitter={{
            handle: "@avneesh0612",
            site: "@avneesh0612",
            cardType: "summary_large_image",
          }}
        />
        <Header />
        <Component {...pageProps} />
      </>
    </CarritoState>

  )
}

export default MyApp
