import '../styles/tokens.scss'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Router from 'next/router'
import nProgress from 'nprogress'
import { ToastContainer } from 'react-toastify'

import { Layout } from 'src/Layout'
import { AuthProvider } from 'src/sdk/auth/AuthContext'

import 'react-toastify/dist/ReactToastify.css'
import 'nprogress/nprogress.css'

nProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false
})

Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeError', () => nProgress.done())
Router.events.on('routeChangeComplete', () => nProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ToastContainer
        position="top-center"
        toastClassName="toast-background"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

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
