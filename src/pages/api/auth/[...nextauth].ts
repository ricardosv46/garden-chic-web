import request from 'graphql-request'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { useLoginMutation } from '../../../generated/graphql'

const LOGIN_AUTH = `mutation Login($input: LoginInput!) {
  Login(input: $input) {
    id
    tipoUsuario
    tipoDocumento
    numeroDocumento
    genero
    nombres
    apellidos
    celular
    fechaNacimiento
    foto
    email
    apiToken
    customer_id
  }
}`

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials: any) {
        try {
          const res = await request('https://plantilla.rongqian.pe/public/graphql', LOGIN_AUTH, {
            input: {
              email: credentials.email,
              password: credentials.password
            }
          })

          if (res?.Login) {
            // localStorage.setItem('user', JSON.stringify(res.data?.Login))
            // const user = res.data?.Login
            // console.log(user)
            return res?.Login
          }
          console.log('res', res)
        } catch (error: any) {
          console.log('res', error)
          throw new Error(error.response.errors[0].debugMessage)
        }

        // const res = await LoginUsuario({
        //   variables: {
        //     input: {
        //       email: 'ricardosv46@gmail.com',
        //       password: '123456'
        //     }
        //   }
        // })
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    strategy: 'jwt'
  },
  callbacks: {
    async session({ session, token }: any) {
      session.user = token.user
      return session
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.user = user
      }
      return token
    }
  }
})
