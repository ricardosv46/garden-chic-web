import React from 'react'
interface Iprops {
    data: string[]
    tittle?: string
}

export const RenderItems = ({ data, tittle }: Iprops) => {
    return (
        <div className='flex-1'>
            <h3 className='lg:text-left text-2xl text-primary-300 font-bold'>
                {tittle}
            </h3>
            <ul className='lg:text-left text-lg text-primary-300 font-semibold pt-5'>
                {data?.map((obj, i) => <li key={i}>{obj}</li>)}
            </ul>
        </div>
    )
}
