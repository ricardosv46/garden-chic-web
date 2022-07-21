import type { NextPage } from 'next'
import Banner from '../components/banner'
import Contactanos from '../sections/Home/contactanos'
import NuestrosClientes from '../sections/Home/nuestrosClientes'
import QuePodemosHacer from '../sections/Home/quePodemosHacer'
import Servicios from '../sections/Home/servicios'
import Proyects from '../sections/Home/proyects'
import OpenGraph from '../components/openGraph'
import { useEffect } from 'react'
import { getSession, useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { status, data } = useSession() as { status: string; data: { user: any } }
  console.log('data', data)

  useEffect(() => {
    const sesion = async () => {
      const res = await getSession()
      console.log('sesion', res)
    }

    sesion()
  }, [])

  return (
    <>
      <OpenGraph
        title='Garden Chic - Inicio'
        link='Garden Chic'
        description='Somos expertos en el cuidado de tu jardin.'
        domain='garden-chic-web.vercel.app'
        img='https://garden-chic-web.vercel.app/imgs/banner/banner__item1.jpg'
        keywords='jardines, jardin, plantas'
        url='https://garden-chic-web.vercel.app/'
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
