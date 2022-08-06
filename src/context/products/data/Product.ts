import { useProductos } from "@services/useProducto";
import {
  EntityProduct,
} from "../entity/EntityProducts";

interface WrapperProducts {
  Products: EntityProduct[];
  Product: EntityProduct;
}

export const Initial_value: WrapperProducts = {
  Product: {} as EntityProduct,
  Products: [],
};
