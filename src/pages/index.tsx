import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/banner'
import Contactanos from '../sections/Home/contactanos'
import NuestrosClientes from '../sections/Home/nuestrosClientes'
import QuePodemosHacer from '../sections/Home/quePodemosHacer'
import Servicios from '../sections/Home/servicios'
import { NextSeo } from 'next-seo'
import Proyectos from '../sections/Home/Proyectos'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Garden Chic - Inicio</title>
        <meta
          name='description'
          content='Somos expertos en el cuidado de tu jardin.'
        />
        <meta name='keywords' content='jardines, jardin, plantas' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NextSeo
        openGraph={{
          type: 'website',
          url: `https://garden-chic-web.vercel.app`,
          title: 'Garden Chic - Inicio',
          description: 'Somos expertos en el cuidado de tu jardin.',
          images: [
            {
              url: 'https://garden-chic-web.vercel.app/imgs/banner/banner__item1.jpg'
            }
          ],
          site_name: 'Garden Chic - Inicio'
        }}
      />
      <Banner />
      <QuePodemosHacer />
      <Servicios />
      <Proyectos />
      <NuestrosClientes />
      <Contactanos />
    </div>
  )
}

export default Home
