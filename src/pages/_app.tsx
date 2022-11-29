import '../styles/tokens.scss'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { Layout } from 'src/Layout'
import { AuthProvider } from 'src/sdk/auth/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout
        search={pageProps?.search as boolean}
        back={pageProps?.back as boolean}
      >
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
