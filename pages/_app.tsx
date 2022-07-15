import type { AppProps } from 'next/app'
import { useStore } from '~/store'
import { useEffectOnce, useLocation } from 'react-use'
import React, { useEffect } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
  const location = useLocation()
    
  // initialize web3auth on first page load
  useEffectOnce(()=> {
    // initialize zustand state
    if (!useStore.getState().zustand_initialized) {
      useStore.setState({
        zustand_initialized: true,
        zustand_init_time: new Date(),
      })
      console.log('🗂 initialized zustand state')
      useStore.getState().web3authInit()
    }
  })
  
  // update the eth price every time you change url
  useEffect(() => {
    useStore.getState().syncEthPrice()
  }, [location.pathname])

  // log the store state on every update
  // useEffect(() => {
  //   console.log('✓ zustand state updated', JSON.parse(JSON.stringify(useStore.getState())))
  // }, [useStore])

  return <Component {...pageProps} />
}

export default MyApp


