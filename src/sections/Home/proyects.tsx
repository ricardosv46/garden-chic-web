import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Container from '../../components/container'
import { dataProyects, } from '../../data/dataProyectos'
import { Tittle, Subttitles, SelectSubtittles } from '@components/common'
import { ProyectItem } from '@components/proyects'

const Proyects = () => {
  const [show, setShow] = useState(false)
  const router = useRouter()
  return (
    <Container bgColor='bg-[#F9FAFB]' className='pt-10 pb-20'>
      <div className='flex flex-col items-center justify-center '>
        <Tittle tittle='Proyectos' />
        {/* sub Tittle Desktop */}
        <Subttitles data={['Todo',
          'Eventos',
          'Jardines ',
          'Mantenimiento',
          'Paisajismo',
          'Sistema de Riego ',
          'Impermeabilización',
          'Techos Verdes',
          'Vivero'
        ]} />
        {/* sub Tittle Mobile */}
        <SelectSubtittles data={['Todo',
          'Eventos',
          'Jardines ',
          'Mantenimiento',
          'Paisajismo',
          'Sistema de Riego ',
          'Impermeabilización',
          'Techos Verdes',
          'Vivero'
        ]} />
      </div>
      {/* 6 imagenes por defecto */}
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-10 '>
        {dataProyects.map((obj, index) => {
          if (index < 6) {
            return < ProyectItem key={index} data={obj} />
          }
        })}
      </div>
      {/* Boton cargas más */}
      <div className={`flex justify-center mt-10 ${show ? 'hidden' : 'block'}`}>
        {!show && (
          <button
            onClick={() => setShow(true)}
            className='bg-primary-600 text-white px-8 py-2.5 rounded-full ease-out duration-300 hover:bg-primary-800 font-garden_regular'
          >
            Cargar más
          </button>
        )}
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-5'>
        {show &&
          dataProyects.map((obj, index) => {
            if (index > 5) {
              return < ProyectItem key={index} data={obj} />
            }
          })}
      </div>
    </Container>
  )
}

export default Proyects
