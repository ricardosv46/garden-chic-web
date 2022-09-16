import { useCreateContactosMutation, useLoginMutation } from '../generated/graphql'

interface ICreateContacto {
	email: string
	nombre: string
	celular: string
	tipoServicio: string
	descripcion: string
}

export const useContactos = () => {
	const [CrearContacto, { loading: loadingCreate }] = useCreateContactosMutation()

	const crearContacto = async ({ email, nombre, celular, tipoServicio, descripcion }: ICreateContacto) => {
		try {
			const res = await CrearContacto({
				variables: {
					input: {
						email,
						nombre,
						celular,
						tipoServicio,
						descripcion
					}
				}
			})

			return { ok: true }
		} catch (error: any) {
			return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
		}
	}
	return {
		loadingCreate,
		crearContacto
	}
}
