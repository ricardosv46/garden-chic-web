import { useReducer } from "react";
import { ProductsContext } from "./ProductsContext";
import { Initial_value } from "./data/Product";
import { ProductsReducer } from "./ProductsReducer";

interface IProps {
  children: JSX.Element | JSX.Element[];
}
export const ProductsProvider = ({ children }: IProps) => {
  const [DataProducts, DispatchProducts] = useReducer(
    ProductsReducer,
    Initial_value
  );
  return (
    <ProductsContext.Provider value={{ DataProducts, DispatchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
