import { useGetAllProductosPalabraClaveLazyQuery, } from '../../generated/graphql'

interface Iprops {
	numeroPagina: number
	pagina: number
	palabraClave: string
}

export const useBusquedaPalabraClave = () => {
	const [MutationUseBusquedaPalabraClave, { loading }] = useGetAllProductosPalabraClaveLazyQuery({
		onError: (err) => {
			console.log('onError Busqueda Palabra ', err?.graphQLErrors[0])
		}
	})

	const FunctionBusquedaPalabraClave = async (props: Iprops) => {
		try {
			const res = await MutationUseBusquedaPalabraClave({
				variables: props
			})

			const db = res?.data?.GetAllProductosPalabraClave?.data ?? []
			const nTotal = res?.data?.GetAllProductosPalabraClave?.numeroTotal ?? 0

			return { ok: true, loading, db, nTotal }
		} catch (error: any) {
			return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
		}
	}
	return { FunctionBusquedaPalabraClave, loading }
}
