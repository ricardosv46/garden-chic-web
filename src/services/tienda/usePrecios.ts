import { useGetPreciosQuery } from 'src/generated/graphql'

// Obtenemos todas los blogs
export const usePrecios = () => {
	const { data, loading, refetch } = useGetPreciosQuery({
		fetchPolicy: 'network-only',
		variables: {}
	})

	const precios = data?.GetPrecios ?? {}

	return {
		loading,
		precios
	}
}
