import React from 'react'
import Container from '../../components/container'

const HeaderContent = () => {
    return (
        <Container>
            <div className="flex flex-col md:flex-row w-full  py-40">
                <div className="flex flex-auto text-[47px] md:text-[52px] leading-none md:w-1/2 md:px-5 m-2 font-bold text-primary-800">
                    GardenChic ofrece un servicio completo
                    y especializado para el mantenimiento, cuidado y creación del Jardín de tus sueños

                </div>
                <div className="flex flex-col gap-4 mt-5 text-xl md:text-2xl md:w-1/2 md:px-5 m-2 font-light">
                    <span>
                        Contamos con un equipo especializado y con experiencia exclusivamente al sector de jardinería.
                    </span>
                    <span>
                        Realizamos proyectos como implementación de jardines verticales, techos verdes, sistemas de riego, mantenimiento de áreas verdes, comercialización de productos, entre otros servicios del rubro, además contamos con un vivero propio
                    </span>
                </div>
            </div>
        </Container>
    )
}

export default HeaderContent