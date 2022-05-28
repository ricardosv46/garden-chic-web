import React, { createContext, ReactElement, useContext, useReducer } from 'react'
import CarritoReducer from './CarritoReducer'
export interface CarritoProps {
  id: number,
  img: string,
  title: string,
  firtsPrice: number,
  price: number,
  categoty1: string,
  categoty2: string,
  rebaja: boolean,
  amount: number,
}
export interface CarritoInitialState {
  carrito: CarritoProps[]
  total: number
}

type Props = {
  children: JSX.Element | JSX.Element[];
};

export interface CarritoContextValue extends CarritoInitialState {
  agregarCarrito: (payload: CarritoProps) => void
  actualizarPrecioCarrito: (payload: CarritoProps) => void
  eliminarCarrito: (payload: number) => void
  CalcularTotal: (payload: number) => void
}
export const initialState: CarritoInitialState = { carrito: [], total: 0 }

const CarritoContext = createContext<CarritoContextValue>(
  {} as CarritoContextValue
)

const CarritoState = ({ children }: Props) => {
  const [state, dispatch] = useReducer(CarritoReducer, initialState)
  /*   const toast = useToast() */

  const agregarCarrito = async (payload: CarritoProps) => {
    dispatch({ type: 'AddCarrito', payload })
    /*  toast.show({
       placement: 'top-right',
       render: () => {
         return (
           <Box mx={3} bg="emerald.500" px="2" py="2" rounded="sm" mb={5}>
             Producto añadido.
           </Box>
         )
       }
     }) */
  }

  const actualizarPrecioCarrito = async (payload: CarritoProps) => {
    dispatch({ type: 'UpAmount', payload })
  }
  const eliminarCarrito = async (payload: number) => {
    dispatch({ type: 'DeleteCarrito', payload })
  }
  const CalcularTotal = async (payload: number) => {
    dispatch({ type: 'Total', payload })
  }

  return (
    <CarritoContext.Provider
      value={{
        ...state,
        agregarCarrito,
        actualizarPrecioCarrito,
        eliminarCarrito,
        CalcularTotal
      }}>
      {children}
    </CarritoContext.Provider>
  )
}

export const useCarritoContext = () => useContext(CarritoContext)

export default CarritoState
