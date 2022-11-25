import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'

import { api } from 'src/services/apiClient'
import { AxiosResponse } from 'axios'

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
  user: User
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

let authChannel: BroadcastChannel

export function signOut() {
  destroyCookie(undefined, 'fes.token')

  authChannel.postMessage('signOut')

  Router.push('/login')
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  useEffect(() => {
    authChannel = new BroadcastChannel('auth')

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          signOut()
          break
        default:
          break
      }
    }
  }, [])

  useEffect(() => {
    const { 'fes.token': token } = parseCookies()

    if (token) {
      api
        .get('/me')
        .then((response) => {
          const { user } = response.data

          setUser(user)
        })
        .catch(() => {
          signOut()
        })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response: AxiosResponse<{ token: string; user: User }> =
        await api.post('login', {
          email,
          password
        })

      const { token, user } = response.data

      setCookie(undefined, 'fes.token', token, {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/'
      })

      setUser(user)

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      Router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
