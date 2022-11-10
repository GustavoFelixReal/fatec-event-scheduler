import axios from 'axios'
import { parseCookies } from 'nookies'

export function setupAPIClient(ctx = undefined) {
  const cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      Authorization: `Bearer ${cookies['fes.token']}`
    }
  })

  api.interceptors.request.use((config) => {
    const newConfig = config
    const { 'fes.token': accessToken } = parseCookies()

    if (accessToken) newConfig.headers['Access-Token'] = `Bearer ${accessToken}`

    return config
  })

  return api
}
