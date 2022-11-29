import { useAuth } from 'src/sdk/auth/AuthContext'
type UseCanParams = {
  mustBeAdmin: boolean
}

export function useCan({ mustBeAdmin }: UseCanParams) {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return false
  }

  return user.isAdmin === mustBeAdmin

  return true
}
