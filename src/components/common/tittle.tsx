import React from 'react'
interface Iprops {
    tittle: string
}
export const Tittle = ({ tittle }: Iprops) => {
    return (
        <h1 className='text-center text-5xl text-primary-300 font-bold'>
            {tittle}
        </h1>
    )
}
