import { AxiosResponse } from 'axios'
import { NextPage } from 'next'
import Head from 'next/head'
import { Container } from 'src/components/common/Container'
import { UserForm } from 'src/components/user/UserForm/UserForm'
import { withSSRAuth } from 'src/sdk/auth/withSSRAuth'
import { setupAPIClient } from 'src/services/api'

interface ManageProps {
  user: User
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const api = setupAPIClient(ctx)
  const response: AxiosResponse<ManageProps> = await api.get(
    `users/${ctx.params.id}`
  )

  const user = response.data.user

  return {
    props: {
      user
    }
  }
})

const Manage: NextPage<ManageProps> = ({ user }) => {
  return (
    <Container>
      <Head>
        <title>Gerenciar Funcionário</title>
      </Head>

      <UserForm defaultValues={user} />
    </Container>
  )
}

export default Manage
