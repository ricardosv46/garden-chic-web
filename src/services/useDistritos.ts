import { useGetAllDistritosQuery } from '../generated/graphql'

// Obtenemos todas los blogs
export const useDistritos = (input = { ProCode: '0' }) => {
  const { data, loading, refetch } = useGetAllDistritosQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetAllDistritos ?? []

  return {
    loading,
    db
  }
}
