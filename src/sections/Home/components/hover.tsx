import React, { useState } from 'react'

interface Iprops {
    Icon1: JSX.Element,
    Icon2: JSX.Element,
    label: string
}

export const Hover = ({ Icon1, Icon2, label }: Iprops) => {
    const [ishover, setIsHover] = useState(false)

    const Hover2 = ({ condition }: { condition: boolean }) => condition ? Icon1 : Icon2

    return (
        <div className='flex flex-col items-center gap-y-5 text-primary-600'
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            {/* {ishover ? <div onMouseOver={() => setIsHover(true)}>{Icon1}</div> : <div onMouseOut={() => setIsHover(true)}>{Icon2}</div>} */}
            <Hover2 condition={ishover} />
            <p className='text-xl font-semibold'>{label}</p>
        </div>
    )
}
