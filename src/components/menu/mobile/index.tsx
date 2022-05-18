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
        <Link href='/' passHref>
          <div>
            <Image
              className='cursor-pointer'
              src='/imgs/logos/logo-horizontal.svg'
              width={200}
              height={80}
              alt='logo'
            />
          </div>
        </Link>
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
            <Link href='/' passHref>
              Inicio
            </Link>
          </li>
          <li
            className='cursor-pointer text-primary-600 py-2 font-semibold'
            onClick={() => setIsOpen(false)}
          >
            <Link href='/nosotros' passHref>
              Nosotros
            </Link>
          </li>
          <li
            className='cursor-pointer text-primary-600 py-2 font-semibold'
            onClick={() => setIsOpen(false)}
          >
            <Link href='/servicios' passHref>
              Servicios
            </Link>
          </li>
          <li
            className='cursor-pointer text-primary-600 py-2 font-semibold'
            onClick={() => setIsOpen(false)}
          >
            <Link href='/tienda' passHref>
              Tienda
            </Link>
          </li>
          <li
            className='cursor-pointer text-primary-600 py-2 font-semibold'
            onClick={() => setIsOpen(false)}
          >
            <Link href='/proyectos' passHref>
              Proyectos
            </Link>
          </li>
          <li
            className='cursor-pointer text-primary-600 py-2 font-semibold'
            onClick={() => setIsOpen(false)}
          >
            <Link href='/blogs' passHref>
              Blogs
            </Link>
          </li>
          <li
            className='cursor-pointer text-primary-600 py-2 font-semibold'
            onClick={() => setIsOpen(false)}
          >
            <Link href='/contactos' passHref>
              Contactos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MenuMobile
