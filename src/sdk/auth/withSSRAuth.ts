import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next'
import { destroyCookie, parseCookies } from 'nookies'
import { AuthTokenError } from '../errors/AuthTokenError'

interface WithSSRAuthOptions {
  isAdmin: boolean
}

export function withSSRAuth<P>(
  fn: GetServerSideProps<P>,
  options?: WithSSRAuthOptions
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)
    const token = cookies['fes.token']

    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }

    if (options) {
      const { isAdmin } = options

      if (isAdmin) {
        return {
          redirect: {
            destination: '/dashboard',
            permanent: false
          }
        }
      }
    }

    try {
      return await fn(ctx)
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, 'fes.token')
        destroyCookie(ctx, 'fes.usr')

        return {
          redirect: {
            destination: '/login',
            permanent: false
          }
        }
      }
    }
  }
}
