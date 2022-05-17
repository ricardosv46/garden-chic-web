import React from 'react'
import Container from '../../components/container'

const HeaderContent = () => {
 return (
  <Container>
   <div className="flex flex-col md:flex-row w-full  py-40">
    <div className="flex flex-auto text-[47px] md:text-[52px] leading-none md:w-1/2 md:px-5 m-2 font-semibold text-primary-800">
     Gardeny ofrece un diseño de jardines de servicio completo a los clientes.
    </div>
    <div className="flex flex-auto mt-5 text-xl md:text-2xl md:w-1/2 md:px-5 m-2 font-light">
     Trabajamos con un grupo selecto de contratistas de paisajismo, especialistas en diseño de iluminación y fuentes de agua para garantizar que el proceso de diseño del jardín, desde el concepto inicial hasta la finalización del proyecto, sea fluido y sin inconvenientes.
    </div>
   </div>
  </Container>
 )
}

export default HeaderContent