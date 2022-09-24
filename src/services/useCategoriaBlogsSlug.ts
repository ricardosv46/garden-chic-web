import { useGetAllBlogsCategoriaSlugQuery } from '../generated/graphql'

// Obtenemos todas las categorias
export const useCategoriaBlogsSlug = (input = { pagina: 1, estado: 'Activado', numeroPagina: 10, slug: '' }) => {
  const { data, loading, refetch } = useGetAllBlogsCategoriaSlugQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetAllBlogsCategoriaSlug?.data ?? []
  const nTotal = data?.GetAllBlogsCategoriaSlug?.numeroTotal ?? 0

  return {
    loading,
    db,
    nTotal
  }
}
