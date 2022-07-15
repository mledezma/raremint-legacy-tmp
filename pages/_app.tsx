import type { AppProps } from 'next/app'
import { useStore } from '~/store'
import { useLocation } from 'react-use'
import React, { useEffect } from 'react'
import { isBrowser } from '~/library/utils'

// initialize web3auth on first page load
if (isBrowser && !useStore.getState().zustand_initialized) {
  useStore.setState({
    zustand_initialized: true,
    zustand_init_time: new Date(),
  })
  console.log('🗂 initialized zustand state')
  useStore.getState().web3authInit()
}


function MyApp({ Component, pageProps }: AppProps) {
  const location = useLocation()
  const store = useStore()
      
  // update the eth price every time you change url
  useEffect(() => {
    useStore.getState().syncEthPrice()
  }, [location.pathname])

  // log the store state on every update
  useEffect(() => {
    console.log('✓ zustand state updated', useStore.getState())
  }, [store])

  return <Component {...pageProps} />
}

export default MyApp


