import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import IconCart from '../../../../public/icons/IconCart'
import BtnBurger from '../../btnBurger'

import Container from '../../container'
import SidebarCart from '../../sidebarCart'
import style from '../index.module.css'

interface SidebarCartProps {
  onOpen: () => void
}

const MenuMobile = ({ onOpen }: SidebarCartProps) => {
  const [isOpen, setIsOpen] = useState(false)



  return (
    <>
      <nav className='mx-auto my-0 w-[90%] xl:w-[1280px]'>
        <div className='flex justify-between items-center  '>
          <Link href='/' passHref>
            <div className='flex'>
              <Image
                className='cursor-pointer'
                src='/imgs/logos/logo-horizontal.svg'
                width={175}
                height={70}
                alt='logo'
              />
            </div>
          </Link>
          <div className="flex gap-x-10 text-primary-600">
            <button onClick={() => onOpen()}>
              <IconCart height={30} width={30} />
            </button>
            <BtnBurger isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <ul
            className={`${style['menu-mobile']} ${isOpen && style['menu-mobile-active']
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

    </>

  )
}

export default MenuMobile
