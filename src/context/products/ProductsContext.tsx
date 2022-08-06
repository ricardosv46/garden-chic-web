import { createContext, Dispatch, useContext } from "react";
import { EntityFilterOptions, EntityProduct } from "./entity/EntityProducts";
import { ProductsAction } from "./ProductsReducer";
import {  } from '../../generated/graphql'
interface WrapperProducts {
  Products: EntityProduct[];
  Product: EntityProduct;
  FilterOptions: EntityFilterOptions
}

interface WrapperEntityProducts {
  DataProducts: WrapperProducts;
  DispatchProducts: Dispatch<ProductsAction>;
}

export const ProductsContext = createContext<WrapperEntityProducts>(
  {} as WrapperEntityProducts
);

export const useProductContext = () => useContext(ProductsContext);
