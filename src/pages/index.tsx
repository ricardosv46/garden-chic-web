import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/banner'
import Contactanos from '../sections/Home/contactanos'
import NuestrosClientes from '../sections/Home/nuestrosClientes'
import QuePodemosHacer from '../sections/Home/quePodemosHacer'
import Servicios from '../sections/Home/servicios'
import Works from '../sections/works'
import { NextSeo } from 'next-seo'

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
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
        />
      </Head>
      <NextSeo
        openGraph={{
          type: 'website',
          url: `https://garden-chic-web.vercel.app/`,
          title: 'Garden Chic - Inicio',
          description: 'Somos expertos en el cuidado de tu jardin.',
          images: [
            {
              url: '/imgs/banner/banner__item1.jpg'
            }
          ],
          site_name: 'Garden Chic - Inicio'
        }}
      />
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
