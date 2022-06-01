import React from 'react'

const FormLogin = () => {
 return (
  <div className="flex flex-col gap-y-5 ">
   <input type="text" className='border border-gray-400 rounded focus:outline-none focus:border-primary-600 focus:ring-primary-600 focus:ring-1 w-full h-10 px-4 placeholder:font-normal placeholder:text-sm' placeholder='Correo' />
   <input type="text" className='border border-gray-400 rounded focus:outline-none focus:border-primary-600 focus:ring-primary-600 focus:ring-1 w-full h-10 px-4 placeholder:font-normal placeholder:text-sm' placeholder='Contraseña' />
  </div>
 )
}

export default FormLogin
