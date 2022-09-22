import { useRecoverPasswordUsuarioMutation } from 'src/generated/graphql'

interface Props {
	email: string
}

export const useRecoveryPassword = () => {
	const [recovery, { loading: loadingRecovery }] = useRecoverPasswordUsuarioMutation()

	const recoveryPassword = async ({ email }: Props) => {
		try {
			const res = await recovery({
				variables: {
					email
				}
			})

			if (res.data?.RecoverPasswordUsuario) {
				return { ok: true, data: res.data?.RecoverPasswordUsuario }
			}
		} catch (error: any) {
			if (error?.graphQLErrors[0]?.debugMessage === 'NO_EXISTE') {
				return { ok: false, error: 'El Email ingresado no existe' }
			}
			return { ok: false, error: 'El Email ingresado no existe' }
		}
	}
	return {
		loadingRecovery,
		recoveryPassword
	}
}
