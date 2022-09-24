import { useGetBusquedaAvanzadaQuery } from 'src/generated/graphql'

interface Iprops {
  categoriaSlug?: string | null
  destacado: string
  numeroPagina: number
  pagina: number
  precio: number[]
  tipoOrdenacion: string
}

export const useBusqueda = (input = { pagina: 1, numeroPagina: 10, tipoOrdenacion: '', categoriaSlug: '', destacado: '', precio: [] }) => {
  const { data, loading, refetch } = useGetBusquedaAvanzadaQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetBusquedaAvanzada?.data ?? []
  const nTotal = data?.GetBusquedaAvanzada?.numeroTotal ?? 0

  return {
    loading,
    db,
    nTotal
  }
}
