import React, { ChangeEvent } from 'react'
interface IProps {
	label: string
	value: string
	name: string
	className?: string
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
	required?: boolean
}
const InputArea = ({ label, value, name, onChange, className, required }: IProps) => {
	return (
		<>
			<div className='relative w-full'>
				<textarea
					id={name}
					name={name}
					value={value}
					required={required}
					onChange={onChange}
					className={`${className} resize-none w-full h-60 block px-2.5  pb-2 pt-5 text-sm text-garden-option3 font-semibold border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-garden-option1 peer rounded-md`}
					placeholder=' '></textarea>
				<label
					htmlFor={name}
					className='absolute text-sm text-garden-option1 font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-garden-option1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  peer-focus:-translate-y-4'>
					{label}
				</label>
			</div>
		</>
	)
}

export default InputArea

{
	/* <div
      className={` w-full rounded border-2 px-3 border-slate-200 focus-within:border-garden-option1 h-60    focus-within:pt-5 ${value?.length > 0 ? 'pt-5' : ''
        } ${className}`}
    >
      <div className='relative w-full'>
        <textarea
          id={name}
          value={value}
          onChange={onChange}
          placeholder=' '
          className={`w-full   focus:outline-none text-garden-option1 font-semibold h-52 resize-none`}
        ></textarea>
        <label
          htmlFor={name}
          className='absolute top-0 left-0 text-lg font-semibold label -z-1 text-slate-400 '
        >
          {label}
        </label>
      </div>
    </div> */
}
