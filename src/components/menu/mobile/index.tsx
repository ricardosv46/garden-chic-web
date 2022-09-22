import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import IconCart from '../../../../public/icons/IconCart'
import IconUser from '../../../../public/icons/IconUser'
import { useCarritoContext } from '../../../context/carrito/CarritoState'
import BtnBurger from '../../btnBurger'
import { DivUser } from '../components/DivUser'
import style from '../index.module.css'

interface SidebarCartProps {
	onOpen: () => void
	setModalLogin: (value: boolean) => void
	setCerrar: Dispatch<SetStateAction<boolean>>
	cerrar: boolean
	handleSignOut: () => void
}

const MenuMobile = ({ onOpen, setModalLogin, cerrar, setCerrar, handleSignOut }: SidebarCartProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [open, setOpen] = useState(false)
	const { carrito } = useCarritoContext()
	// const [scrollDirection, setScrollDirection] = useState<number>();

	// const WrapperShowLogout = useRef<HTMLDivElement>(null);

	// const handleHideDropdown = (event: KeyboardEvent) => {
	//   if (event.key === "Escape") {
	//     setCerrar(false);
	//   }
	// };

	// const handleClickOutside = (event: Event) => {
	//   if (
	//     WrapperShowLogout.current &&
	//     !WrapperShowLogout.current.contains(event.target as Node)
	//   ) {
	//     setCerrar(false);
	//   }
	// };

	// useEffect(() => {
	//   document.addEventListener("keydown", handleHideDropdown, true);
	//   document.addEventListener("click", handleClickOutside, true);
	//   return () => {
	//     document.removeEventListener("keydown", handleHideDropdown, true);
	//     document.removeEventListener("click", handleClickOutside, true);
	//   };
	// });

	// useEffect(() => {
	//   document.addEventListener("scroll", () => setCerrar(false), true)
	//   return () => {
	//     document.addEventListener("scroll", () => setCerrar(false), true)
	//   };
	// }, [])

	return (
		<nav className='mx-auto my-0 w-[90%] xl:w-[1280px] lg:hidden'>
			<div className='flex items-center justify-between '>
				<Link href='/' passHref>
					<div className='flex'>
						<Image className='cursor-pointer' src='/imgs/logos/HORIZONTAL.svg' width={175} height={70} alt='logo' />
					</div>
				</Link>
				<div className='flex gap-x-9 text-garden-option1'>
					<div className='flex gap-x-4'>
						{/* <div
              className='relative p-1 cursor-pointer'
              ref={WrapperShowLogout} 
              onClick={() => setCerrar(!cerrar)}
            >
              <IconUser height={25} width={25} />
            </div> */}
						<DivUser setModalLogin={setModalLogin} cerrar={cerrar} setCerrar={setCerrar} handleSignOut={handleSignOut} />
						<div className='relative p-1 cursor-pointer' onClick={() => onOpen()}>
							<IconCart height={25} width={25} />
							{carrito?.length > 0 && (
								<div className='flex justify-center items-center  absolute top-0 right-0 rounded-full h-4 w-4 bg-garden-option1 text-white text-[8px]'>
									{carrito?.length}
								</div>
							)}
						</div>
					</div>

					<BtnBurger isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
				<ul className={`${style['menu-mobile']} ${isOpen && style['menu-mobile-active']} text-center font-garden_medium `}>
					<li className='py-2 cursor-pointer text-garden-option1 ' onClick={() => setIsOpen(false)}>
						<Link href='/' passHref>
							Inicio
						</Link>
					</li>
					<li className='py-2 cursor-pointer text-garden-option1 ' onClick={() => setIsOpen(false)}>
						<Link href='/nosotros' passHref>
							Nosotros
						</Link>
					</li>
					<li className='py-2 cursor-pointer text-garden-option1 ' onClick={() => setIsOpen(false)}>
						<Link href='/servicios' passHref>
							Servicios
						</Link>
					</li>
					<li className='py-2 cursor-pointer text-garden-option1 ' onClick={() => setIsOpen(false)}>
						<Link href='/tienda' passHref>
							Tienda
						</Link>
					</li>
					<li className='py-2 cursor-pointer text-garden-option1 ' onClick={() => setIsOpen(false)}>
						<Link href='/proyectos' passHref>
							Proyectos
						</Link>
					</li>
					<li className='py-2 cursor-pointer text-garden-option1 ' onClick={() => setIsOpen(false)}>
						<Link href='/blogs' passHref>
							Blog
						</Link>
					</li>
					<li className='py-2 cursor-pointer text-garden-option1 ' onClick={() => setIsOpen(false)}>
						<Link href='/contactos' passHref>
							Contacto
						</Link>
					</li>
					{/* <li
              className='px-10 py-2 mx-auto mt-4 font-semibold text-white transition-all duration-300 border rounded-full shadow-lg cursor-pointer w-min bg-garden-option1 border-garden-option1 hover:bg-white hover:text-garden-option1'
              onClick={() => setIsOpen(false)}
            >
              Login
            </li> */}
				</ul>
			</div>
		</nav>
	)
}

export default MenuMobile
