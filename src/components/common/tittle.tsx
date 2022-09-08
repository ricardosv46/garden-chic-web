import React from 'react'
interface Iprops {
    tittle: string
}
export const Tittle = ({ tittle }: Iprops) => {
    return (
        <h1 className='text-center text-xl md:text-3xl lg:text-5xl text-primary-300 font-garden_bold'>
            {tittle}
        </h1>
    )
}
