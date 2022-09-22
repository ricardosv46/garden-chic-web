import { CarritoInitialState, CarritoProps } from './CarritoState'

type Action =
	| { type: 'AddCarrito'; payload: CarritoProps }
	| { type: 'UpAmount'; payload: CarritoProps }
	| { type: 'DeleteCarrito'; payload: number }
	| { type: 'Total'; payload: number }
	| { type: 'Vaciar' }
	| { type: 'OpenCarrito'; payload: boolean }
	| { type: 'Init'; payload: CarritoProps[] }

const CarritoReducer = (state: CarritoInitialState, action: Action): CarritoInitialState => {
	switch (action.type) {
		case 'AddCarrito':
			if (state.carrito.some((item) => item.id === action.payload.id)) {
				const currentdata: any[] = []
				state.carrito.map((item2) =>
					item2.id === action.payload.id
						? currentdata.push({ ...item2, amount: item2.amount >= item2.stockTotal ? item2.amount : item2.amount + 1 })
						: currentdata.push(item2)
				)
				localStorage.setItem('carrito', JSON.stringify(currentdata))
				return { ...state, carrito: currentdata }
			} else {
				localStorage.setItem('carrito', JSON.stringify([...state.carrito, action.payload]))
				return {
					...state,
					carrito: [...state.carrito, action.payload]
				}
			}
			// if (state.carrito.some((item) => item.id === action.payload.id)) {
			//   return { ...state, carrito: [...state.carrito, action.payload] };
			// } else {
			//   return {
			//     ...state,
			//     carrito: [...state.carrito, action.payload],
			//   };
			// }
			break
		case 'UpAmount':
			const carritoUpAmount = state.carrito.map((item) =>
				item.id === action.payload.id
					? { ...action.payload, amount: action.payload.amount > action.payload.stockTotal ? item.amount : action.payload.amount }
					: item
			)
			localStorage.setItem('carrito', JSON.stringify(carritoUpAmount))
			return {
				...state,
				carrito: carritoUpAmount
			}
			break
		case 'DeleteCarrito':
			const deleteCarrito = state.carrito.filter((item) => item.id !== action.payload)
			localStorage.setItem('carrito', JSON.stringify(deleteCarrito))
			return {
				...state,
				carrito: deleteCarrito
			}
			break
		case 'Vaciar':
			localStorage.removeItem('carrito')
			return {
				carrito: [],
				total: 0,
				ViewCarrito: false
			}
			break
		case 'Init':
			return {
				carrito: action.payload,
				total: 0,
				ViewCarrito: false
			}
			break
		case 'Total':
			return {
				...state,
				total: action.payload
			}
			break
		case 'OpenCarrito':
			return {
				...state,
				ViewCarrito: action.payload
			}
		default:
			return state
	}
}

export default CarritoReducer
