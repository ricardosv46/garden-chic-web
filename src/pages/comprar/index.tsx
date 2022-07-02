import React, { useState } from 'react'
import Container from '../../components/container'
import InputArea from '../../components/inputs/InputArea'
import InputFloat from '../../components/inputs/InputFloat'
import Select from '../../components/select'
import useForm from '../../hooks/useForm'
import { useDepartamentos } from '../../services/useDepartamentos'
import { useDistritos } from '../../services/useDistritos'
import { useProvincias } from '../../services/useProvincias'

const Comprar = () => {
  const [depa, setDepa] = useState('')
  const [prov, setProv] = useState('')
  const [dist, setDist] = useState('')
  const { ruc, razonSocial, celular, direccion, onChange } = useForm({
    ruc: '',
    razonSocial: '',
    celular: '',
    direccion: ''
  })

  const elmo = 9
  const { db: departamentos } = useDepartamentos()
  const { db: provincias } = useProvincias({ DepCode: depa.toString() })
  const { db: distritos } = useDistritos({ ProCode: prov.toString() })

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

  const [mensaje, setMensaje] = useState('')
  return (
    <Container className='py-10'>
      <div className='flex justify-center '>
        <div className='w-full md:w-2/5 h-auto '>
          <h2 className='text-primary-300 font-bold text-4xl xl:text-6xl text-center  '>
            Completa tu información
          </h2>
          <div>
            <form className='flex flex-col gap-y-5 mt-10  '>
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
                type='email'
                label='Razon Social'
                name='razonSocial'
                value={razonSocial}
                onChange={onChange}
              />

              <div className='flex flex-col lg:flex-row  gap-5 '>
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
    </Container>
  )
}

export default Comprar
