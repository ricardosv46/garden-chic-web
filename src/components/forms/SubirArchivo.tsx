import Image from 'next/image'
import IconArrowLeft from 'public/icons/IconArrowLeft'
import React, { ChangeEvent, useState } from 'react'

interface Props {
  setShow: React.Dispatch<React.SetStateAction<string>>
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  tipoPago: string
  total: number
  show: string
  setImage: React.Dispatch<React.SetStateAction<any>>
  image: any
  pagoSinTarjeta: any
  loadingPedido: boolean
}

const SubirArchivo = ({ setShow, show, pagoSinTarjeta, setImage, image, loadingPedido }: Props) => {
  const [imagePrevios, setImagePrevios] = useState(null)

  const changeImage = (e?: any) => {
    setImage(e.target.files[0])
    if (e.target.files[0]) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e: any) => {
        e.preventDefault()
        setImagePrevios(e?.target?.result)
      }
    }
  }

  return (
    <div className='relative pt-0 lg:p-10'>
      <button
        onClick={() => {
          show === 'EfectivoIdUpload' ? setShow('EfectivoId') : setShow('TransferenciaId')

          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}
        className='absolute top-0 lg:left-20 p-1.5 text-white rounded-full bg-garden-option1'>
        <IconArrowLeft />
      </button>
      <h2 className='text-4xl font-bold text-center text-garden-option1'>Subir comprobante</h2>

      <h2 className='mt-10 text-xl font-bold text-center '>
        En este momento puede realizar el pago y adjuntar el comprobante para asegurar la reserva de su pedido.
      </h2>

      <div className='relative flex flex-col items-center justify-center w-full max-w-lg gap-1 p-5 mx-auto mt-5 text-sm font-bold text-center border border-gray-400 border-dashed rounded text-garden-option3 lg:text-lg h-72 relativ'>
        {!imagePrevios && (
          <>
            <p>Arrastre la imagen o haga click aquí</p>
            <p>Archivos permitidos: .jpg, .jpeg, .png</p>
          </>
        )}

        <input
          className='absolute z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer'
          type='file'
          accept='image/*'
          onChange={(e) => changeImage(e)}
        />
        {imagePrevios && <Image width={1000} height={1000} objectFit='contain' src={imagePrevios} alt='image' />}
      </div>
      <div className='flex justify-center pt-5'>
        <button
          disabled={!imagePrevios || loadingPedido}
          onClick={() => {
            show === 'EfectivoIdUpload' ? pagoSinTarjeta(2) : pagoSinTarjeta(1)
          }}
          type='button'
          className={`${
            !imagePrevios || loadingPedido
              ? 'bg-garden-option1 opacity-50'
              : 'bg-garden-option1 hover:border-garden-option1 hover:bg-white hover:text-garden-option1'
          } px-10 py-4 text-white uppercase duration-300 ease-in-out border-2 rounded-full `}>
          Completar Pago
        </button>
      </div>
    </div>
  )
}

export default SubirArchivo
