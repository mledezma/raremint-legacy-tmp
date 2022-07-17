import { Asset } from '~/types'

export enum PaymentTypes {
  Crypto,
  Fiat,
}

export enum Steps {
  Method,
  ConfirmCryptoStep,
  ConfirmFiatStep,
  Kyc,
  Connect,
  Error,
}

export type StepProps = {
  paymentType?: PaymentTypes
  setPaymentType: React.Dispatch<React.SetStateAction<PaymentTypes | undefined>>
  setStep: React.Dispatch<React.SetStateAction<Steps>>
  onClose(): void
  asset: Asset
}
