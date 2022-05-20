import React, { ChangeEvent } from 'react'
interface IProps {
  label: string
  value: string
  name: string
  className?: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
const InputArea = ({ label, value, name, onChange, className }: IProps) => {
  console.log(value)
  return (
    <div
      className={` w-full rounded border-2 px-3 border-slate-200 focus-within:border-primary-300 h-60    focus-within:pt-5 ${
        value?.length > 0 ? 'pt-5' : ''
      } ${className}`}
    >
      <div className='relative w-full'>
        <textarea
          id={name}
          value={value}
          onChange={onChange}
          placeholder=' '
          className={`w-full   focus:outline-none text-primary-300 font-semibold h-52 resize-none`}
        ></textarea>
        <label
          htmlFor={name}
          className='absolute left-0 top-0 -z-1 text-slate-400 text-lg font-semibold  '
        >
          {label}
        </label>
      </div>
    </div>
  )
}

export default InputArea
