import IconChevronLeft from 'public/icons/IconChevronLeft'
import IconChevronRight from 'public/icons/IconChevronRight'
import { Dispatch } from 'react'
import { generatedTotalPages } from 'src/utils/generatedTotalPages'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import IconChevronLeftDouble from 'public/icons/IconChevronLeftDouble'
import IconChevronRightDouble from 'public/icons/IconChevronRightDouble'

interface State {
  pagina: number
  numeroPagina: number
}

interface IProps {
  state: State
  setState: Dispatch<React.SetStateAction<State>>
  nTotal: number
}

const Paginator = ({ state, setState, nTotal }: IProps) => {
  const paginas = generatedTotalPages(nTotal, state.numeroPagina) as any

  const { pagina, numeroPagina } = state

  const decrement = () => {
    if (pagina === 1) return
    setState({ ...state, pagina: pagina - 1 })
  }

  const increment = () => {
    if (paginas.length === pagina) return
    setState({ ...state, pagina: pagina + 1 })
  }

  const changePagina = (number: number) => {
    setState({ ...state, pagina: number })
  }

  const disableLeft = pagina === 1 || paginas.length === 0

  const disableRight = pagina === paginas.length || paginas.length === 0

  return (
    <div>
      <div className='flex justify-center gap-5'>
        <button
          disabled={disableLeft}
          className={`${disableLeft ? 'opacity-50 ' : ''} flex items-center justify-center w-8 h-8 text-white rounded-full bg-garden-option1`}
          onClick={() => changePagina(1)}>
          <IconChevronLeftDouble className='w-6 h-6' />
        </button>
        <button
          disabled={disableLeft}
          className={`${disableLeft ? 'opacity-50 ' : ''} flex items-center justify-center w-8 h-8 text-white rounded-full bg-garden-option1`}
          onClick={decrement}>
          <IconChevronLeft className='w-6 h-6' />
        </button>
        <p className='flex items-center justify-center text-2xl font-bold text-garden-option1'>
          {paginas.length === 0 ? 0 : pagina} de {paginas.length}
        </p>

        <button
          disabled={disableRight}
          className={`${disableRight ? 'opacity-50 ' : ''} flex items-center justify-center w-8 h-8 text-white rounded-full bg-garden-option1`}
          onClick={increment}>
          <IconChevronRight className='w-6 h-6' />
        </button>
        <button
          disabled={disableRight}
          className={`${disableRight ? 'opacity-50 ' : ''} flex items-center justify-center w-8 h-8 text-white rounded-full bg-garden-option1`}
          onClick={() => changePagina(paginas.length)}>
          <IconChevronRightDouble className='w-6 h-6' />
        </button>
      </div>
    </div>
  )
}

export default Paginator
