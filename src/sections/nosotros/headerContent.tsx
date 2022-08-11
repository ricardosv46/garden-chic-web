import React from 'react'
import Container from '../../components/container'

const HeaderContent = () => {
    return (
        <Container>
            <div className="flex flex-col md:flex-row w-full  py-40">
                <div className="flex flex-auto text-[47px] md:text-[52px] leading-none md:w-1/2 md:px-5 m-2 font-semibold text-primary-800">
                    GardenChic ofrece un servicio completo
                    y especializado para el mantenimiento, cuidado y creación del Jardín de tus sueños

                </div>
                <div className="flex flex-auto mt-5 text-xl md:text-2xl md:w-1/2 md:px-5 m-2 font-light">
                    Contamos con un equipo especializado y con experiencia; dedicados exclusivamente al sector de jardinería. Realizamos proyectos paisajísticos, implementación de jardines verticales, techo verdes, sistemas de riego, mantenimiento de jardines, comercialización de productos e innovación para la jardinería entre otros servicios del rubro y un vivero propio
                </div>
            </div>
        </Container>
    )
}

export default HeaderContent