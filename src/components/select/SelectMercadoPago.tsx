import React, { ChangeEvent, Dispatch, InputHTMLAttributes, RefObject, SetStateAction, useEffect, useRef, useState } from 'react'

interface IProps extends InputHTMLAttributes<HTMLSelectElement> {
	variant?: string
	value: string
	label: string
	onChangevalue: Dispatch<SetStateAction<string>>
	data: Options[]
	hidden?: boolean
}

interface Options {
	value: string
	titulo: string
}

const SelectMercadoPago = ({ value, label, onChangevalue, data, hidden, variant = '', ...props }: IProps) => {
	return (
		<div className={`relative w-full ${hidden ? 'hidden' : 'block'}`}>
			<select
				{...props}
				className='w-full block px-2  pb-2 pt-5 text-sm text-garden-option3 font-semibold border border-gray-300 focus:outline-none focus:ring-0 focus:border-garden-option1 peer rounded-md'
				name='service'
				value={value}
				onChange={(e) => {
					onChangevalue(e.target.value)
				}}>
				<option value='selecccione'>Seleccione</option>
			</select>

			<label
				className={`${
					value.length ? 'top-0 text-xs ' : 'top-4 text-base '
				} absolute text-sm text-garden-option1  z-10 font-semibold duration-300 transform left-2.5 leading-5`}>
				{label}
			</label>
		</div>
	)
}

export default SelectMercadoPago
