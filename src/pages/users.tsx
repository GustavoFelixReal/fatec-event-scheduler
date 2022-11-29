import { AxiosResponse } from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Container } from 'src/components/common/Container'
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

      <table>
        <thead>
          <th>Nome</th>
          <th>Nome de usuário</th>
          <th>E-mail</th>
          <th>Administrador</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? 'Sim' : 'Não'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default UsersReport
