import { useState, useEffect } from 'react'
import IconAngleDown from '../../../public/icons/IconAngleDown'

const Accordion = ({ title, children, className = 'text-xs ', reset = false }) => {
	const [watch, setWatch] = useState(false)
	const handleWatch = () => {
		setWatch(!watch)
	}

	useEffect(() => {
		setWatch(false)
	}, [reset])

	return (
		<div className='w-full'>
			<div className={`flex justify-between items-center w-full  text-garden-option3 font-semibold  ${className}`}>
				<p className='text-garden-option3 text-md font-semibold text-xl mb-2'>
					{title}
					{/* <input type={"checkbox"} className=''/> */}
				</p>

				<div className=''>
					{!watch ? (
						<div className='w-full p-2 cursor-pointer rotate-0 duration-300' onClick={handleWatch}>
							<IconAngleDown width={20} height={20} />
						</div>
					) : (
						<div className='w-full p-2 cursor-pointer rotate-180 duration-300 ' onClick={handleWatch}>
							<IconAngleDown width={20} height={20} />
						</div>
					)}
				</div>
			</div>
			{watch && <div className={`flex w-full pt-3`}>{children}</div>}

			{/* <div
        className={`${
          watch ? "block translate-x-0" : "hidden -translate-x-7 "
        } flex w-full pt-3 duration-300 transition-all`}
      >
        {children}
      </div> */}
		</div>
	)
}

export default Accordion
