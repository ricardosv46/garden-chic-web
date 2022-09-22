export const URL = 'https://api.gardenchicperu.com/public/graphql'

export const GET_SLUG_BLOG = `
query GetBlogSlug($slug: String) {
  GetBlogSlug(slug: $slug) {
    blogId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    keywords
    estado
    destacado
    categoriaBlogId
    CategoriaBlog {
      titulo
    }
    usuarioId
    created_at
    updated_at
  }
}
`

export const GET_SLUG_PRODUCTO = `
query GetProductoSlug($slug: String!) {
  GetProductoSlug(slug: $slug) {
    productoId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    precioReal
    precioOferta
    stockMinimo
    stockReal
    fichaTecnica
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    galeria {
      id
      titulo
      estado
      url
    }
    keywords
    destacado
    estado
    categoriaProductoId
    CategoriaProducto {
      titulo
    }
    created_at
    updated_at
  }
}
`
