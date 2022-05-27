import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/banner'
import Contactanos from '../sections/Home/contactanos'
import NuestrosClientes from '../sections/Home/nuestrosClientes'
import QuePodemosHacer from '../sections/Home/quePodemosHacer'
import Servicios from '../sections/Home/servicios'
import { DefaultSeo, NextSeo } from 'next-seo'
import Proyects from '../sections/Home/proyects'
import Seo from '../../next-seo.config'

const Home: NextPage = () => {
  return (
    <div>
      <DefaultSeo {...Seo} />

      {/*
      <Head>
        <title>Garden Chic - Inicio</title>
        <meta
          name='description'
          content='Somos expertos en el cuidado de tu jardin.'
        />
        <meta name='keywords' content='jardines, jardin, plantas' />
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
      /> */}

      <Banner />
      <QuePodemosHacer />
      <Servicios />
      <Proyects />
      <NuestrosClientes />
      <Contactanos />
    </div>
  )
}

export default Home
