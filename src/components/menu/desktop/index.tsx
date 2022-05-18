import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const MenuDestokp = () => {
  return (
    <nav className='mx-auto my-0 w-[90%] xl:w-[1280px]  '>
      <div
        className={`w-full   hidden  
            text-primary-600  md:flex items-center justify-between`}
      >
        <Link href='/' passHref>
          <div>
            <Image
              className='cursor-pointer'
              src='/imgs/logos/logo-horizontal.svg'
              width={250}
              height={100}
              alt='logo'
            />
          </div>
        </Link>
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
      </div>
    </nav>
  )
}

export default MenuDestokp
