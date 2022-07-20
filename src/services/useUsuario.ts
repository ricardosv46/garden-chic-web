import { useCreateUsuarioMutation } from '../generated/graphql'

interface ICreate {
  nombres: string
  apellidos: string
  email: string
  password: string
}

// Obtenemos todas las categorias
export const useUsuario = () => {
  const [CreateUsuario, { loading: loadingCreate }] = useCreateUsuarioMutation()

  const createUsuario = async ({ nombres, apellidos, email, password }: ICreate) => {
    try {
      const res = await CreateUsuario({
        variables: {
          input: {
            tipoUsuario: null,
            tipoDocumento: '',
            numeroDocumento: '',
            genero: null,
            nombres,
            apellidos,
            celular: '',
            fechaNacimiento: '',
            email,
            password
          }
        }
      })
      return { ok: true }
    } catch (error: any) {
      console.log(error?.graphQLErrors[0]?.debugMessage)
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }

  return {
    createUsuario,
    loadingCreate
  }
}
