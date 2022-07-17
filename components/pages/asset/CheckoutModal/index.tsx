import React, { useState } from 'react'
import { MethodStep } from './MethodStep'
import { ConfirmCryptoStep } from './ConfirmCryptoStep'
import { ConfirmFiatStep } from './ConfirmFiatStep'
import { KycStep } from './KycStep'
import { Asset } from '~/types'
import { Modal } from '~/components/shared/Modal'
import { PaymentTypes, StepProps, Steps } from './types'
import { ErrorStep } from './ErrorStep'

export const StepComponents = new Map<Steps, React.FC<StepProps>>([
  [Steps.Method, MethodStep],
  [Steps.ConfirmCryptoStep, ConfirmCryptoStep],
  [Steps.ConfirmFiatStep, ConfirmFiatStep],
  [Steps.Kyc, KycStep],
  [Steps.Error, ErrorStep],
])

export interface CheckoutModalProps {
  show: boolean
  onClose(): void
  asset: Asset
}

export const CheckoutModal = ({ show, onClose, asset }: CheckoutModalProps) => {
  const [step, setStep] = useState<Steps>(Steps.Method)
  const Step = StepComponents.get(step)
  const [paymentType, setPaymentType] = useState<PaymentTypes>()

  return (
    <Modal show={show} handleClose={onClose} modalType="checkout">
      {Step ? (
        <Step
          paymentType={paymentType}
          setPaymentType={setPaymentType}
          setStep={setStep}
          onClose={onClose}
          asset={asset}
        />
      ) : null}
    </Modal>
  )
}
