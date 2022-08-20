import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa'
import Container from '@components/container'
import Image from 'next/image'


export const Footer = () => {
    return (
        <Container bgColor='bg-[#004969]'>
            <div className='flex flex-col md:flex-row  text-white py-8 text-[16px] gap-6'>
                <div className=' md:w-1/4'>
                    <div className=' tracking-[1px] capitalize my-3 leading-[23.24px]'>Nosotros</div>
                    <ul className='flex flex-col gap-1 leading-[18.2px] '>
                        <li>Conócenos</li>
                        <li>Misión</li>
                        <li>Visión</li>
                        <li>Valores</li>
                        <li>Objetivos</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='] md:w-1/4'>
                    <div className=' tracking-[1px] capitalize my-3 leading-[23.24px]'>Servicios</div>
                    <ul className='flex flex-col gap-2 leading-[18.2px] '>
                        <li>Empresas de jardinería en Lima</li>
                        <li>Jardín urbano Perú</li>
                        <li>Jardinería en Lima</li>
                        <li>Jardinero a domicilio en Lima</li>
                        <li>Diseño de jardines</li>
                        <li>Sistemas de riego tecnificado</li>
                        <li>Viveros en Lurín</li>
                    </ul>
                </div>
                <div className=' md:w-1/4'>
                    <div className=' tracking-[1px] capitalize my-3  leading-[23.24px]'>Servicios</div>
                    <ul className='flex flex-col gap-2 leading-[18.2px] '>
                        <li>Mantenimiento de jardines en Lima</li>
                        <li>Servicio de jardinería en Lima</li>
                        <li>Servicios de jardinería en Lima</li>
                        <li>Trabajo de jardinería en Lima</li>
                        <li>viveros en Lima Perú</li>
                        <li>Paisajismo en Lima</li>
                        <li>Impermeabilización con mantos asfalticos y geomembrana</li>
                    </ul>
                </div>
                <div className='md:w-1/4 flex flex-col gap-4'>
                    <div className=' tracking-[1px] capitalize my-3 leading-[23.24px]'>Síguenos</div>
                    <ul className='flex flex-wrap  leading-[18.2px] gap-4 text-primary-300'>
                        <li><FaFacebook className='w-6 h-6 hover:text-white' /></li>
                        <li><FaLinkedin className='w-6 h-6 hover:text-white' /></li>
                        <li><FaInstagram className='w-6 h-6 hover:text-white' /></li>
                        <li><FaPinterest className='w-6 h-6 hover:text-white' /></li>
                    </ul>
                    <div className='flex flex-col'>
                        <span>Tel: 996 276 109</span>
                        <span className='text-[14px]'>consultas@gardenchicperu.com</span>
                    </div>
                    <div className='w-full h-16 relative'>
                        <Image
                            className='absolute w-full h-full'
                            loading='lazy'
                            layout='fill'
                            objectFit='cover'
                            src={'/imgs/footer/LOGO_HORIZONTAL.jpg'}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}
