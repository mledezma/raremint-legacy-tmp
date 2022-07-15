// import { useFetcher, useLocation } from '@remix-run/react'
import Decimal from 'decimal.js'
import { ethToUsd } from '~/library/utils'
// import { signMessage } from '~/session/auth.client'
import { useStore } from '~/store'
import { AppUser, LoginStrategy } from '~/types'

// Fix this
export const useAuth = () => {
  // const location = useLocation()
  // const fetcher = useFetcher()
  // const { build_flags, setUser, setTopbarMessage } = useStore()

  // const login = async (strategy: LoginStrategy, redirect_to = location.pathname || '/') => {
  //   console.log(`🙍🏻 login with ${strategy} and redirect to ${redirect_to}`)
  //   try {
  //     const { signature, address, message, eth_balance, chain_id } = await signMessage(strategy)

  //     fetcher.submit(
  //       {
  //         signature,
  //         address,
  //         message,
  //         eth_balance,
  //         chain_id,
  //       },
  //       {
  //         method: 'post',
  //         action: `/actions/login/${strategy}?redirect_to=${redirect_to}`,
  //       },
  //     )

  //     // setTimeout(() => {
  //     //   const optimistic_app_user: AppUser = {
  //     //     login_strategy: strategy,
  //     //     address,
  //     //     network: build_flags.network.chain,
  //     //     eth_balance: new Decimal(eth_balance),
  //     //     usd_balance: new Decimal(ethToUsd(eth_balance)),
  //     //     chain_id: build_flags.network.chain_id,
  //     //   }
  //     //   setUser(optimistic_app_user)
  //     // }, 1000)
  //   } catch (err) {
  //     console.error(err)
  //     setTopbarMessage('Error signing in! Please check your wallet extension', 'alert')
  //   }
  // }

  // const logout = () => {
  //   fetcher.submit(
  //     {},
  //     {
  //       method: 'post',
  //       action: `/actions/logout`,
  //     },
  //   )
  // }

  const login = () => {}
  const logout = () => {}

  return { login, logout }
}
