import { useGetEfectivoMovilIdQuery } from '../generated/graphql'

export const useEfectivoMovilId = ({ efectivoMovilId }: { efectivoMovilId: number }) => {
	const { data, loading, refetch } = useGetEfectivoMovilIdQuery({
		fetchPolicy: 'network-only',
		variables: {
			efectivoMovilId
		}
	})
	const db = data?.GetEfectivoMovilId ?? {}

	return {
		db,
		loading,
		refetch
	}
}
