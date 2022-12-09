import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { Container } from 'src/components/common/Container'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/event',
      permanent: false
    }
  }
}

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
        <meta name="description" content="Eventos da Fatec ZL" />
      </Head>
    </Container>
  )
}

export default Home
