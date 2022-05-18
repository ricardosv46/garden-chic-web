import React from 'react'
interface IProps {
  placeholder: string
  text?: string
  onChange?: () => void
  onClick?: () => void
}

const InputSearch = ({ text, onChange, onClick, placeholder }: IProps) => {
  return (
    <div className='flex items-center justify-between relative overflow-hidden'>
      <input
        placeholder={placeholder}
        value={text}
        onChange={onChange}
        type='text'
        className='w-full  h-12 text-black px-6 border-gray-300 border-2 focus:outline-none overflow-hidden rounded-lg'
      />
      <button
        onClick={onClick}
        className='bg-gray-300 hover:bg-primary-300  border-2 ease-in-out duration-300 absolute border-l-0 border-r-2  border-b-2 border-t-2 border-gray-300 hover:border-primary-300  top-0 right-0 flex items-center justify-center w-10 h-full rounded-tr-lg rounded-br-lg cursor-pointer'
      >
        <svg
          stroke='currentColor'
          fill='#fff'
          viewBox='0 0 512 512'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
        </svg>
      </button>
    </div>
  )
}

export default InputSearch
