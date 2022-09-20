import React from 'react'

export const InputRange = () => {
	return (
		<div className='flex flex-col space-y-2 w-full relative justify-center items-center text-garden-option1 px-2'>
			<div className='relative w-4/5 flex justify-center items-center h-6'>
				<div className='absolute bg-garden-option1 text-white  rotate-45 rounded-bl-[50%] rounded-tl-[50%] rounded-tr-[50%] flex justify-center items-center w-8 h-8 text-center text-xs '>
					<div className='-rotate-45 block text-center'>{'120'}</div>
				</div>
			</div>
			{/* valor izquierda */}
			<input type='range' className='w-4/5 cursor-pointer mr-2 ' step='1' min='0' max='5000' />
			{/* valor derecha */}
			{/* <ul className="flex justify-between w-full px-[10px]">
       <li className="flex justify-center relative">
            <span className="">1H</span>
          </li>
          <li className="flex justify-center relative">
            <span className="">1D</span>
          </li>
          <li className="flex justify-center relative">
            <span className="">1W</span>
          </li>
          <li className="flex justify-center relative">
            <span className="">1M</span>
          </li>
          <li className="flex justify-center relative">
            <span className="">1Y</span>
          </li>
          <li className="flex justify-center relative">
            <span className="">ALL</span>
          </li> 
      </ul> */}
		</div>
	)
}
