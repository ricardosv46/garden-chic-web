import { useRouter } from 'next/router'
import React from 'react'
import style from '../index.module.css'
const MenuDestokp = () => {
  const router = useRouter()
  return (
    <nav
      className={`${style.header} w-full px-20 py-3 hidden
            text-primary-600  md:flex items-center`}
    >
      <p className='relative text-3xl  font-bold font-mono'>Garden Chic</p>
      <ul className='  flex relative font-semibold'>
        <li className='p-7 cursor-pointer '>Inicio</li>
        <li
          onClick={() => router.push('nosotros')}
          className='p-7 cursor-pointer'
        >
          Nosotros
        </li>
        <li className='p-7 cursor-pointer'>Servicios</li>
        <li className='p-7 cursor-pointer'>Galeria</li>
        <li className='p-7 cursor-pointer'>Reseñas</li>
        <li onClick={() => router.push('blogs')} className='p-7 cursor-pointer'>
          Blogs
        </li>
        <li className='p-7 cursor-pointer'>Contactos</li>
      </ul>
    </nav>
  )
}

export default MenuDestokp
