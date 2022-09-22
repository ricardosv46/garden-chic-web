/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import CarritoReducer from './CarritoReducer'
export interface CarritoProps {
	id: number
	img: string
	title: string
	firtsPrice: number
	price: number
	categoty1: string
	rebaja: boolean
	amount: number
	stockTotal: number
}
export interface CarritoInitialState {
	carrito: CarritoProps[]
	total: number
	ViewCarrito: boolean
}

type Props = {
	children: JSX.Element | JSX.Element[]
}

export interface CarritoContextValue extends CarritoInitialState {
	agregarCarrito: (payload: CarritoProps) => void
	actualizarPrecioCarrito: (payload: CarritoProps) => void
	eliminarCarrito: (payload: number) => void
	CalcularTotal: (payload: number) => void
	VaciarCarrito: () => void
	OpenCarrito: (payload: boolean) => void
}
export const initialState: CarritoInitialState = {
	carrito: [],
	total: 0,
	ViewCarrito: false
}

const CarritoContext = createContext<CarritoContextValue>({} as CarritoContextValue)

const CarritoState = ({ children }: Props) => {
	const [state, dispatch] = useReducer(CarritoReducer, initialState)
	/*   const toast = useToast() */

	const agregarCarrito = async (payload: CarritoProps) => {
		dispatch({ type: 'AddCarrito', payload })
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

	const OpenCarrito = (payload: boolean) => {
		dispatch({ type: 'OpenCarrito', payload })
	}
	const VaciarCarrito = async () => {
		dispatch({ type: 'Vaciar' })
	}

	const InitCarrito = async (payload: CarritoProps[]) => {
		dispatch({ type: 'Init', payload })
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const carrito = JSON.parse(localStorage.getItem('carrito')!) as CarritoProps[]
			if (carrito) {
				InitCarrito(carrito)
			}
		}
	}, [])

	return (
		<CarritoContext.Provider
			value={{
				...state,
				agregarCarrito,
				actualizarPrecioCarrito,
				eliminarCarrito,
				CalcularTotal,
				VaciarCarrito,
				OpenCarrito
			}}>
			{children}
		</CarritoContext.Provider>
	)
}

export const useCarritoContext = () => useContext(CarritoContext)

export default CarritoState
