import { useGetAllProvinciasQuery } from '../generated/graphql'

// Obtenemos todas los blogs
export const useProvincias = (input = { DepCode: '0' }) => {
  const { data, loading, refetch } = useGetAllProvinciasQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetAllProvincias ?? []

  return {
    loading,
    db
  }
}
