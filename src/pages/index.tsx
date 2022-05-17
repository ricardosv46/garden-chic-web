import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/banner'
import Contactanos from '../sections/Home/contactanos'
import NuestrosClientes from '../sections/Home/nuestrosClientes'
import QuePodemosHacer from '../sections/Home/quePodemosHacer'
import Servicios from '../sections/Home/servicios'
import Works from '../sections/works'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Garden Chic - Inicio</title>
        <meta
          name='description'
          content='Somos expertos en el cuidado de tu jardin.'
        />
        <meta property='og:title' content='Garden Chic - Inicio' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://garden-chic-web.vercel.app' />
        <meta name='keywords' content='jardines, jardin, plantas' />
        {/* <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='index,follow' /> */}
        <meta name='viewport' content='width=device-width' />
        <meta name='title' content='Garden Chic - Inicio' />
        <meta
          name='description'
          content='Somos expertos en el cuidado de tu jardin.'
        />
        <meta name='image' content='/imgs/blogs/banner__item1.jpg' />

        <meta
          name='twitter:title'
          content='Somos expertos en el cuidado de tu jardin.'
        />
        <meta
          name='twitter:description'
          content='Somos expertos en el cuidado de tu jardin.'
        />
        <meta name='twitter:image' content='/imgs/blogs/banner__item1.jpg' />
        <meta name='twitter:url' content='https://garden-chic-web.vercel.app' />
        <meta name='twitter:card' content='summary_large_image' />

        <meta property='og:title' content='Garden Chic - Inicio' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Garden Chic - Inicio' />
        <meta property='og:url' content='https://garden-chic-web.vercel.app' />
        <meta property='og:image' content='/imgs/blogs/banner__item1.jpg' />
        <meta
          property='og:image:secure_url'
          content='/imgs/blogs/banner__item1.jpg'
        />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='400' />
        <meta property='og:image:height' content='300' />
        <meta
          property='og:description'
          content='Somos expertos en el cuidado de tu jardin.'
        />
      </Head>
      <Banner />
      <QuePodemosHacer />
      <Servicios />
      <Works />
      <NuestrosClientes />
      <Contactanos />
    </div>
  )
}

export default Home
