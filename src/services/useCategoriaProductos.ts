import { useGetAllCategoriaProductosQuery } from '../generated/graphql'

// Obtenemos todas las categorias
export const useCategoriaProductos = (input = { estado: 'Activado' }) => {
  const { data, loading, refetch } = useGetAllCategoriaProductosQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetAllCategoriaProductos?.data ?? []

  return {
    loading,
    db
  }
}
