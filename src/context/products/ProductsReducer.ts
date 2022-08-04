import { Reducer } from "react";
import { EntityProduct } from "./entity/EntityProducts";

interface WrapperProducts {
  Products: EntityProduct[];
  Product: EntityProduct;
}
export type ProductsAction =
  | { type: "AddProducts"; payload: EntityProduct[] }
  | { type: "SelectProduct"; payload: EntityProduct };
export const ProductsReducer = (
  state: WrapperProducts,
  action: ProductsAction
): WrapperProducts => {
  const { type, payload } = action;
  switch (type) {
    case "AddProducts":
      return { ...state, Products: payload };
      break;
    case "SelectProduct":
      return { ...state, Product: payload };
    default:
      return state;
  }
};
