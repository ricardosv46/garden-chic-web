import { Reducer } from "react";
import { DefaultFilterOprion } from "./data/Product";
import { EntityFilterOptions, EntityProduct } from "./entity/EntityProducts";

interface WrapperProducts {
  Products: EntityProduct[];
  Product: EntityProduct;
  FilterOptions: EntityFilterOptions
}
export type ProductsAction =
  | { type: "AddProducts"; payload: EntityProduct[] }
  | { type: "SelectProduct"; payload: EntityProduct }
  | { type: "ChangeDestacado"; payload: string }
  | { type: "ChangeCategoriaSlug"; payload: string }
  | { type: "ChangeTipoOrdenacion"; payload: string }
  | { type: "ChangePrecio"; payload: number[] }
  | { type: "ChangePagina"; payload: number }
  | { type: "ChangeNumeroPagina"; payload: number }
  | { type: "ClearFilterOptions"; payload?: undefined };

{

  /* falta separar los reducers */
}
export const ProductsReducer = (
  state: WrapperProducts,
  action: ProductsAction
): WrapperProducts => {
  const { type, payload } = action;
  const { FilterOptions: options } = state;
  switch (type) {
    case "AddProducts":
      return { ...state, Products: payload };
      break;
    case "SelectProduct":
      return { ...state, Product: payload };
      break;
    case "ChangeDestacado":
      return { ...state, FilterOptions: { ...options, destacado: payload } };
      break;
    case "ChangeCategoriaSlug":
      return {
        ...state,
        FilterOptions: { ...options, categoriaSlug: payload },
      };
      break;
    case "ChangeTipoOrdenacion":
      return {
        ...state,
        FilterOptions: { ...options, tipoOrdenacion: payload },
      };
      break;
    case "ChangePrecio":
      return {
        ...state,
        FilterOptions: { ...options, precio: payload },
      };
      break;
    case "ChangePagina":
      return {
        ...state,
        FilterOptions: { ...options, pagina: payload },
      };
      break;
    case "ChangeNumeroPagina":
      return {
        ...state,
        FilterOptions: { ...options, numeroPagina: payload },
      };
      break;
    case "ClearFilterOptions":
      return {
        ...state,
        FilterOptions: DefaultFilterOprion,
      };
      break;
    default:
      return state;
  }
};
