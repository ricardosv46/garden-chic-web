import React from 'react'
import BannerContactos from '../../components/banner/bannerContatcos'
import Container from '../../components/container'
import Contactanos from '../../sections/Home/contactanos'

const Contactos = () => {
  return (
    <>
      <BannerContactos titulo='Contacto' rutaImg='works/bannerproyecto.jpg' />
      <Contactanos />
    </>
  )
}

export default Contactos
