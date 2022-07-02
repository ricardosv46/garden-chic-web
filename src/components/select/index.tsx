import React, {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useEffect
} from 'react'

interface IProps extends InputHTMLAttributes<HTMLSelectElement> {
  value: string
  label: string
  onChangevalue: Dispatch<SetStateAction<string>>
  data: Options[]
}

interface Options {
  value: string
  titulo: string
}

const Select = ({
  value,
  label,
  onChangevalue,
  data,

  ...props
}: IProps) => {
  useEffect(() => {
    if (!data[0]) {
      onChangevalue('')
    }
  }, [data])

  console.log('fafaf', value)

  return (
    <div className='relative w-full'>
      <select
        {...props}
        className='w-full block px-2  pb-2 pt-5 text-sm text-gray-900 font-semibold border border-gray-300 focus:outline-none focus:ring-0 focus:border-primary-300 peer rounded-md'
        name='service'
        value={value}
        onChange={(e) => onChangevalue(e.target.value)}
      >
        <option value='' hidden></option>
        {data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.titulo}
          </option>
        ))}
      </select>

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

export default Select
