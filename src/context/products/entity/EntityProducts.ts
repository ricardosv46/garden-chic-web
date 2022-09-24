import { Imagen } from '../../../generated/graphql'

export interface CategoriaProduct {
  __typename?: 'CategoriaProducto'
  titulo?: string | null
  slug?: string | null
}

export interface EntityProduct {
  // __typename?: "Producto";
  productoId?: string | null
  titulo?: string | null
  slug?: string | null
  estado?: string | null
  descripcionCorta?: string | null
  descripcionLarga?: string | null
  precioReal?: number | null
  precioOferta?: number | null
  stockMinimo?: number | null
  stockReal?: number | null
  imagenPrincipal?: Imagen | null
  imagenSecundaria?: Imagen | null
  galeria?: Imagen[] | null
  keywords?: string | null
  destacado?: string | null
  categoriaProductoId?: number | null
  CategoriaProducto?: CategoriaProduct | null
  fichaTecnica: string
}

export interface EntityFilterOptions {
  destacado: string
  categoriaSlug?: string
  tipoOrdenacion: string
  precio: number[]
  pagina: number
  numeroPagina: number
}
