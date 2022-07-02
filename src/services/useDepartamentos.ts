import { useGetAllDepartamentosQuery } from '../generated/graphql'

// Obtenemos todas los blogs
export const useDepartamentos = () => {
  const { data, loading } = useGetAllDepartamentosQuery({
    fetchPolicy: 'network-only'
  })

  const db = data?.GetAllDepartamentos ?? []

  return {
    loading,
    db
  }
}
