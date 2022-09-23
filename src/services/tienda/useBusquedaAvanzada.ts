import { useGetBusquedaAvanzadaLazyQuery, useGetBusquedaAvanzadaQuery } from 'src/generated/graphql'

interface Iprops {
	categoriaSlug?: string | null
	destacado: string
	numeroPagina: number
	pagina: number
	precio: number[]
	tipoOrdenacion: string
}

// Obtenemos todas los blogs
export const useBusquedaAvanzada = () => {
	const [MutationUseGetBusquedaAvanzada, { loading }] = useGetBusquedaAvanzadaLazyQuery({
		onError: (err) => {}
	})

	const FunctionBusquedaAvanzada = async (FilterOptions: Iprops) => {
		try {
			const res = await MutationUseGetBusquedaAvanzada({
				variables: FilterOptions
			})

			const db = res?.data?.GetBusquedaAvanzada?.data ?? []
			const nTotal = res?.data?.GetBusquedaAvanzada?.numeroTotal ?? 0

			return { ok: true, loading, db, nTotal }
		} catch (error: any) {
			return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
		}
	}
	return { FunctionBusquedaAvanzada, loading }
}
