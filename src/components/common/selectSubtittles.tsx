import React from 'react'
interface Iprops {
    data: string[]
}

export const SelectSubtittles = ({ data }: Iprops) => {
    return (
        <select className='text-primary-800 text-md font-bold lg:hidden mt-8 font-garden_regular'>
            {data.map((obj, i) => <option key={i} value={obj.split(' ').join('')}>{obj}</option>)}
        </select>
    )
}
