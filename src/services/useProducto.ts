import { useGetAllProductosQuery } from '../generated/graphql'

// Obtenemos todas los blogs
export const useProductos = (
  input = { pagina: 1, estado: '', numeroPagina: 10 }
) => {
  const { data, loading, refetch } = useGetAllProductosQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetAllProductos?.data ?? []
  const nTotal = data?.GetAllProductos?.numeroTotal ?? 0

  return {
    loading,
    db,
    nTotal
  }
}
