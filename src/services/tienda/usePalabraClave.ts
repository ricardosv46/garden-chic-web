import { useGetAllProductosPalabraClaveQuery } from 'src/generated/graphql'

interface Iprops {
  numeroPagina: number
  pagina: number
  palabraClave: string
}

export const usePalabraClave = (input = { pagina: 1, palabraClave: '', numeroPagina: 10 }) => {
  const { data, loading, refetch } = useGetAllProductosPalabraClaveQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetAllProductosPalabraClave?.data ?? []
  const nTotal = data?.GetAllProductosPalabraClave?.numeroTotal ?? 0

  return {
    loading,
    db,
    nTotal
  }
}
