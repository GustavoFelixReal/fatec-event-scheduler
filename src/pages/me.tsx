import { GetServerSideProps, NextPage } from 'next'
import { setupAPIClient } from 'src/services/api'
import { withSSRAuth } from 'src/sdk/auth/withSSRAuth'
import { AxiosResponse } from 'axios'
import { Container } from 'src/components/common/Container'
import Head from 'next/head'
import { Text } from 'src/components/ui/Text'

interface MeProps {
  user: User
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    const api = setupAPIClient(ctx)
    const response: AxiosResponse<MeProps> = await api.get('me')

    const user = response.data.user

    return {
      props: {
        user
      }
    }
  }
)

const Me: NextPage = ({ user }: MeProps) => {
  return (
    <Container>
      <Head>
        <title>{user.name}</title>
      </Head>

      <Text as="h1" variant="heading-1">
        {user.name}
      </Text>
    </Container>
  )
}

export default Me
