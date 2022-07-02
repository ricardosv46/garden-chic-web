import React, { useState } from 'react'
import Container from '../../components/container'
import InputArea from '../../components/inputs/InputArea'
import InputFloat from '../../components/inputs/InputFloat'
import Select from '../../components/select'
import SelectMercadoPago from '../../components/select/SelectMercadoPago'
import useForm from '../../hooks/useForm'
import useMercadoPago from '../../hooks/useMercadoPago'
import { useDepartamentos } from '../../services/useDepartamentos'
import { useDistritos } from '../../services/useDistritos'
import { useProvincias } from '../../services/useProvincias'

const Comprar = () => {
  const [pagar, setPagar] = useState(true)
  const [depa, setDepa] = useState('')
  const [prov, setProv] = useState('')
  const [dist, setDist] = useState('')
  const [bank, setBank] = useState('')
  const [tipoDocu, setTipoDocu] = useState('')
  const [cuotas, setCuotas] = useState('')

  const { ruc, razonSocial, celular, direccion, onChange } = useForm({
    ruc: '',
    razonSocial: '',
    celular: '',
    direccion: ''
  })

  const { db: departamentos } = useDepartamentos()
  const { db: provincias } = useProvincias({ DepCode: depa.toString() })
  const { db: distritos } = useDistritos({ ProCode: prov.toString() })
  const resultPayment = useMercadoPago({ monto: 100 })
  const dataDepartamentos = departamentos.map((depa) => ({
    value: depa?.DeparCodi!,
    titulo: depa?.DeparNom!
  }))

  const dataProvincias = provincias.map((prov) => ({
    value: prov?.ProvCodi!,
    titulo: prov?.ProvNom!
  }))
  const dataDistritos = distritos.map((prov) => ({
    value: prov?.DistCodi!,
    titulo: prov?.DistNom!
  }))

  return (
    <Container className='py-10'>
      {pagar ? (
        <div className='flex justify-center '>
          <div className='w-full md:w-2/5 h-auto '>
            <h2 className='text-primary-300 font-bold text-4xl xl:text-6xl text-center  '>
              Completa tu información
            </h2>

            {/* <form id='form-checkout'>
              <div className='form-control'>
                <input
                  type='tel'
                  name='cardNumber'
                  id='form-checkout__cardNumber'
                />
              </div>
              <div className='form-control'>
                <input
                  type='tel'
                  name='cardExpirationMonth'
                  id='form-checkout__cardExpirationMonth'
                />
                <input
                  type='tel'
                  name='cardExpirationYear'
                  id='form-checkout__cardExpirationYear'
                />
                <input type='tel' name='cvc' id='form-checkout__securityCode' />
              </div>
              <div className='form-control'>
                <input
                  type='text'
                  name='cardholderName'
                  id='form-checkout__cardholderName'
                />
                <input
                  type='email'
                  name='cardholderEmail'
                  id='form-checkout__cardholderEmail'
                />
              </div>
              <div className='form-control'>
                <select name='issuer' id='form-checkout__issuer'></select>
                <select
                  name='identificationType'
                  id='form-checkout__identificationType'
                ></select>
              </div>
              <div className='form-control'>
                <input
                  type='text'
                  name='identificationNumber'
                  id='form-checkout__identificationNumber'
                />
              </div>
              <div className='form-control'>
                <select
                  name='installments'
                  id='form-checkout__installments'
                ></select>
              </div>
              <div className='form-control'>
                <button type='submit' id='form-checkout__submit'>
                  Pagar
                </button>
              </div>
              <progress value='0' className='progress-bar'>
                Cargando...
              </progress>
            </form> */}

            <form id='form-checkout' className='flex flex-col gap-y-5 mt-10  '>
              <InputFloat
                required
                type='number'
                label='Numero Tarjeta'
                name='form-checkout__cardNumber'
                id='form-checkout__cardNumber'
                className='appearance-none w-full'
              />
              <div className='flex flex-col md:flex-row  gap-5 '>
                <InputFloat
                  required
                  type='number'
                  name='form-checkout__cardExpirationMonth'
                  id='form-checkout__cardExpirationMonth'
                  label='Mes de vencimiento'
                />
                <InputFloat
                  required
                  type='number'
                  name='form-checkout__cardExpirationYear'
                  id='form-checkout__cardExpirationYear'
                  label='Año de vencimiento'
                />
                <InputFloat
                  required
                  type='number'
                  name='form-checkout__securityCode'
                  id='form-checkout__securityCode'
                  label='Codigo seguridad'
                />
              </div>
              <InputFloat
                required
                type='text'
                name='form-checkout__cardholderName'
                id='form-checkout__cardholderName'
                label='Titular de la tarjeta'
              />
              <InputFloat
                required
                type='email'
                name='form-checkout__cardholderEmail'
                id='form-checkout__cardholderEmail'
                label='E-mail'
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
                name='form-checkout__identificationNumber'
                id='form-checkout__identificationNumber'
                label='Numero de documento'
              />
              <SelectMercadoPago
                required
                label='Cuotas'
                id='form-checkout__installments'
                value={cuotas}
                onChangevalue={setCuotas}
                data={[]}
              />
              <div className='flex justify-center pt-5'>
                <button
                  onClick={() => {
                    console.log({ resultPayment })
                  }}
                  type='submit'
                  className='bg-primary-300 text-white border-2 px-10 py-4 rounded-full uppercase duration-300 ease-in-out hover:border-primary-300  hover:bg-white hover:text-primary-300'
                >
                  Pagar
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className='flex justify-center '>
          <div className='w-full md:w-2/5 h-auto '>
            <h2 className='text-primary-300 font-bold text-4xl xl:text-6xl text-center  '>
              Completa tu información
            </h2>
            <div>
              <form
                onSubmit={() => setPagar(true)}
                className='flex flex-col gap-y-5 mt-10  '
              >
                <InputFloat
                  required
                  type='text'
                  label='Ruc'
                  name='ruc'
                  value={ruc}
                  onChange={onChange}
                />
                <InputFloat
                  required
                  type='text'
                  label='Razon Social'
                  name='razonSocial'
                  value={razonSocial}
                  onChange={onChange}
                />

                <div className='flex flex-col md:flex-row  gap-5 '>
                  <Select
                    required
                    label='Departamento'
                    value={depa}
                    onChangevalue={setDepa}
                    data={dataDepartamentos!}
                  />

                  <Select
                    required
                    disabled={depa ? false : true}
                    label='Provincia'
                    value={prov}
                    onChangevalue={setProv}
                    data={dataProvincias!}
                  />

                  <Select
                    disabled={prov ? false : true}
                    label='Distrito'
                    value={dist}
                    onChangevalue={setDist}
                    data={dataDistritos!}
                    required
                  />
                </div>
                <div className='flex flex-col lg:flex-row gap-5 '></div>
                <InputFloat
                  required
                  type='text'
                  label='Celular'
                  name='celular'
                  value={celular}
                  onChange={onChange}
                />
                <InputFloat
                  required
                  type='text'
                  label='Dirección'
                  name='direccion'
                  value={direccion}
                  onChange={onChange}
                />

                <div className='flex justify-center pt-5'>
                  <button
                    type='submit'
                    className='bg-primary-300 text-white border-2 px-10 py-4 rounded-full uppercase duration-300 ease-in-out hover:border-primary-300  hover:bg-white hover:text-primary-300'
                  >
                    Pagar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

export default Comprar
