// ToDo: fix this
import { useStore } from '~/store'
// import { WalletCard } from '../shared/WalletCard'
// import { WalletConnector } from '../shared/WalletConnector'

export const NavWallet = () => {
  const { user } = useStore()
  // if (user) return <WalletCard />
  // return <WalletConnector />
  return <h1>Hi</h1>
}
