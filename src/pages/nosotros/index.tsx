import React from 'react'
import { DataGeneral } from 'src/data/dataGeneral'
import Contactanos from '../../sections/Home/contactanos'
import QuePodemosHacer from '../../sections/Home/quePodemosHacer'
import Servicios from '../../sections/Home/servicios'
import Header from '../../sections/nosotros/header'
import HeaderContent from '../../sections/nosotros/headerContent'
import NuestraMision from '../../sections/nosotros/nuestraMision'
import PorqueElegirnos from '../../sections/nosotros/porqueElegirnos'

const Nosotros = () => {
  return (
    <div>
      <Header />
      <HeaderContent />
      <QuePodemosHacer data={DataGeneral.Nosotros.QuePodemosHacer} />
      <Servicios />
      <PorqueElegirnos />
      <NuestraMision />
      <Contactanos />
    </div>
  )
}

export default Nosotros
