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

        {/* <meta property='og:title' content='Garden Chic - meta' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://garden-chic-web.vercel.app' />
        <meta
          property='og:image'
          content='https://garden-chic-web.vercel.app/imgs/banner/banner__item1.jpg'
        />
        

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='website' />
        <meta
          name='twitter:title'
          content='Small Island Developing States Photo Submission'
        />
        <meta name='twitter:description' content='View the album on Flickr.' />
        <meta
          name='twitter:image'
          content='https://garden-chic-web.vercel.app/imgs/banner/banner__item1.jpg'
        /> */}

        {/* <!-- HTML Meta Tags --> */}
        <title>
          Buy best disposal products from Garima disposal and plastic in Jaipur
        </title>
        <meta
          name='description'
          content='Buy best disposal products at low prices. Paper, plastic and wooden products. Buy best thermocol products, bowls, cups, glasses, pattal, dona, food containers etc.'
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://garden-chic-web.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Buy best disposal products from Garima disposal and plastic in Jaipur'
        />
        <meta
          property='og:description'
          content='Buy best disposal products at low prices. Paper, plastic and wooden products. Buy best thermocol products, bowls, cups, glasses, pattal, dona, food containers etc.'
        />
        <meta
          property='og:image'
          content='https://garden-chic-web.vercel.app/imgs/banner/banner__item1.jpg'
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        {/* <meta property='twitter:domain' content='garimadisposal.in' /> */}
        <meta
          property='twitter:url'
          content='https://garden-chic-web.vercel.app/'
        />
        <meta
          name='twitter:title'
          content='Buy best disposal products from Garima disposal and plastic in Jaipur'
        />
        <meta
          name='twitter:description'
          content='Buy best disposal products at low prices. Paper, plastic and wooden products. Buy best thermocol products, bowls, cups, glasses, pattal, dona, food containers etc.'
        />
        <meta
          name='twitter:image'
          content='https://garden-chic-web.vercel.app/imgs/banner/banner__item1.jpg'
        />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
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
