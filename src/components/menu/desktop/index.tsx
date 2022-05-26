import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IconCart from '../../../../public/icons/IconCart'
import IconUser from '../../../../public/icons/IconUser'
import { useCarritoContext } from '../../../context/carrito/CarritoState'


interface SidebarCartProps {
  onOpen: () => void
}
const MenuDestokp = ({ onOpen }: SidebarCartProps) => {

  const { carrito } = useCarritoContext()
  return (
    <nav className='mx-auto my-0 w-[90%] xl:w-[1280px]  '>
      <div
        className={`w-full hidden  
            text-primary-600  md:flex items-center justify-between`}
      >
        <Link href='/' passHref>
          <div className='flex'>
            <Image
              className='cursor-pointer'
              src='/imgs/logos/logo-horizontal.svg'
              width={200}
              height={80}
              alt='logo'
            />
          </div>
        </Link>
        <div className='flex items-center gap-8'>
          <ul className='  flex relative font-semibold'>
            <li className='p-7 cursor-pointer '>
              <Link href='/' passHref>
                Inicio
              </Link>
            </li>
            <li className='p-7 cursor-pointer'>
              <Link href='/nosotros' passHref>
                Nosotros
              </Link>
            </li>
            <li className='p-7 cursor-pointer'>
              <Link href='/servicios' passHref>
                Servicios
              </Link>
            </li>
            <li className='p-7 cursor-pointer'>
              <Link href='/tienda' passHref>
                Tienda
              </Link>
            </li>
            <li className='p-7 cursor-pointer'>
              <Link href='/proyectos' passHref>
                Proyectos
              </Link>
            </li>
            <li className='p-7 cursor-pointer'>
              <Link href='/blogs' passHref>
                Blogs
              </Link>
            </li>
            <li className='p-7 cursor-pointer'>
              <Link href='/contactos' passHref>
                Contactos
              </Link>
            </li>
          </ul>
          <div className='flex gap-10'>
            <div className="relative p-1 cursor-pointer" onClick={() => onOpen()}>
              <IconCart height={25} width={25} />
              {carrito.length > 0 && (
                <div className="flex justify-center items-center  absolute top-0 right-0 rounded-full h-4 w-4 bg-primary-300 text-white text-[8px]">
                  {carrito.length}
                </div>
              )}
            </div>

            <button>
              <IconUser height={25} width={25} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MenuDestokp
