import React from 'react'
import Image from 'next/image'
import Container from '../../components/container'

const Contactanos = () => {
 return (
  <div className="bg-primary-300">

   <div className="grid grid-cols-1 lg:grid-cols-[55%,45%] ">
    <div className="px-10 md:px-10 xl:px-0 pb-7 w-full md:w-[90%] md:mx-auto  xl:w-[90%] 2xl:w-[65%] xl:mx-auto">
     <h2 className='text-white font-bold text-4xl xl:text-6xl  pt-20'>Obtenga un estimado gratis</h2>
     <div className="">
      <h3 className='text-white font-bold text-xl mt-5 lg:mt-14'>Tu información</h3>
      <div className="flex flex-col gap-y-5 mt-6">
       <input type="text" className='w-full rounded h-12 text-black px-6' placeholder='Nombre' />
       <input type="text" className='w-full rounded h-12 text-black px-6' placeholder='Telefono' />
       <select
        className='w-full rounded h-12 px-6'
        name='service'
       >
        <option value='' disabled selected hidden className='text-gray-400' >Seleccione una opcion</option>
        <option value="">select 1</option>
        <option value="">select 2</option>
        <option value="">select 3</option>
       </select>
       <input type="text" className='w-full rounded h-12 text-black px-6' placeholder='E-mail' />
      </div>
      <div className="mt-10">
       <button className='bg-orange-300 text-white px-8 py-4 rounded uppercase duration-300 ease-in-out  hover:bg-white hover:text-orange-300'>
        Enviar
       </button>
      </div>

     </div>
    </div>
    <div className="p-10 sm:p-20 lg:p-0">
     <Image
      src='/imgs/formulario.jpg'
      alt="manos"
      width={'40'}
      height={'40'}
      sizes={'(max-width: 640px) 80vw, 640px'}
     />
    </div>
   </div>

  </div>
 )
}

export default Contactanos