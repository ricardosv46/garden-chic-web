import React, { ChangeEvent, Dispatch, InputHTMLAttributes, SetStateAction, useEffect } from 'react'

interface IProps extends InputHTMLAttributes<HTMLSelectElement> {
	value: string
	label: string
	onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
	data: Options[]
}

interface Options {
	value: string
	titulo: string
}

const Select = ({
	value,
	label,
	onChange,
	data,

	...props
}: IProps) => {
	// useEffect(() => {
	//   if (!data[0]) {
	//     value('')
	//   }
	// }, [data])

	return (
		<div className='relative w-full '>
			<select
				{...props}
				autoComplete='off'
				className='block w-full px-2 pt-5 pb-2 text-sm font-semibold text-gray-900 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-primary-300 peer'
				value={value}
				onChange={onChange}>
				<option value='' hidden></option>
				{data.map((item) => (
					<option key={item.value} value={item.value}>
						{item.titulo}
					</option>
				))}
			</select>

			<label
				className={`${
					value.length ? 'top-0 text-xs ' : 'top-4 text-base'
				} absolute text-sm text-primary-300 bg-white -z-10 font-semibold duration-300 transform left-2.5 leading-5`}>
				{label}
			</label>
		</div>
	)
}

export default Select
