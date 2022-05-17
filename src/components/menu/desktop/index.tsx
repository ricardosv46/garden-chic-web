import Link from 'next/link'
import React from 'react'
import style from '../index.module.css'
const MenuDestokp = () => {
  return (
    <nav className='mx-auto my-0 w-[90%] xl:w-[1280px]'>
      <div
        className={`${style.header} w-full  py-3 hidden
            text-primary-600  md:flex items-center justify-between`}
      >
        <p className='relative text-3xl  font-bold font-mono'>Garden Chic</p>
        <ul className='  flex relative font-semibold'>
          <li className='p-7 cursor-pointer '>
            <Link href={'/'}>Inicio</Link>
          </li>
          <li className='p-7 cursor-pointer'>
            <Link href={'/nosotros'}>Nosotros</Link>
          </li>
          <li className='p-7 cursor-pointer'>
            <Link href={'/servicios'}>Servicios</Link>
          </li>
          <li className='p-7 cursor-pointer'>
            <Link href={'/galeria'}>Galeria</Link>
          </li>
          <li className='p-7 cursor-pointer'>
            <Link href={'/reseñas'}>Reseñas</Link>
          </li>
          <li className='p-7 cursor-pointer'>
            <Link href={'/blogs'}>Blogs</Link>
          </li>
          <li className='p-7 cursor-pointer'>
            <Link href={'/contactos'}>Contactos</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MenuDestokp
