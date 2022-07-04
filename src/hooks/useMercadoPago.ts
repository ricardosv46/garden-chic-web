import { ChangeEvent, useEffect, useState } from 'react'
import useScript from './useScript'
import { mercadoPagoFormConfig } from '../data/mercadoPagoformConfig'

interface IProps {
  monto: number
  pago: any
}

interface Pago {
  token: string
  payment_method_id: string
  installments: number
}

const useMercadoPago = ({ monto = 0, pago }: IProps) => {
  const [resultPayment, setResultPayment] = useState({})

  const { MercadoPago } = useScript({
    url: 'https://sdk.mercadopago.com/js/v2',
    name: 'MercadoPago'
  }) as any

  useEffect(() => {
    if (MercadoPago && monto != 0) {
      console.log('INIT_MERCADO_PAGO')

      const mp = new MercadoPago('TEST-0ff678c6-d074-4dab-8b05-076734e5e8d2')
      const cardForm = mp.cardForm({
        amount: monto.toString(),
        autoMount: true,
        form: mercadoPagoFormConfig,
        callbacks: {
          onFormMounted: (error: any) => {
            if (error)
              return console.warn('Form Mounted handling error: ', error)
            console.log('Form mounted')
          },
          onSubmit: (event: ChangeEvent<HTMLFormElement>) => {
            event.preventDefault()
            const {
              paymentMethodId: payment_method_id,
              issuerId: issuer_id,
              cardholderEmail: email,
              amount,
              token,
              installments,
              identificationNumber,
              identificationType
            } = cardForm.getCardFormData()

            pago({
              token,
              payment_method_id,
              installments: Number(installments)
            })
          },
          onFetching: (resource: any) => {
            console.log('Fetching resource: ', resource)
          }
        }
      })
    }
  }, [MercadoPago])

  return resultPayment
}

export default useMercadoPago
