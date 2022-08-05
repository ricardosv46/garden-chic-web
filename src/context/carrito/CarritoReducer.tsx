import { CarritoInitialState, CarritoProps } from "./CarritoState";

type Action =
  | { type: "AddCarrito"; payload: CarritoProps }
  | { type: "UpAmount"; payload: CarritoProps }
  | { type: "DeleteCarrito"; payload: number }
  | { type: "Total"; payload: number }
  | { type: "Vaciar" }
  | { type: "OpenCarrito"; payload: boolean };

const CarritoReducer = (
  state: CarritoInitialState,
  action: Action
): CarritoInitialState => {
  switch (action.type) {
    case "AddCarrito":
      if (state.carrito.some((item) => item.id === action.payload.id)) {
        return state;
      } else {
        return {
          ...state,
          carrito: [...state.carrito, action.payload],
        };
      }
      break;
    case "UpAmount":
      return {
        ...state,
        carrito: state.carrito.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
      break;
    case "DeleteCarrito":
      return {
        ...state,
        carrito: state.carrito.filter((item) => item.id !== action.payload),
      };
      break;
    case "Vaciar":
      return {
        carrito: [],
        total: 0,
        ViewCarrito: false,
      };
      break;
    case "Total":
      return {
        ...state,
        total: action.payload,
      };
      break;
    case "OpenCarrito":
      return {
        ...state,
        ViewCarrito: action.payload,
      };
    default:
      return state;
  }
};

export default CarritoReducer;
