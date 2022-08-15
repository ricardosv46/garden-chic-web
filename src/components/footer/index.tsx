import Container from '@components/container'
import React from 'react'

export const Footer = () => {
    return (
        <Container bgColor='bg-[#004969]'>
            <div className='flex flex-col md:flex-row  text-white py-8'>
                <div className='text-[14px] md:w-1/4'>
                    <div className=' tracking-[1px] capitalize my-4 leading-[23.24px]'>Nosotros</div>
                    <ul className='flex flex-col gap-1 leading-[18.2px] '>
                        <li>Conócenos</li>
                        <li>Misión</li>
                        <li>Visión</li>
                        <li>Valores</li>
                        <li>Objetivos</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='text-[14px] md:w-1/4'>
                    <div className=' tracking-[1px] capitalize my-4 leading-[23.24px]'>Servicios</div>
                    <ul className='flex flex-col gap-1 leading-[18.2px] '>
                        <li>Empresas de jardinería en Lima</li>
                        <li>Jardín urbano Perú</li>
                        <li>Jardinería en Lima</li>
                        <li>Jardinero a domicilio en Lima</li>
                        <li>Diseño de jardines</li>
                        <li>Sistemas de riego tecnificado</li>
                        <li>Viveros en Lurín</li>
                    </ul>
                </div>
                <div className='text-[14px] md:w-1/4'>
                    <div className=' tracking-[1px] capitalize my-4 leading-[23.24px]'>Servicios</div>
                    <ul className='flex flex-col gap-1 leading-[18.2px] '>
                        <li>Empresas de jardinería en Lima</li>
                        <li>Jardín urbano Perú</li>
                        <li>Jardinería en Lima</li>
                        <li>Jardinero a domicilio en Lima</li>
                        <li>Diseño de jardines</li>
                        <li>Sistemas de riego tecnificado</li>
                        <li>Viveros en Lurín</li>
                    </ul>
                </div>
                <div className='text-[14px] md:w-1/4'>
                    <div className=' tracking-[1px] capitalize my-4 leading-[23.24px]'>Síguenos</div>
                    <ul className='flex flex-col gap-1 leading-[18.2px] '>
                        <li>Conócenos</li>
                        <li>Misión</li>
                        <li>Visión</li>
                        <li>Valores</li>
                        <li>Objetivos</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
