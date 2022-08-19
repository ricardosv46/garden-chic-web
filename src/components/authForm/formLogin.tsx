import React, { ChangeEvent } from 'react'
import useForm from '../../hooks/useForm'
import InputFloat from '../inputs/InputFloat'

interface IProps {
  email: string
  password: string,
  errorForm: { email: string[] }
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormLogin = ({ email, password, onChange, errorForm }: IProps) => {
  return (
    <div className='flex flex-col gap-5 '>
      <InputFloat
        type='email'
        label='E-mail'
        name='email'
        value={email}
        onChange={onChange}
        error={errorForm && errorForm.email && errorForm.email[0]}
        required
      />
      <InputFloat
        type='password'
        label='Contraseña'
        name='password'
        value={password}
        onChange={onChange}
        required
      />
    </div>
  )
}

export default FormLogin
