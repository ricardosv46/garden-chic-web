import { useLoginMutation } from '../generated/graphql'

interface IUseLogin {
  email: string
  password: string
}

export const useLogin = () => {
  const [LoginUsuario, { loading: loadingLogin }] = useLoginMutation()

  const loginUsuario = async ({ email, password }: IUseLogin) => {
    try {
      const res = await LoginUsuario({
        variables: {
          input: {
            email,
            password
          }
        }
      })
      console.log(res)
      if (res.data?.Login.id) {
        localStorage.setItem('user', JSON.stringify(res.data?.Login))
        return { ok: true }
      }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }
  return {
    loadingLogin,
    loginUsuario
  }
}
