import React from 'react'
import { BackArrow } from './BackArrow'
import { PaymentTypes, StepProps, Steps } from './types'
import { Button } from '~/components/primitives/Button'
import { Text } from '~/components/primitives/Text'
import { Payments } from '~/components/shared/styled'
import { useStore } from '~/store'
import { ModalBody, ModalHeader } from './styles'
import { PaymentsIcon } from '~/components/icons'
import { styled } from '~/styles/stitches.config'
import Decimal from 'decimal.js'

const MethodStepActionsWrapper = styled('div', {
  width: '100%',
  gap: '$regular',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  '@small-min': {
    flexDirection: 'row',
  },
})

export const MethodStep: React.FC<StepProps> = ({ onClose, setPaymentType, setStep, asset }) => {
  const { user, setActiveNavKey, syncEthPrice } = useStore()
  const isSufficientBalance = new Decimal(user?.eth_balance || 0).greaterThanOrEqualTo(
    new Decimal(asset.token_price?.toString() || 0),
  )

  return (
    <React.Fragment>
      <ModalHeader>
        <h2>
          <Button icon={<BackArrow />} onClick={onClose} variant="transparent" />
          {isSufficientBalance ? 'Choose a Payment Method' : 'Low Crypto Balance'}
        </h2>
      </ModalHeader>
      <ModalBody>
        {isSufficientBalance ? (
          <p>
            You can pay for your selected NFT with Ethereum or Visa/Mastercard. If you pay with
            credit card, you will make your purchase via our secure payment partner.
          </p>
        ) : (
          <p>
            You do not have enough crypto to make your purchase. Please add funds to your wallet or
            you can choose to pay with Visa/Mastercard.
          </p>
        )}

        <MethodStepActionsWrapper>
          <Button
            variant="primary"
            size="large"
            onClick={() => {
              syncEthPrice()
              if (isSufficientBalance) {
                setPaymentType(PaymentTypes.Crypto)
                setStep(Steps.ConfirmCryptoStep)
              } else {
                setActiveNavKey('wallet')
                onClose()
              }
            }}
            text={isSufficientBalance ? 'Pay with Crypto' : 'Add Crypto'}
          />
          <Button
            variant="secondary"
            size="large"
            text="Pay with Card"
            onClick={() => {
              setPaymentType(PaymentTypes.Fiat)
              setStep(Steps.ConfirmFiatStep)
            }}
          />
        </MethodStepActionsWrapper>
        <Payments align="center" justify="center" direction="column">
          <Text variant="unset">Pay With:</Text>
          <PaymentsIcon />
        </Payments>
      </ModalBody>
    </React.Fragment>
  )
}
