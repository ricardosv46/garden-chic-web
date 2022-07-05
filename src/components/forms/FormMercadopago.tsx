import React, { useState } from 'react'
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

const FormMercadopago = ({ pago, total, setShow, error }: IProps) => {
  const [bank, setBank] = useState('selecccione')
  const [tipoDocu, setTipoDocu] = useState('selecccione')
  const [cuotas, setCuotas] = useState('selecccione')

  const {
    cardNumber,
    cardExpirationMonth,
    cardExpirationYear,
    cvc,
    cardholderName,
    focus,
    onChange,
    onFocus
  } = useForm({
    cardNumber: '',
    cardExpirationMonth: '',
    cardExpirationYear: '',
    cvc: '',
    cardholderName: '',
    focus: 'cardNumber' as any
  })

  const resultPayment = useMercadoPago({ monto: total, pago })

  return (
    <div className='flex flex-col items-center justify-center '>
      <h2 className='text-primary-300 font-bold text-4xl xl:text-6xl text-center  '>
        Termina tu compra
      </h2>
      <div className='w-full md:w-[500px] h-auto '>
        <div className=' flex justify-center py-10'>
          {/* <Card
            cvc={cvc}
            expiry={cardExpirationMonth + cardExpirationYear}
            name={cardholderName}
            number={cardNumber}
            focused={focus}
          /> */}
        </div>
        <form id='form-checkout' className='flex flex-col gap-y-5   '>
          <InputFloat
            required
            type='text'
            label='Numero Tarjeta'
            name='cardNumber'
            id='form-checkout__cardNumber'
            htmlFor='form-checkout__cardNumber'
            onChange={onChange}
            onFocus={onFocus}
          />
          <div className='flex flex-col md:flex-row  gap-5 '>
            <InputFloat
              required
              type='text'
              label='Mes de vencimiento'
              name='cardExpirationMonth'
              id='form-checkout__cardExpirationMonth'
              htmlFor='form-checkout__cardExpirationMonth'
              onChange={onChange}
              onFocus={onFocus}
            />
            <InputFloat
              required
              type='text'
              name='cardExpirationYear'
              id='form-checkout__cardExpirationYear'
              htmlFor='form-checkout__cardExpirationYear'
              label='Año de vencimiento'
              onChange={onChange}
              onFocus={onFocus}
            />
            <InputFloat
              required
              type='text'
              name='cvc'
              id='form-checkout__securityCode'
              htmlFor='form-checkout__securityCode'
              label='Codigo seguridad'
              onChange={onChange}
              onFocus={onFocus}
            />
          </div>
          <InputFloat
            required
            type='text'
            name='cardholderName'
            id='form-checkout__cardholderName'
            htmlFor='form-checkout__cardholderName'
            label='Titular de la tarjeta'
            onChange={onChange}
            onFocus={onFocus}
          />
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
          <SelectMercadoPago
            required
            label='Banco emisor'
            id='form-checkout__issuer'
            value={bank}
            onChangevalue={setBank}
            data={[]}
          />
          <SelectMercadoPago
            required
            label='Tipo Documento'
            id='form-checkout__identificationType'
            value={tipoDocu}
            onChangevalue={setTipoDocu}
            data={[]}
          />
          <InputFloat
            required
            type='number'
            name='identificationNumber'
            id='form-checkout__identificationNumber'
            htmlFor='form-checkout__identificationNumber'
            label='Numero de documento'
            onChange={onChange}
            onFocus={onFocus}
          />
          <SelectMercadoPago
            required
            label='Cuotas'
            id='form-checkout__installments'
            value={cuotas}
            onChangevalue={setCuotas}
            data={[]}
          />
          {error && (
            <div className='border-lg rounded-md bg-red-400 py-3'>
              <p className='text-red-600 text-center font-semibold'>
                No se pudo completar el pago
              </p>
            </div>
          )}

          <div className='flex justify-between items-center pt-5'>
            <p
              onClick={() => setShow('formulario')}
              className='text-red-500 underline cursor-pointer'
            >
              Regresar
            </p>
            <button
              id='form-checkout__submit'
              onClick={() => console.log(resultPayment)}
              type='submit'
              className='bg-primary-300 text-white border-2 px-10 py-4 rounded-full uppercase duration-300 ease-in-out hover:border-primary-300  hover:bg-white hover:text-primary-300'
            >
              Pagar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormMercadopago
