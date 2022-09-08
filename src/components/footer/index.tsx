import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa'
import Container from '@components/container'
import { useRouter } from 'next/router'
import Image from 'next/image'


export const Footer = () => {
    const { push: Push } = useRouter()
    return (
        <Container bgColor="bg-garden-option1 lg:pb-6" >
            <div className='flex flex-col md:flex-row  text-white py-8 text-[16px] gap-6'>
                <div className=' md:w-[16%] text-xs md:text-base '>
                    <div className='tracking-[1px] capitalize my-3 leading-[23.24px] font-garden_bold text-garden-option2'>Web</div>
                    <ul className='flex flex-col gap-1 md:gap-2  leading-[18.2px] font-garden_regular'>
                        <li onClick={() => Push('/')} className="cursor-pointer">Inicio</li>
                        <li onClick={() => Push('/nosotros')} className="cursor-pointer">Nosotros</li>
                        <li onClick={() => Push('/servicios')} className="cursor-pointer">Servicios</li>
                        <li onClick={() => Push('/tienda')} className="cursor-pointer">Tienda</li>
                        <li onClick={() => Push('/proyectos')} className="cursor-pointer">Proyectos</li>
                        <li onClick={() => Push('/blogs')} className="cursor-pointer">Blog</li>
                        <li onClick={() => Push('/contactos')} className="cursor-pointer">Contacto</li>
                    </ul>
                </div>
                <div className=' md:w-[28%] text-xs md:text-base'>
                    <div className=' tracking-[1px] capitalize my-3 leading-[23.24px] font-garden_bold text-garden-option2'>Servicios</div>
                    <ul className='flex flex-col gap-1 md:gap-2  leading-[18.2px] font-garden_regular'>
                        <li onClick={() => Push('/servicios/paisajismo')} className="cursor-pointer">Paisajismo</li>
                        <li onClick={() => Push('/servicios/jardinesverticales')} className="cursor-pointer">Jardines verticales</li>
                        <li onClick={() => Push('/servicios/mantenimientodeareasverdes')} className="cursor-pointer">Mantenimiento de áreas verdes</li>
                        <li onClick={() => Push('/servicios/techosverdes')} className="cursor-pointer">Techos verdes</li>
                        <li onClick={() => Push('/servicios/sistemaderiegotecnificado')} className="cursor-pointer">Sistemas de riego tecnificado</li>
                        <li onClick={() => Push('/servicios/impermeabilización')} className="cursor-pointer">Impermeabilización</li>
                        <li onClick={() => Push('/servicios/vivero')} className="cursor-pointer">Vivero</li>

                    </ul>
                </div>
                <div className=' md:w-[28%] text-xs md:text-base flex flex-col justify-between'>
                    <div>
                        <div className=' tracking-[1px] capitalize my-3  leading-[23.24px] font-garden_bold  text-garden-option2'>Contáctanos</div>
                        <ul className='flex flex-col gap-1 md:gap-2  leading-[18.2px] font-garden_regular'>
                            <span>Tel: 996 276 109</span>
                            <span className='text-[14px]'>consultas@gardenchicperu.com</span>
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <div className=' tracking-[1px] capitalize my-3  leading-[23.24px] font-garden_bold  text-garden-option2'>Síguenos</div>
                        <ul className='flex flex-row gap-1 md:gap-2 lg:gap-3 leading-[18.2px] font-garden_regular'>
                            <li><FaFacebook className='w-6 h-6 lg:w-8 lg:h-8 hover:text-white' /></li>
                            <li><FaLinkedin className='w-6 h-6 lg:w-8 lg:h-8 hover:text-white' /></li>
                            <li><FaInstagram className='w-6 h-6 lg:w-8 lg:h-8 hover:text-white' /></li>
                            <li><FaPinterest className='w-6 h-6 lg:w-8 lg:h-8 hover:text-white' /></li>
                        </ul>
                    </div>

                </div>
                <div className='md:w-[28%] flex flex-col justify-between text-xs md:text-base'>
                    <div>
                        <div className=' tracking-[1px] capitalize  leading-[23.24px] font-garden_bold  text-garden-option2'>Proveedor Oficial</div>
                        <span className='block my-3 font-garden_regular'>!Somos proveedores oficiales de CASACOR PERÚ desde hace 03 ediciones!</span>
                    </div>
                    <div className='w-full h-16 relative max-w-[288px] md:h-12 lg:h-16 mb-4'>
                        <Image
                            className='absolute w-full h-full '
                            loading='lazy'
                            layout='fill'
                            objectFit='cover'
                            src={'/imgs/banner/principal/LOGO_BANNER_CASACOR.png'}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}
