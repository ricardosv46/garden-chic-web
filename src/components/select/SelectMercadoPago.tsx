import React, {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  RefObject,
  SetStateAction,
  useEffect,
  useRef
} from 'react'

interface IProps extends InputHTMLAttributes<HTMLSelectElement> {
  variant?: string
  value: string
  label: string
  onChangevalue: Dispatch<SetStateAction<string>>
  data: Options[]
}

interface Options {
  value: string
  titulo: string
}

const SelectMercadoPago = ({
  value,
  label,
  onChangevalue,
  data,
  variant = 'normal',
  ...props
}: IProps) => {
  const ref = useRef<any>()

  useEffect(() => {
    console.log('ref', ref.current.options.length)
  }, [ref.current])

  return (
    <div className='relative w-full'>
      <select
        {...props}
        ref={ref}
        className='w-full block px-2  pb-2 pt-5 text-sm text-gray-900 font-semibold border border-gray-300 focus:outline-none focus:ring-0 focus:border-primary-300 peer rounded-md'
        name='service'
        value={value}
        onChange={(e) => {
          console.log(e.target.value)
          onChangevalue(e.target.value)
        }}
      ></select>

      <label
        className={`${
          value.length ? 'top-0 text-xs ' : 'top-4 text-base '
        } absolute text-sm text-primary-300  z-10 font-semibold duration-300 transform left-2.5 leading-5`}
      >
        {label}
      </label>
    </div>
  )
}

export default SelectMercadoPago
