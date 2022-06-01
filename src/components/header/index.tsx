import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import FormLogin from '../authForm/formLogin'
import FormRegister from '../authForm/formRegister'

import MenuDestokp from '../menu/desktop/index'
import MenuMobile from '../menu/mobile'
import Modal from '../modal'
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
    let lastScrollY = window.pageYOffset;
    console.log(lastScrollY);


    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection]);



  return (
    <>
      <div className={`hidden sticky w-full  lg:block ${scrollDirection === "down" ? "-top-24" : "top-0"}  bg-white z-40 shadow-lg  transition-all duration-500`}>
        <MenuDestokp onOpen={() => setIsOpenCart(true)} setModalLogin={() => setModalLogin(true)} />
      </div>
      <div className={`lg:hidden sticky w-full  ${scrollDirection === "down" ? "-top-24" : "top-0"}  bg-white z-40 shadow-lg  transition-all duration-500`}>
        <MenuMobile onOpen={() => setIsOpenCart(true)} setModalLogin={() => setModalLogin(true)} />
      </div>

      <SidebarCart isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />

      {modalLogin &&
        (
          <Modal isOpen={modalLogin} onClose={() => setModalLogin(false)}>
            <div className="flex flex-col justify-center items-center bg-white max-w-xl w-full mx-10 rounded-2xl "
              onClick={(e) => e.stopPropagation()}>
              <div className='inline-block w-full md:w-192  h-[540px]  overflow-hidden text-left align-middle transition-all transform bg-transparent shadow-xl rounded-2xl'>
                <div className='flex w-full h-full'>
                  <div className='w-full hidden sm:flex items-center justify-center'>
                    <div style={{ backgroundImage: `url('/imgs/contactos/formulario.jpg` }} className={`flex-auto mt-5 lg:mt-0 bg-center  bg-cover bg-no-repeat w-full h-[700px] lg:h-[750px] `}>
                    </div>
                  </div>

                  <div className='w-full p-6 mt-5'>
                    <h2 className='text-blue font-bold text-2xl mb-10'>
                      {textoBtnCambiarForm()[2]}
                    </h2>

                    {asignarFormulario()}
                    <div className='mt-5 flex justify-end'>
                      <button className=' bg-primary-600 text-white cursor-pointer px-8 py-1 rounded-full '>
                        {textoBtnCambiarForm()[3]}
                      </button>
                    </div>
                    <div className='mt-3'>
                      <p className='text-base text-gray-400'>
                        {textoBtnCambiarForm()[0]}
                        <span
                          className='text-primary-300 cursor-pointer'
                          onClick={cambiarFormulario}
                        >
                          {textoBtnCambiarForm()[1]}
                        </span>{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}

    </>
  )
}

export default Header
