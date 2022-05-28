import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/banner'
import Contactanos from '../sections/Home/contactanos'
import NuestrosClientes from '../sections/Home/nuestrosClientes'
import QuePodemosHacer from '../sections/Home/quePodemosHacer'
import Servicios from '../sections/Home/servicios'
import Proyects from '../sections/Home/proyects'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <>
      {/* <Head>
        <title>Garden Chic - Inicio</title>
        <meta
          name='description'
          content='Somos expertos en el cuidado de tu jardin.'
        />
        <meta name='keywords' content='jardines, jardin, plantas' />
      </Head> */}

      <NextSeo
        title='Garden Chic - Inicio'
        description='Somos expertos en el cuidado de tu jardin.'
        canonical='https://garden-chic-web.vercel.app/'
        openGraph={{
          type: 'website',
          url: 'https://garden-chic-web.vercel.app',
          title: 'Garden Chic',
          description: 'Somos expertos en el cuidado de tu jardin.',
          site_name: 'Garden Chic',
          images: [
            {
              url: 'https://garden-chic-web.vercel.app/imgs/banner/banner__item1.jpg',
              width: 800,
              height: 420,
              alt: 'Garden Chic'
            }
          ]
        }}
        twitter={{
          handle: '@avneesh0612',
          site: '@avneesh0612',
          cardType: 'summary_large_image'
        }}
      />
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
