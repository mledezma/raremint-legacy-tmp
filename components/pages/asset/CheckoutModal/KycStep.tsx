import { useEffect } from 'react'
import { BackArrow } from './BackArrow'
import { StepProps, Steps } from './types'
import WertWidget from '@wert-io/widget-initializer'
import { v4 as uuidv4 } from 'uuid'
import { ethers } from 'ethers'
import marketplaceABI from '~/contracts/marketplace-abi.json'
import { useStore } from '~/store'
import React from 'react'
// import { useFetcher } from '@remix-run/react'
import { Spinner } from '~/components/shared/Spinner'
import { Button } from '~/components/primitives/Button'
import { Box } from '~/components/primitives/Box'
import { ModalBody, ModalHeader } from './styles'
import { styled } from '~/styles/stitches.config'

export const CONTAINER_ID = 'wert-widget'
export const COMMODITY = 'ETH'
export const PK_ID = 'key1'

const WertWidgetContainer = styled(Box, {
  height: '100vh',
  width: '100%',
  '@x-small-min': {
    height: 640,
  },
})

const kyc_modal_body_styles = {
  height: 'calc(99vh - 108px)',
  paddingLeft: 0,
  paddingRight: 0,
  '@small-min': { height: 350 },
}

export const KycStep: React.FC<StepProps> = ({ setStep, asset }) => {
  const { user, build_flags, setTopbarMessage } = useStore()
  // const fetcher = useFetcher()

  const address = user?.address
  const getWertSignedData = (params: any): Promise<any> => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    }
    return new Promise((resolve) => {
      fetch(`${build_flags.services.raremint_api_url}/wert_sig`, options)
        .then((response) => response.json())
        .then((data) => {
          resolve(data)
        })
    })
  }

  const getSignedData = async () => {
    const iface = new ethers.utils.Interface(marketplaceABI)

    const encodedFunction = iface.encodeFunctionData('createMarketSale', [
      asset.contract_address,
      asset?.marketplace_id,
      address,
    ])

    const signedData = await getWertSignedData({
      address: address || '',
      commodity: COMMODITY,
      commodity_amount: asset.token_price.toString(),
      pk_id: PK_ID,
      sc_address: build_flags.contracts.eth_marketplace,
      sc_id: uuidv4(),
      sc_input_data: encodedFunction,
    })

    const wertWidget = new WertWidget({
      ...signedData,
      origin: build_flags.wert.origin,
      partner_id: build_flags.wert.partnerId,
      click_id: uuidv4(),
      container_id: CONTAINER_ID,
      listeners: {
        // When we hit 'Purchase' this will trigger, to show payment status which will help us for UX, change if needed per requirements.
        'payment-status': (data: any) => {
          switch (data.status) {
            case 'pending':
              setTopbarMessage('Processing Transaction...')
              break
            case 'canceled':
            case 'failed':
            case 'failover':
              setTopbarMessage('Transaction Payment Failed or Cancelled', 'alert')
              break
            case 'success':
              setTopbarMessage('Transaction Completed Successfully!', 'confirmation')
              break
            default:
              break
          }
        },
        error: (data: any) => setTopbarMessage(data.error ?? '', 'alert'),
      },
    })

    wertWidget.mount()
  }

  useEffect(() => {
    getSignedData()
  }, [])

  return (
    <React.Fragment>
      <ModalHeader>
        <h2>
          <Button
            icon={<BackArrow />}
            onClick={() => setStep(Steps.ConfirmFiatStep)}
            variant="transparent"
          />
          Verification
        </h2>
      </ModalHeader>

      <ModalBody className="widgetContainer" id={CONTAINER_ID} css={kyc_modal_body_styles}>
        <Spinner />
      </ModalBody>
    </React.Fragment>
  )
}
