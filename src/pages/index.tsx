import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/banner'
import Contactanos from '../sections/Home/contactanos'
import NuestrosClientes from '../sections/Home/nuestrosClientes'
import QuePodemosHacer from '../sections/Home/quePodemosHacer'
import Servicios from '../sections/Home/servicios'
import Proyects from '../sections/Home/proyects'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        {/* <title>Garden Chic - Inicio</title>
        <meta
          name='description'
          content='Somos expertos en el cuidado de tu jardin.'
        />
        <meta name='keywords' content='jardines, jardin, plantas' /> */}

        <meta property='og:title' content='Garden Chic - meta' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://garden-chic-web.vercel.app' />
        <meta
          property='og:image'
          content='https://garden-chic-web.vercel.app/imgs/banner/banner__item1.jpg'
        />
      </Head>

      <Banner />
      <QuePodemosHacer />
      <Servicios />
      <Proyects />
      <NuestrosClientes />
      <Contactanos />
    </>
  )
}

export default Home
