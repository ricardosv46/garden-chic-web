/* eslint-disable react-hooks/exhaustive-deps */
import { Show } from "@components/show";
import { useRouter } from "next/router";
import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { ScreenContext } from "../screen/ScreenContext";
import CarritoReducer from "./CarritoReducer";
export interface CarritoProps {
  id: number;
  img: string;
  title: string;
  firtsPrice: number;
  price: number;
  categoty1: string;
  rebaja: boolean;
  amount: number;
}
export interface CarritoInitialState {
  carrito: CarritoProps[];
  total: number;
}

type Props = {
  children: JSX.Element | JSX.Element[];
};

export interface CarritoContextValue extends CarritoInitialState {
  agregarCarrito: (payload: CarritoProps) => void;
  actualizarPrecioCarrito: (payload: CarritoProps) => void;
  eliminarCarrito: (payload: number) => void;
  CalcularTotal: (payload: number) => void;
  VaciarCarrito: () => void;
}
export const initialState: CarritoInitialState = { carrito: [], total: 0 };

const CarritoContext = createContext<CarritoContextValue>(
  {} as CarritoContextValue
);

const CarritoState = ({ children }: Props) => {
  const [state, dispatch] = useReducer(CarritoReducer, initialState);
  const { DispatchScreen, Screen } = useContext(ScreenContext);
  const router = useRouter();
  /*   const toast = useToast() */

  const agregarCarrito = async (payload: CarritoProps) => {
    dispatch({ type: "AddCarrito", payload });
  };

  const actualizarPrecioCarrito = async (payload: CarritoProps) => {
    dispatch({ type: "UpAmount", payload });
  };
  const eliminarCarrito = async (payload: number) => {
    dispatch({ type: "DeleteCarrito", payload });
  };
  const CalcularTotal = async (payload: number) => {
    dispatch({ type: "Total", payload });
  };

  const VaciarCarrito = async () => {
    dispatch({ type: "Vaciar" });
  };

  useEffect(() => {
    const handleStart = () => {
      DispatchScreen({ type: "ChangeLoadingPage", payload: true });
    };
    const handleComplete = () => {
      DispatchScreen({ type: "ChangeLoadingPage", payload: false });
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeError", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeError", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  return (
    <CarritoContext.Provider
      value={{
        ...state,
        agregarCarrito,
        actualizarPrecioCarrito,
        eliminarCarrito,
        CalcularTotal,
        VaciarCarrito,
      }}
    >
      <Show
        condition={!Screen.loadingPage || false}
        isDefault={<h3 className="bg-primary-600">loading</h3>}
      >
        {children}
      </Show>
    </CarritoContext.Provider>
  );
};

export const useCarritoContext = () => useContext(CarritoContext);

export default CarritoState;
