import { NextPage } from 'next'
import Head from 'next/head'
import { Container } from 'src/components/common/Container'
import { LoginForm } from 'src/components/login/LoginForm'
import { Text } from 'src/components/ui/Text'

const Login: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
        <meta name="description" content="Eventos da Fatec ZL" />
      </Head>

      <Text as="h1" variant="heading-1">
        Login
      </Text>

      <LoginForm />
    </Container>
  )
}

export default Login
