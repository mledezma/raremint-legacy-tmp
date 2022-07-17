import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import { Buffer } from 'buffer'
import { ethers } from 'ethers'
import { useStore } from '~/store'
import Decimal from 'decimal.js'
import { normalizeChainId, ethereum } from '~/library/utils'

// polyfill Buffer for client
if (!window.Buffer) window.Buffer = Buffer

export const createWalletConnectConnector = () =>
  new WalletConnect({
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal,
  })

// Create a connector
let connector = createWalletConnectConnector()

// Replace global connector
export const recreateGlobalWalletConnectConnector = () => {
  connector = createWalletConnectConnector()
}

export const getBalanceDefaultProvider = async () => {
  const address = useStore.getState().user?.address
  const network = useStore.getState().user?.network
  const infura_api_key = useStore.getState().build_flags.services
  if (!address || !network) return { eth_balance: new Decimal(0), address: address || '' }
  const provider = ethers.getDefaultProvider(network, {
    infura: infura_api_key,
  })
  const eth_balance = new Decimal(ethers.utils.formatEther(await provider.getBalance(address)))
  return { eth_balance, address }
}

export const getBalanceStaticProvider = async () => {
  const address = connector.accounts[0]
  const chain_id = connector.chainId
  const chains = useStore.getState().build_flags.chains
  const networkData = chains.filter((network) => network.chain_id === chain_id)[0]
  const provider = new ethers.providers.StaticJsonRpcProvider(networkData.rpc_url, {
    chainId: chain_id,
    name: networkData.name,
  })
  const eth_balance = new Decimal(ethers.utils.formatEther(await provider.getBalance(address)))
  return { eth_balance, address, chain_id: normalizeChainId(chain_id) }
}

export const getWalletData = async () => {
  const user = useStore.getState().user
  if (!user) return
  const login_strategy = useStore.getState().user?.login_strategy
  if (login_strategy === 'metamask') {
    if (!ethereum) return
    await ethereum.request({ method: 'eth_requestAccounts' })
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    const eth_balance = new Decimal(ethers.utils.formatEther(await provider.getBalance(address)))
    return { eth_balance, address, chain_id: ethereum.chainId as string }
  }
  return await getBalanceStaticProvider()
}

type SyncBalanceProps = {
  address: string
  eth_balance: Decimal
  chain_id: string
}
export const syncBalance = async ({ eth_balance, address, chain_id }: SyncBalanceProps) => {
  const formData = new FormData()
  formData.append('eth_balance', eth_balance.toString())
  formData.append('address', address)
  formData.append('chain_id', chain_id)
  const response = await fetch(`/actions/wallet/sync`, {
    method: 'POST',
    body: formData,
  })
  if (!response.ok) {
    console.error(`Unexpected error: ${response.status}`)
    return
  }
  return response.json()
}

export { connector, Buffer }
