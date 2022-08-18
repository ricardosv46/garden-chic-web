import React from 'react'
interface Iprops {
    data: string[]
}
export const Subttitles = ({ data }: Iprops) => {
    return (
        <ol className='hidden flex-col lg:flex-row gap-3 mt-8 lg:flex'>
            {data.map((obj, i) => <li key={i} className='text-primary-300 text-md font-bold'>{obj}</li>)}
        </ol>
    )
}
