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
    <>
      <div className='relative w-full'>
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`${className} resize-none w-full h-60 block px-2.5  pb-2 pt-5 text-sm text-gray-900 font-semibold border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-300 peer rounded-md`}
          placeholder=' '
        ></textarea>
        <label
          htmlFor={name}
          className='absolute text-sm text-primary-300 font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-primary-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  peer-focus:-translate-y-4'
        >
          {label}
        </label>
      </div>
    </>
  )
}

export default InputArea

{
  /* <div
      className={` w-full rounded border-2 px-3 border-slate-200 focus-within:border-primary-300 h-60    focus-within:pt-5 ${value?.length > 0 ? 'pt-5' : ''
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
          className='label absolute left-0 top-0 -z-1 text-slate-400 text-lg font-semibold  '
        >
          {label}
        </label>
      </div>
    </div> */
}
