import React from 'react'
import { DataGeneral } from 'src/data/dataGeneral'
import BannerContactos from '../../components/banner/bannerContatcos'
import Container from '../../components/container'
import Contactanos from '../../sections/Home/contactanos'

const Contactos = () => {
  return (
    <>
      <BannerContactos />
      <Contactanos data={DataGeneral.Contactanos.OptionForm} />
    </>
  )
}

export default Contactos
