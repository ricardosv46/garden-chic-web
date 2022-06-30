import { useGetAllCategoriaBlogsQuery } from '../generated/graphql'

// Obtenemos todas las categorias
export const useCategoriaBlogs = (input = { estado: 'Activado' }) => {
  const { data, loading, refetch } = useGetAllCategoriaBlogsQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetAllCategoriaBlogs?.data ?? []

  return {
    loading,
    db
  }
}
