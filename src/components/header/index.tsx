import React, { useEffect, useState } from 'react'

import MenuDestokp from '../menu/desktop/index'
import MenuMobile from '../menu/mobile'
import SidebarCart from '../sidebarCart'

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)


  return (
    <>
      <div className={`hidden lg:block  sticky top-0  bg-white z-40 shadow-lg`}>
        <MenuDestokp onOpen={() => setIsOpenCart(true)} />
      </div>
      <div className={`lg:hidden  sticky top-0  bg-white z-40 shadow-lg`}>
        <MenuMobile onOpen={() => setIsOpenCart(true)} />
      </div>

      <SidebarCart isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />
    </>
  )
}

export default Header
