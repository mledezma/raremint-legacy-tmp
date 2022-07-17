import React, { useState } from 'react'
import { BackArrow } from './BackArrow'
import { Button } from '~/components/primitives/Button'
import { Box } from '~/components/primitives/Box'
import { ModalBody, ModalHeader } from './styles'
import { StepProps, Steps } from './types'
import { useToggle } from 'react-use'
import { ConfirmSummary } from './ConfirmSummary'

export const ConfirmFiatStep: React.FC<StepProps> = ({ setStep, asset }) => {
  const [loading, setLoadingStatus] = useState(false)
  const [confirmed, toggleConfirm] = useToggle(false)

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
            onClick={() => setStep(Steps.Kyc)}
            text={loading ? 'Processing...' : 'Continue'}
          />
        </Box>
      </ModalBody>
    </React.Fragment>
  )
}
