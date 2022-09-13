import React from 'react'
interface Iprops {
    tittle?: string,
    data: string[]
}

export const RenderItem = ({ data, tittle }: Iprops) => {
    return (
        <div className='lg:w-2/3'>
            <h3 className=' lg:text-center text-2xl md:text-3xl lg:text-4xl text-garden-option1 font-garden_bold'>
                {tittle}
            </h3>
            {data.map((obj, i) => (
                <ul key={i} className='text-base lg:text-xl text-justify text-garden-option3 font-garden_regular pt-5'>
                    {obj || ''} 
                </ul>
            ))}
        </div>
    )
}
