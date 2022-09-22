import { useGetAllBlogsQuery } from '../generated/graphql'

// Obtenemos todas los blogs
export const useBlogs = (input = { pagina: 1, estado: 'Activado', numeroPagina: 10 }) => {
	const { data, loading, refetch } = useGetAllBlogsQuery({
		fetchPolicy: 'network-only',
		variables: {
			...input
		}
	})

	const db = data?.GetAllBlogs?.data ?? []
	const nTotal = data?.GetAllBlogs?.numeroTotal ?? 0

	return {
		loading,
		db,
		nTotal
	}
}
