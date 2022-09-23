import IconChevronLeft from 'public/icons/IconChevronLeft'
import IconChevronRight from 'public/icons/IconChevronRight'
import { Dispatch } from 'react'
import { generatedTotalPages } from 'src/utils/generatedTotalPages'
import { useMemo, useRef } from 'react'

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
  const paginas = useMemo(() => {
    return generatedTotalPages(nTotal, state.numeroPagina)
  }, [nTotal])

  const { pagina, numeroPagina } = state

  const increment = () => {
    if (paginas.length === pagina) return
    setState({ ...state, pagina: pagina + 1 })
  }
  const decrement = () => {
    if (pagina === 1) return
    setState({ ...state, pagina: pagina - 1 })
  }

  const changePagina = (number: number) => {
    setState({ ...state, pagina: number })
  }
  return (
    <div className='flex justify-center gap-3'>
      <button className='flex items-center justify-center w-8 h-8 text-white rounded-full bg-garden-option1' onClick={decrement}>
        <IconChevronLeft className='w-6 h-6' />
      </button>
      {paginas.map((item) => (
        <button
          key={item}
          onClick={() => changePagina(item)}
          className={`flex items-center justify-center w-8 h-8  rounded-full font-bold  ${
            pagina === item ? 'bg-garden-option1 text-white' : 'text-garden-option1'
          }`}>
          {item}
        </button>
      ))}
      <button className='flex items-center justify-center w-8 h-8 text-white rounded-full bg-garden-option1' onClick={increment}>
        <IconChevronRight className='w-6 h-6' />
      </button>
    </div>
  )
}

export default Paginator
