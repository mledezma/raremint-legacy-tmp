import { normalizeChainId } from '~/library/utils'
import { prisma } from '~/library/prisma'
// import { createCookieSessionStorage } from '@remix-run/node'
import { ethers } from 'ethers'
// import { Authenticator, AuthorizationError } from 'remix-auth'
// import { FormStrategy } from 'remix-auth-form'
import type { AppUser } from '~/types'
import Decimal from 'decimal.js'
import { backend_secrets, build_flags } from '~/environment'

// export const session_storage = createCookieSessionStorage({
//   cookie: {
//     name: '__session',
//     httpOnly: true,
//     path: '/',
//     sameSite: 'lax',
//     secrets: [backend_secrets.session_storage_secret],
//     secure: process.env.NODE_ENV === 'production',
//   },
// })

// export const { getSession, commitSession, destroySession } = session_storage

// export const auth = new Authenticator<AppUser>(session_storage)

export const auth = {
  isAuthenticated: () => false
}

const getLoginFormData = (form: FormData) => {
  const address = form.get('address')?.toString() || ''
  const signature = form.get('signature')?.toString() || ''
  const message = form.get('message')?.toString() || ''
  const eth_balance = form.get('eth_balance')?.toString() || ''
  const chain_id = `0x${form.get('chain_id')?.toString() || '1'}`

  return { address, signature, message, eth_balance, chain_id }
}

// auth
//   .use(
//     new FormStrategy(async ({ form }) => {
//       const { address, signature, message, eth_balance, chain_id } = getLoginFormData(form)

//       if (!address || !signature || !message)
//         throw new AuthorizationError(`Invalid metamask login request`)

//       const signerAddr = await ethers.utils.verifyMessage(message, signature)
//       if (signerAddr !== address) throw new AuthorizationError(`Invalid signature`)

//       const lowerCaseAddress = address.toLowerCase()

//       // make sure the address is registered so we can subscribe to its data eg balances
//       const account = await prisma.accounts.upsert({
//         where: { address: lowerCaseAddress },
//         update: {},
//         create: {
//           address: lowerCaseAddress,
//           avatar: '',
//         },
//       })

//       const user: AppUser = {
//         login_strategy: 'metamask',
//         address: lowerCaseAddress,
//         chain_id: normalizeChainId(chain_id),
//         network: build_flags.network.chain,
//         eth_balance: new Decimal(eth_balance || 0),
//         usd_balance: new Decimal(0),
//         avatar: account.avatar,
//       }

//       return user
//     }),
//     // each strategy has a name and can be changed to use another one
//     'metamask',
//   )
//   .use(
//     new FormStrategy(async ({ form }) => {
//       const { address, signature, message, eth_balance, chain_id } = getLoginFormData(form)

//       // // all these values are required
//       // if (!address || !signature || !message)
//       //   throw new AuthorizationError(`Invalid Walletconnect login request`)
//       // const signerAddr = await ethers.utils.verifyMessage(message, signature)
//       // if (signerAddr.toLowerCase() !== address.toLowerCase())
//       //   throw new AuthorizationError(`Invalid signature`)

//       const lowerCaseAddress = address.toLowerCase()

//       // make sure the address is registered so we can subscribe to its data eg balances
//       const account = await prisma.accounts.upsert({
//         where: { address: lowerCaseAddress },
//         update: {},
//         create: {
//           address: lowerCaseAddress,
//           avatar: '',
//         },
//       })

//       const user: AppUser = {
//         login_strategy: 'walletconnect',
//         address: lowerCaseAddress,
//         chain_id: normalizeChainId(chain_id),
//         network: build_flags.network.chain,
//         eth_balance: new Decimal(eth_balance || 0),
//         usd_balance: new Decimal(0),
//         avatar: account.avatar,
//       }

//       return user
//     }),
//     // each strategy has a name and can be changed to use another one
//     'walletconnect',
//   )
