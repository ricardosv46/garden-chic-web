import React from 'react'

import MenuDestokp from '../menu/desktop/index'
import MenuMobile from '../menu/mobile'

const Header = () => {
  return (
    <div className=''>
      <div className='hidden lg:block'>
        <MenuDestokp />
      </div>
      <div className='lg:hidden relative z-20'>
        <MenuMobile />
      </div>
    </div>
  )
}

export default Header
