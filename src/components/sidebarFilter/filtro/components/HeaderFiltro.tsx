import IconFilter from 'public/icons/IconFilter'
import React from 'react'

export const HeaderFiltro = () => {
    return (
        <div className="flex gap-x-3 mt-5 items-center">
            <IconFilter height={22} width={22} fill="#35405E" />
            <h2 className="text-2xl font-light uppercase">Filtros</h2>
        </div>
    )
}
