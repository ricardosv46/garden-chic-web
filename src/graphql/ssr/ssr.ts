export const URL = 'https://plantilla.rongqian.pe/public/graphql'

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
