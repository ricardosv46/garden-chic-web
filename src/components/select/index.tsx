import React, { ChangeEvent, Dispatch, InputHTMLAttributes, SetStateAction, useEffect } from 'react'

interface IProps extends InputHTMLAttributes<HTMLSelectElement> {
	value: string
	label: string
	onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
	data: Options[]
	id: string
}

interface Options {
	value: string
	titulo: string
}

const Select = ({ value, label, onChange, data, id, ...props }: IProps) => {
	return (
		<div className='relative w-full '>
			<select
				{...props}
				id={id}
				autoComplete='off'
				className='block w-full px-2 pt-5 pb-2 text-sm font-semibold bg-transparent border border-gray-300 rounded-md text-garden-option3 focus:outline-none focus:ring-0 focus:border-garden-option1 peer'
				value={value}
				onChange={onChange}>
				<option value='' hidden></option>
				{data.map((item) => (
					<option key={item.value} value={item.value}>
						{item.titulo}
					</option>
				))}
				{/* <optgroup disabled></optgroup> */}
			</select>

			<label
				htmlFor={id}
				className={`${
					value.length ? 'top-0 text-xs ' : 'top-4 text-base'
				} absolute text-sm text-garden-option1 bg-white -z-10 font-semibold duration-300 transform left-2.5 leading-5`}>
				{label}
			</label>
		</div>
	)
}

export default Select
