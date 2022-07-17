import React, { useState } from 'react'
import marketContract from '~/contracts/marketplace-abi.json'
import { BackArrow } from './BackArrow'
import { ethereum, normalizeChainId } from '~/library/utils'
import { routes } from '~/library/routes'
import { useNavigate } from 'react-router-dom'
import { Button } from '~/components/primitives/Button'
import { Box } from '~/components/primitives/Box'
import { useStore } from '~/store'
import { ethers } from 'ethers'
import { connector } from '~/session/wallet.client'
import { ModalBody, ModalHeader } from './styles'
import { StepProps, Steps } from './types'
import { useToggle } from 'react-use'
import { TransactionHash } from '~/types'
import { ConfirmSummary } from './ConfirmSummary'
import { transactions } from '@prisma/client'

export const ConfirmCryptoStep: React.FC<StepProps> = ({ setStep, paymentType, asset }) => {
  const [loading, setLoadingStatus] = useState(false)
  const { user, build_flags } = useStore()
  const address = user?.address
  const navigate = useNavigate()
  const [confirmed, toggleConfirm] = useToggle(false)

  const saveTransaction = async (params: Omit<transactions, 'status' | 'receipt'>) => {
    const formData = new FormData()
    formData.append('status', 'pending')
    for (const [key, value] of Object.entries(params)) {
      formData.append(key, value as string)
    }
    const response = await fetch(`/actions/transaction/save`, {
      method: 'POST',
      body: formData,
    })
    if (!response.ok) {
      throw new Error(`Unexpected error: ${response.status}`)
    }
  }

  const purchaseNFTwithMetamask = async (): Promise<TransactionHash> => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(
      build_flags.contracts.eth_marketplace,
      marketContract,
      signer,
    )
    const crypto_transaction = await contract.functions.createMarketSale(
      asset.contract_address,
      asset.marketplace_id,
      address,
      {
        value: ethers.utils.parseUnits(asset?.token_price.toString(), 18),
      },
    )
    return crypto_transaction.hash as TransactionHash
  }

  const purchaseNFTWithWalletConnect = async (): Promise<TransactionHash> => {
    const networkData = build_flags.chains.filter(
      (network) => normalizeChainId(network.chain_id) === normalizeChainId(user?.chain_id),
    )[0]
    const provider = new ethers.providers.JsonRpcProvider(networkData.rpc_url)
    const signer = provider.getSigner(address)
    const contract = new ethers.Contract(
      build_flags.contracts.eth_marketplace,
      marketContract,
      signer,
    )
    const unsigned_tx = await contract.populateTransaction.createMarketSale(
      asset.contract_address,
      asset.marketplace_id,
      address,
    )
    return connector.sendTransaction({
      from: unsigned_tx.from!,
      to: unsigned_tx.to,
      data: unsigned_tx.data,
      value: ethers.utils.hexlify(ethers.utils.parseUnits(asset?.token_price.toString(), 18)),
    })
  }

  const purchaseNFTWithCrypto = async () => {
    try {
      setLoadingStatus(true)
      const is_metamask = user?.login_strategy === 'metamask'
      const hash = await (is_metamask ? purchaseNFTwithMetamask() : purchaseNFTWithWalletConnect())
      await saveTransaction({
        hash,
        signer: user!.address,
        asset_uri: asset.asset_uri,
        chain: '',
      })
      navigate(`${routes.my_collection_collected}?success=true`)
    } catch (err: any) {
      console.log('error purcahseing nft', err)
      setStep(Steps.Error)
      setLoadingStatus(false)
    }
  }

  return (
    <React.Fragment>
      <ModalHeader>
        <h2>
          <Button
            icon={<BackArrow />}
            onClick={() => setStep(Steps.Method)}
            variant="transparent"
          />
          Complete Checkout
        </h2>
      </ModalHeader>
      <ModalBody>
        <ConfirmSummary asset={asset} confirmed={confirmed} toggleConfirm={toggleConfirm} />
        <Box css={{ width: 245 }}>
          <Button
            variant="primary"
            size="large"
            disabled={!confirmed || loading}
            onClick={purchaseNFTWithCrypto}
            text={loading ? 'Processing...' : 'Confirm Purchase'}
          />
        </Box>
      </ModalBody>
    </React.Fragment>
  )
}
