import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import FormLogin from '../authForm/formLogin'
import FormRegister from '../authForm/formRegister'

import MenuDestokp from '../menu/desktop/index'
import MenuMobile from '../menu/mobile'
import Modal from '../modal'
import ModalLogin from '../modal/modalLogin'
import SidebarCart from '../sidebarCart'

const Header = () => {
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [modalLogin, setModalLogin] = useState(false)

  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>()

  const [tipoForm, setTipoForm] = useState('registrate')

  const asignarFormulario = () => {
    let component = null

    if (tipoForm === 'ingresar') {
      component = <FormLogin />
    } else if (tipoForm === 'registrate') {
      component = <FormRegister />
    }

    return component
  }

  const cambiarFormulario = () => {
    if (tipoForm === 'ingresar') {
      setTipoForm('registrate')
    } else if (tipoForm === 'registrate') {
      setTipoForm('ingresar')
    }
  }

  const textoBtnCambiarForm = () => {
    const textos = []

    if (tipoForm === 'ingresar') {
      textos[0] = 'Si no tienes una cuenta '
      textos[1] = 'regístrate aquí'
      textos[2] = 'Iniciar sesión'
      textos[3] = 'Ingresar'
    } else if (tipoForm === 'registrate') {
      textos[0] = 'Si ya tienes una cuenta '
      textos[1] = 'ingrese por aquí'
      textos[2] = 'Regístrate'
      textos[3] = 'Regístrate'
    }

    return textos
  }

  useEffect(() => {
    let lastScrollY = window.pageYOffset
    console.log(lastScrollY)

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener('scroll', updateScrollDirection)
    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [scrollDirection])

  return (
    <>
      <div
        className={`hidden sticky w-full  lg:block ${
          scrollDirection === 'down' ? '-top-24' : 'top-0'
        }  bg-white z-40 shadow-lg  transition-all duration-500`}
      >
        <MenuDestokp
          onOpen={() => setIsOpenCart(true)}
          setModalLogin={() => setModalLogin(true)}
        />
      </div>
      <div
        className={`lg:hidden sticky w-full  ${
          scrollDirection === 'down' ? '-top-24' : 'top-0'
        }  bg-white z-40 shadow-lg  transition-all duration-500`}
      >
        <MenuMobile
          onOpen={() => setIsOpenCart(true)}
          setModalLogin={() => setModalLogin(true)}
        />
      </div>

      <SidebarCart isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />

      <ModalLogin isOpen={modalLogin} onClose={() => setModalLogin(false)} />
    </>
  )
}

export default Header
