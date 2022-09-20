import { useGetBancoIdQuery } from '../generated/graphql'

export const useBancosId = ({ bancoId }: { bancoId: number }) => {
	const { data, loading, refetch } = useGetBancoIdQuery({
		fetchPolicy: 'network-only',
		variables: {
			bancoId
		}
	})
	const db = data?.GetBancoId ?? {}

	return {
		db,
		loading,
		refetch
	}
}
