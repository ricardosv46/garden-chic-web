export interface typeImg {
  __typename?: 'Imagenes'
  estado?: string | null;
  id?: string | null;
  titulo?: string | null;
  url?: string | null;
}

export interface CategoriaProduct {
  __typename?: 'CategoriaProducto'
  titulo?: string | null;
}

export interface EntityProduct {
  __typename?: "Producto";
  productoId?: string | null;
  titulo?: string | null;
  slug?: string | null;
  estado?: string | null;
  descripcionCorta?: string | null;
  descripcionLarga?: string | null;
  precioReal?: number | null;
  precioOferta?: number | null;
  stockMinimo?: number | null;
  stockReal?: number | null;
  imagenPrincipal?: typeImg | null;
  imagenSecundaria?: typeImg | null;
  galeria?: typeImg[] | null;
  keywords?: string | null;
  destacado?: string | null;
  categoriaProductoId?: number | null;
  CategoriaProducto?: CategoriaProduct | null;
}
