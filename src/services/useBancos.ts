import { useGetAllBancosQuery } from '../generated/graphql'

export const useBancos = () => {
	const { data, loading, refetch } = useGetAllBancosQuery({
		fetchPolicy: 'network-only',
		variables: {
			estado: 'Activado'
		}
	})
	const db = data?.GetAllBancos?.data ?? []

	// actualizar estado banco

	return {
		db,
		loading,
		refetch
	}
}
