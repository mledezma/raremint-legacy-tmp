import { useStore } from '~/store'
import { WalletCard } from '~/components/shared/WalletCard'
import { WalletConnector } from '../shared/WalletConnector'

export const NavWallet = () => {
  const { user } = useStore()
  if (user) return <WalletCard />
  return <WalletConnector />
}
