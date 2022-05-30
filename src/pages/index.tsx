import type { NextPage } from 'next'
import Banner from '../components/banner'
import Contactanos from '../sections/Home/contactanos'
import NuestrosClientes from '../sections/Home/nuestrosClientes'
import QuePodemosHacer from '../sections/Home/quePodemosHacer'
import Servicios from '../sections/Home/servicios'
import Proyects from '../sections/Home/proyects'
import OpenGraph from '../components/openGraph'

const Home: NextPage = () => {
  return (
    <>
      <OpenGraph
        title="Garden Chic - Inicio"
        link="https://garden-chic-web.vercel.app/"
        description="Somos expertos en el cuidado de tu jardin."
        img="https://garden-chic-web.vercel.app/imgs/banner/banner__item1.jpg"
        url="https://garden-chic-web.vercel.app/"
        keywords='jardines, jardin, plantas'
        domain="https://garden-chic-web.vercel.app/"
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
