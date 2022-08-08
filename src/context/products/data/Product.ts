import { useProductos } from "@services/useProducto";
import {
  EntityFilterOptions,
  EntityProduct,
} from "../entity/EntityProducts";

interface WrapperProducts {
  Products: EntityProduct[];
  Product: EntityProduct;
  FilterOptions: EntityFilterOptions
}
export const DefaultFilterOprion: EntityFilterOptions = {
  categoriaSlug: "",
  tipoOrdenacion: "",
  destacado: "0",
  numeroPagina: 10,
  pagina: 1,
  precio: [0, 5000],
};



export const Initial_value: WrapperProducts = {
  Product: {} as EntityProduct,
  Products: [],
  FilterOptions: { destacado: "0", tipoOrdenacion: "", pagina: 1, numeroPagina: 10, precio: [0, 5000], categoriaSlug: "" }
};
