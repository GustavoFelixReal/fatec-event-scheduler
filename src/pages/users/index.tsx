import { AxiosResponse } from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Container } from 'src/components/common/Container'
import { UsersTable } from 'src/components/user/UsersTable/UsersTable'
import { withSSRAuth } from 'src/sdk/auth/withSSRAuth'
import { setupAPIClient } from 'src/services/api'

interface UsersProps {
  users: User[]
}

export const getServerSideProps: GetServerSideProps = withSSRAuth<UsersProps>(
  async (ctx) => {
    const api = setupAPIClient(ctx)
    const response: AxiosResponse<UsersProps> = await api.get('users')

    const users = response.data.users

    return {
      props: {
        users
      }
    }
  }
)

const UsersReport: NextPage = ({ users }: UsersProps) => {
  console.log(users)

  return (
    <Container>
      <Head>
        <title>Usuários</title>
      </Head>

      <UsersTable users={users} />
    </Container>
  )
}

export default UsersReport
