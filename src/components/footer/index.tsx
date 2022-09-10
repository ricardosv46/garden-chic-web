import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa'
import Container from '@components/container'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'


export const Footer = () => {
    const { push: Push } = useRouter()
    return (
        <Container bgColor="bg-garden-option1 lg:pb-6" >
            <div className='flex flex-col md:flex-row  text-white py-8 text-[16px] gap-2 md:gap-4  '>
                <div className='w-1/5 lg:w-[20%] text-[16px] md:text-xl  '>
                    <div className='tracking-[1px] capitalize my-3 leading-[23.24px] font-garden_bold text-garden-option2'>Web</div>
                    <ul className='flex flex-col md:gap-2  leading-[18.2px] font-garden_regular text-[14px] md:text-base'>
                        <li onClick={() => Push('/')} className="cursor-pointer">Inicio</li>
                        <li onClick={() => Push('/nosotros')} className="cursor-pointer">Nosotros</li>
                        <li onClick={() => Push('/servicios')} className="cursor-pointer">Servicios</li>
                        <li onClick={() => Push('/tienda')} className="cursor-pointer">Tienda</li>
                        <li onClick={() => Push('/proyectos')} className="cursor-pointer">Proyectos</li>
                        <li onClick={() => Push('/blogs')} className="cursor-pointer">Blog</li>
                        <li onClick={() => Push('/contactos')} className="cursor-pointer">Contacto</li>
                    </ul>
                </div>
                <div className='w-[26.6] lg:w-[27%] text-[16px] md:text-xl  '>
                    <div className=' tracking-[1px] capitalize my-3 leading-[23.24px] font-garden_bold text-garden-option2'>Servicios</div>
                    <ul className='flex flex-col  md:gap-2  leading-[18.2px] font-garden_regular text-[14px] md:text-base'>
                        <li onClick={() => Push('/servicios/paisajismo')} className="cursor-pointer">Paisajismo</li>
                        <li onClick={() => Push('/servicios/jardinesverticales')} className="cursor-pointer">Jardines verticales</li>
                        <li onClick={() => Push('/servicios/mantenimientodeareasverdes')} className="cursor-pointer">Mantenimiento de áreas verdes</li>
                        <li onClick={() => Push('/servicios/techosverdes')} className="cursor-pointer">Techos verdes</li>
                        <li onClick={() => Push('/servicios/sistemaderiegotecnificado')} className="cursor-pointer">Sistemas de riego tecnificado</li>
                        <li onClick={() => Push('/servicios/impermeabilización')} className="cursor-pointer">Impermeabilización</li>
                        <li onClick={() => Push('/servicios/vivero')} className="cursor-pointer">Vivero</li>

                    </ul>
                </div>
                <div className='w-[26.7] lg:w-[27%] text-[16px] md:text-xl flex flex-col justify-between  '>
                    <div className='text-[16px] md:text-xl'>
                        <div className=' tracking-[1px] capitalize my-3  leading-[23.24px] font-garden_bold  text-garden-option2'>Contáctanos</div>
                        <ul className='flex flex-col md:gap-2  leading-[18.2px] font-garden_regular text-[14px] md:text-base '>
                            <span>Tel: 996 276 109</span>
                            <span >consultas@gardenchicperu.com</span>
                        </ul>
                    </div>
                    <div className='mb-4 text-[16px] md:text-xl'>
                        <div className=' tracking-[1px] capitalize my-3  leading-[23.24px] font-garden_bold  text-garden-option2'>Síguenos</div>
                        <ul className='flex flex-row gap-2 md:gap-2 lg:gap-3 leading-[18.2px] font-garden_regular text-[14px] md:text-base'>
                            <li className='cursor-pointer'>
                                <Link href={'https://www.facebook.com/gardenchicperu/'} target={'_blank'}>
                                    <FaFacebook className='w-6 h-6 lg:w-8 lg:h-8 hover:text-white' />
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href={'https://www.linkedin.com/in/garden-chic-per%C3%BA-433a50173/'} target={'_blank'}>
                                    <FaLinkedin className='w-6 h-6 lg:w-8 lg:h-8 hover:text-white' />
                                </Link>
                            </li>
                            <li className='cursor-pointer'>
                                <Link href={'https://www.instagram.com/gardenchicperu/'} target={'_blank'}>
                                    <FaInstagram className='w-6 h-6 lg:w-8 lg:h-8 hover:text-white' />
                                </Link>
                            </li>
                            <li>
                                <Link href={'https://www.pinterest.es/gardenchicperu/'} target={'_blank'}>
                                    <FaPinterest className='w-6 h-6 lg:w-8 lg:h-8 hover:text-white' />
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='w-[26.7] lg:w-[26%] flex flex-col justify-between text-[16px] md:text-xl  '>
                    <div className=''>
                        <div className=' tracking-[1px] capitalize  leading-[23.24px] font-garden_bold  text-garden-option2 my-3 text-[16px] md:text-xl'>Proveedor Oficial</div>
                        <span className='block my-3 font-garden_regular text-[14px] w-4/5 md:w-full   md:text-base'>¡Somos proveedores oficiales de CASACOR PERÚ desde hace 03 ediciones!</span>
                    </div>
                    <div className='w-full h-16 relative max-w-[288px] md:h-16 lg:h-16 mb-4  '>
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
