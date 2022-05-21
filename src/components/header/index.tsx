import React, { useEffect, useState } from 'react'

import MenuDestokp from '../menu/desktop/index'
import MenuMobile from '../menu/mobile'

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  let lastScrollTop = 0

  window.addEventListener(
    'scroll',
    function () {
      var st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
      lastScrollTop = st
    },
    false
  )

  return (
    <>
      <div className={`hidden lg:block  sticky top-0  bg-white z-50 shadow-lg`}>
        <MenuDestokp />
      </div>
      <div className={`lg:hidden  sticky top-0  bg-white z-50 shadow-lg`}>
        <MenuMobile />
      </div>
    </>
  )
}

export default Header
