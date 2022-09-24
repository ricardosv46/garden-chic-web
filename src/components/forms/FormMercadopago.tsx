import Image from 'next/image'
import React, { MutableRefObject, RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'
// import 'react-credit-cards/es/styles-compiled.css'
// import Card from 'react-credit-cards'
import useForm from '../../hooks/useForm'
import useMercadoPago from '../../hooks/useMercadoPago'
import InputFloat from '../inputs/InputFloat'
import SelectMercadoPago from '../select/SelectMercadoPago'

interface IProps {
  pago: any
  total: number
  setShow: React.Dispatch<React.SetStateAction<string>>
  error: boolean
}

const cardType = {
  amex: '3',
  visa: '4',
  mastercard: '5'
}

const FormMercadopago = ({ pago, total, setShow, error }: IProps) => {
  const [bank, setBank] = useState('selecccione')
  const [tipoDocu, setTipoDocu] = useState('selecccione')
  const [cuotas, setCuotas] = useState('selecccione')
  const [disabledSelect, setDisabledSelect] = useState(false)

  const [cardRotate, setCardRotate] = useState(false)
  const [imgLogo, setImgLogo] = useState('')

  const { cardNumber, expiration, cardExpirationMonth, cardExpirationYear, cvc, cardholderName, focus, onChange, onFocus } = useForm({
    cardNumber: '',
    expiration: '',
    cardExpirationYear: '',
    cardExpirationMonth: '',
    cvc: '',
    cardholderName: '',
    focus: 'cardNumber' as any
  })

  useEffect(() => {
    const select = document.getElementById('form-checkout__installments') as any

    const myOptions = Array.prototype.slice.call(select?.options)

    const cantSelect = myOptions.filter((i) => i.disabled === false).map((i) => i.value)

    if (cantSelect.length > 1 && cardNumber.length > 15) {
      setDisabledSelect(false)
    } else {
      setDisabledSelect(true)
    }
  }, [cardNumber])

  const bgImage = () => {
    if (imgLogo === cardType.amex) return 'bg-backg-amex'
    if (imgLogo === cardType.visa) return 'background-visa'
    if (imgLogo === cardType.mastercard) return 'background-mastercard'
    return 'background-img'
  }

  const resultPayment = useMercadoPago({ monto: total, pago })

  return (
    <div className='flex flex-col items-center justify-center '>
      <h2 className='text-4xl font-bold text-center text-garden-option1 xl:text-6xl '>Termina tu compra</h2>
      <div className='w-full md:w-[500px] h-auto '>
        <div onClick={() => setCardRotate(!cardRotate)} className='cursor-pointer w-[325px] h-[210px] mx-auto md:h-[250px] md:w-[400px] mt-8'>
          <div
            className={`card-container select-none text-white
            ${cardRotate && 'active'} relative z-20 mx-auto`}>
            {/* FRONT */}
            <div
              className={`card-bank overflow-hidden p-5 card-bank-front rounded-lg bg-cover bg-center
              shadow-[0_25px_10px_-15px_rgba(0,0,0,0.3)] ${bgImage()} text-sm h-[210px] md:h-[250px]`}>
              <div className='min-h-[50px] md:h-[80px]'>
                {imgLogo === '4' && (
                  <div className='w-20 ml-auto md:w-32'>
                    <Image src='/imgs/creditCard/visa.png' alt='visa logo' className='object-cover' width={'100%'} height={70} layout='responsive' />
                  </div>
                )}
                {imgLogo === '5' && (
                  <div className='w-20 ml-auto md:w-32'>
                    <Image src='/imgs/creditCard/mastercard.png' alt='mastercard logo' className='object-cover' width={'100%'} height={70} />
                  </div>
                )}
                {imgLogo === '3' && (
                  <div className='w-20 ml-auto md:w-32'>
                    <Image src='/imgs/creditCard/americanexold.png' alt='american express logo' className='object-cover' width={'100%'} height={60} />
                  </div>
                )}
                {!imgLogo && <div className='w-24 h-10 ml-auto bg-gray-600 rounded md:h-12'></div>}
              </div>
              <div className='w-[40px]'>
                <Image src='/imgs/creditCard/chip-tarjeta.png' alt='chip' width={'100%'} height={'100%'} />
              </div>
              <div className=''>
                <div className='drop-shadow-[1px_1px_4px_rgba(20,10,10,1)]'>
                  <p className='md:text-2xl'>{cardNumber || '#### #### #### ####'}</p>
                  {/* <p className="md:text-2xl">{"#### #### #### ####"}</p> */}
                </div>

                <div className='flex justify-between mt-4'>
                  <div className=''>
                    <p className='text-sm text-garden-option3'>Name</p>
                    <div className='uppercase name'>{cardholderName || 'Jhon Doe'}</div>
                    {/* <div className="uppercase name">{"Jhon Doe"}</div> */}
                  </div>
                  <div className=''>
                    <p className='text-sm text-garden-option3'>Expiration</p>
                    <p className='uppercase'>
                      {/* {"MM/YY"} */}
                      {cardExpirationMonth ? cardExpirationMonth + '/' + cardExpirationYear : 'MM/YY'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BACK */}
            <div
              className={`card-bank p-5 card-bank-back absolute top-0 left-0 w-full rounded-lg
              overflow-hidden bg-cover shadow-[0_25px_10px_-15px_rgba(0,0,0,0.3)]
              ${bgImage()} h-[210px] md:h-[250px]`}>
              <div className='absolute left-0 right-0 w-full h-10 bg-black md:h-12'></div>
              <div className='flex items-center mt-14'>
                <div className='flex flex-col w-8/12'>
                  <small className='w-20 h-3 my-1 bg-gray-600 rounded md:h-4'></small>
                  <div className='w-full h-6 info md:h-8'></div>
                </div>
                <div className='flex flex-col'>
                  <small>CCV</small>
                  {/* <div className="h-5 px-2 italic bg-white md:h-7 text-garden-option3">{"ccv"}</div> */}
                  <div className='h-5 px-2 italic bg-white md:h-7 text-garden-option3'>{cvc || 'ccv'}</div>
                </div>
              </div>
              <div className='mt-6'>
                <small className='block w-32 h-3 my-1 bg-gray-600 rounded md:h-4'></small>
                <small className='block h-3 my-1 bg-gray-600 rounded w-44 md:h-4'></small>
                <small className='block w-32 h-3 my-1 bg-gray-600 rounded md:h-4'></small>
              </div>
            </div>
          </div>
        </div>

        <form id='form-checkout' className='flex flex-col mt-10 gap-y-5'>
          <InputFloat
            required
            type='text'
            label='Numero Tarjeta'
            name='cardNumber'
            id='form-checkout__cardNumber'
            htmlFor='form-checkout__cardNumber'
            value={cardNumber}
            maxLength={19}
            onChange={(e) => {
              const valor = e.target.value
                .replace(/\s/g, '')
                .replace(/\D/g, '')
                .replace(/([0-9]{4})/g, '$1 ')
                .trim()
              e.target.value = valor
              setImgLogo(valor[0])
              onChange(e)
            }}
            onFocus={(e) => {
              setCardRotate(false)
              onFocus(e)
            }}
          />
          <InputFloat
            required
            type='text'
            name='cardholderName'
            id='form-checkout__cardholderName'
            htmlFor='form-checkout__cardholderName'
            label='Titular de la tarjeta'
            onChange={onChange}
            onFocus={(e) => {
              setCardRotate(false)
              onFocus(e)
            }}
            className='w-full uppercase'
          />
          <div className='flex flex-col gap-5 md:flex-row '>
            <InputFloat
              required
              type='text'
              label='Mes de vencimiento'
              name='cardExpirationMonth'
              id='form-checkout__cardExpirationMonth'
              htmlFor='form-checkout__cardExpirationMonth'
              onChange={(e) => {
                const valor = e.target.value
                  .replace(/\s/g, '')
                  .replace(/\D/g, '')
                  .replace(/([0-9]{4})/g, '$1 ')
                  .trim()
                e.target.value = valor
                onChange(e)
              }}
              onFocus={(e) => {
                setCardRotate(false)
                onFocus(e)
              }}
              maxLength={2}
            />
            <InputFloat
              required
              type='text'
              name='cardExpirationYear'
              id='form-checkout__cardExpirationYear'
              htmlFor='form-checkout__cardExpirationYear'
              label='Año de vencimiento'
              maxLength={2}
              onChange={(e) => {
                const valor = e.target.value
                  .replace(/\s/g, '')
                  .replace(/\D/g, '')
                  .replace(/([0-9]{4})/g, '$1 ')
                  .trim()
                e.target.value = valor
                onChange(e)
              }}
              onFocus={(e) => {
                setCardRotate(false)
                onFocus(e)
              }}
            />

            <InputFloat
              required
              type='text'
              name='cvc'
              id='form-checkout__securityCode'
              htmlFor='form-checkout__securityCode'
              label='Codigo seguridad'
              maxLength={4}
              pattern={'[0-9]{0,5}'}
              value={cvc}
              onChange={(e) => e.target.validity.valid && onChange(e)}
              onFocus={(e) => {
                setCardRotate(true)
                onFocus(e)
              }}
            />
            {/* <InputFloat
              required
              type='text'
              name='cardExpirationYear'
              id='form-checkout__cardExpirationYear'
              htmlFor='form-checkout__cardExpirationYear'
              label='Año de vencimiento'
              onChange={onChange}
              onFocus={e => {
                setCardRotate(false)
                onFocus(e)
              }}
            /> */}
          </div>
          <InputFloat
            required
            type='email'
            name='cardholderEmail'
            id='form-checkout__cardholderEmail'
            htmlFor='form-checkout__cardholderEmail'
            label='E-mail'
            onChange={onChange}
            onFocus={onFocus}
          />
          <SelectMercadoPago hidden={disabledSelect} label='Banco emisor' id='form-checkout__issuer' value={bank} onChangevalue={setBank} data={[]} />
          <SelectMercadoPago label='Tipo Documento' id='form-checkout__identificationType' value={tipoDocu} onChangevalue={setTipoDocu} data={[]} />
          <InputFloat
            type='number'
            name='identificationNumber'
            id='form-checkout__identificationNumber'
            htmlFor='form-checkout__identificationNumber'
            label='Numero de documento'
            onChange={onChange}
            onFocus={onFocus}
          />
          <SelectMercadoPago
            hidden={disabledSelect}
            required
            label='Cuotas'
            id='form-checkout__installments'
            value={cuotas}
            onChangevalue={setCuotas}
            data={[]}
          />
          {error && (
            <div className='py-3 bg-red-400 rounded-md border-lg'>
              <p className='font-semibold text-center text-red-600'>No se pudo completar el pago</p>
            </div>
          )}

          <div className='flex items-center justify-between pt-5'>
            <p
              onClick={() => {
                setShow('formulario')
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })
              }}
              className='text-red-500 underline cursor-pointer'>
              Regresar
            </p>
            <button
              id='form-checkout__submit'
              type='submit'
              className='px-10 py-4 text-white uppercase duration-300 ease-in-out border-2 rounded-full bg-garden-option1 hover:border-garden-option1 hover:bg-white hover:text-garden-option1'>
              Pagar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormMercadopago
