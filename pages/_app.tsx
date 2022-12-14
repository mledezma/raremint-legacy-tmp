import type { AppProps } from 'next/app'
import { useStore } from '~/store'
import { useLocation } from 'react-use'
import React, { useEffect } from 'react'
import { isBrowser } from '~/library/utils'
import { Layout } from '~/components/layout/Layout'
import { SessionProvider } from "next-auth/react"

// NOTE: we are only using zustand on the client side for sharing state between components and ease optimistic ui updates.
//       we are not doing any hydration of the store from the server as in here. https://bit.ly/3uSGsm . its not necessary at the moment.
if (isBrowser && !useStore.getState().zustand_initialized) {
  useStore.setState({
    zustand_initialized: true,
    zustand_init_time: new Date(),
  })
  console.log('🗂 initialized zustand state')
  // initialize web3auth on first page load
  useStore.getState().web3authInit()
}


function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const location = useLocation()
  const store = useStore()

  // update the eth price every time you change url
  useEffect(() => {
    useStore.getState().syncEthPrice()
  }, [location.pathname])

  // log the store state on every update
  useEffect(() => {
    if (!useStore.getState()) console.log('✓ zustand state updated', JSON.parse(JSON.stringify(useStore.getState())))
  }, [store])

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp


