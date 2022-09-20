import { useGetAllEfectivoMovilQuery } from '../generated/graphql'

export const useEfectivoMovil = () => {
	const { data, loading, refetch } = useGetAllEfectivoMovilQuery({
		fetchPolicy: 'network-only',
		variables: {
			estado: 'Activado'
		}
	})
	const db = data?.GetAllEfectivoMovil.data ?? []

	return {
		db,
		loading,
		refetch
	}
}
