import React from 'react'
interface Iprops {
    tittle?: string,
    data: string[]
}

export const RenderItem = ({ data, tittle }: Iprops) => {
    return (
        <div className='flex-1'>
            <h3 className=' lg:text-center text-2xl md:text-3xl lg:text-5xl text-primary-300 font-bold'>
                {tittle}
            </h3>
            {data.map((obj, i) => (
                <ul key={i} className='text-sm md:text-base text-justify text-primary-300 font-semibold pt-5'>
                    {obj || ''}
                </ul>
            ))}
        </div>
    )
}
