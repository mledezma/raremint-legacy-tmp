import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useStore } from '~/store'

// initialize the store
// if (isBrowser) useStore.getState().init()

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
