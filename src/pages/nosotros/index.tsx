import { useState, useEffect } from 'react'
import { DataGeneral } from 'src/data/dataGeneral'
import Contactanos from '../../sections/Home/contactanos'
import QuePodemosHacer from '../../sections/Home/quePodemosHacer'
import Servicios from '../../sections/Home/servicios'
import Header from '../../sections/nosotros/header'
import HeaderContent from '../../sections/nosotros/headerContent'
import NuestraMision from '../../sections/nosotros/nuestraMision'
import PorqueElegirnos from '../../sections/nosotros/porqueElegirnos'
const Nosotros = () => {
  const [isMobile, setIsMobile] = useState(false)
  const updateDimensions = () => window.innerWidth < 1024 ? setIsMobile(true) : setIsMobile(false)

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div>
      <Header />
      <HeaderContent />
      <QuePodemosHacer data={DataGeneral.Nosotros.QuePodemosHacer} />
      <Servicios data={DataGeneral.Nosotros.Iconos} loop={isMobile}/>
      <PorqueElegirnos />
      <NuestraMision />
      <Contactanos data={DataGeneral.Nosotros.Contactanos} />
    </div>
  )
}

export default Nosotros
