import { useGetAllProductosCategoriaSlugQuery } from '../generated/graphql'

// Obtenemos todas las categorias
export const useCategoriaProductosSlug = (input = { pagina: 1, estado: 'Activado', numeroPagina: 10, slug: '' }) => {
  const { data, loading, refetch } = useGetAllProductosCategoriaSlugQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetAllProductosCategoriaSlug?.data ?? []
  const nTotal = data?.GetAllProductosCategoriaSlug?.numeroTotal ?? 0

  return {
    loading,
    db,
    nTotal
  }
}
