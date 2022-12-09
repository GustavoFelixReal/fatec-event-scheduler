import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { RESPONSE_STATUS_UNAUTHORIZED } from 'src/constants'
import { AuthTokenError } from 'src/sdk/errors/AuthTokenError'

export function setupAPIClient(ctx = undefined) {
  const cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
  })

  api.interceptors.request.use((config) => {
    const newConfig = config

    if (cookies['fes.token'])
      newConfig.headers['Authorization'] = `Bearer ${cookies['fes.token']}`

    return newConfig
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError) => {
      if (error.response.status === RESPONSE_STATUS_UNAUTHORIZED) {
        return Promise.reject(new AuthTokenError())
      }

      return Promise.reject(error)
    }
  )

  return api
}
