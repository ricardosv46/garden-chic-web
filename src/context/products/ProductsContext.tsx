import { createContext, Dispatch, useContext } from "react";
import { EntityProduct } from "./entity/EntityProducts";
import { ProductsAction } from "./ProductsReducer";

interface WrapperProducts {
  Products: EntityProduct[];
  Product: EntityProduct;
}

interface WrapperEntityProducts {
  DataProducts: WrapperProducts;
  DispatchProducts: Dispatch<ProductsAction>;
}

export const ProductsContext = createContext<WrapperEntityProducts>(
  {} as WrapperEntityProducts
);

export const useProductContext = () => useContext(ProductsContext);
