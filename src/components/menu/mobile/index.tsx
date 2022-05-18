import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import BtnBurger from '../../btnBurger'

import Container from '../../container'
import style from '../index.module.css'
const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='mx-auto my-0 w-[90%] xl:w-[1280px]'>
      <div className='flex justify-between items-center  '>
        <Image
          src='/imgs/logos/logo-horizontal.svg'
          width={200}
          height={80}
          alt='logo'
        />
        <BtnBurger isOpen={isOpen} setIsOpen={setIsOpen} />
        <ul
          className={`${style['menu-mobile']} ${
            isOpen && style['menu-mobile-active']
          } text-center `}
        >
          <li
            className='cursor-pointer text-primary-600 py-2 font-semibold'
            onClick={() => setIsOpen(false)}
          >
            <Link href={'/'}>Inicio</Link>
          </li>
          <li
            className='cursor-pointer text-primary-600 py-2 font-semibold'
            onClick={() => setIsOpen(false)}
          >
            <Link href={'/nosotros'}>Nosotros</Link>
          </li>
          <li
            className='cursor-pointer text-primary-600 py-2 font-semibold'
            onClick={() => setIsOpen(false)}
          >
            <Link href={'/servicios'}>Servicios</Link>
          </li>
          <li
            className='cursor-pointer text-primary-600 py-2 font-semibold'
            onClick={() => setIsOpen(false)}
          >
            <Link href={'/tienda'}>Tienda</Link>
          </li>
          <li
            className='cursor-pointer text-primary-600 py-2 font-semibold'
            onClick={() => setIsOpen(false)}
          >
            <Link href={'/reseñas'}>Reseñas</Link>
          </li>
          <li
            className='cursor-pointer text-primary-600 py-2 font-semibold'
            onClick={() => setIsOpen(false)}
          >
            <Link href={'/blogs'}>Blogs</Link>
          </li>
          <li
            className='cursor-pointer text-primary-600 py-2 font-semibold'
            onClick={() => setIsOpen(false)}
          >
            <Link href={'/contactos'}>Contactos</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MenuMobile
