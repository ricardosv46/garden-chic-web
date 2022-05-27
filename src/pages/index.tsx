import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/banner'
import Contactanos from '../sections/Home/contactanos'
import NuestrosClientes from '../sections/Home/nuestrosClientes'
import QuePodemosHacer from '../sections/Home/quePodemosHacer'
import Servicios from '../sections/Home/servicios'
import { NextSeo } from 'next-seo'
import Proyects from '../sections/Home/proyects'
import Seo from '../../next-seo.config'

const Home: NextPage = () => {
  return (
    <div>
      {/* <NextSeo {...Seo} /> */}

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

      <NextSeo
        title="Avneesh Agarwal"
        titleTemplate="Avneesh Agarwal"
        defaultTitle="Avneesh Agarwal"
        description="A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them."
        canonical="https://www.avneesh.tech/"
        openGraph={{
          url: "https://www.avneesh.tech/",
          title: "Avneesh Agarwal",
          description: "A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them.",
          images: [
            {
              url: "/og-image.png",
              width: 800,
              height: 420,
              alt: "Avneesh Agarwal",
            },
          ],
        }}
        twitter={{
          handle: "@avneesh0612",
          site: "@avneesh0612",
          cardType: "summary_large_image",
        }}
      />
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
