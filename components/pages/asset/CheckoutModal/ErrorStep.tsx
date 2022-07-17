import React from 'react'
import { BackArrow } from './BackArrow'
import { StepProps, Steps } from './types'
import { Box } from '~/components/primitives/Box'
import { Button } from '~/components/primitives/Button'
import { Flex } from '~/components/primitives/Flex'
import { ModalBody, ModalHeader } from './styles'

export const ErrorStep: React.FC<StepProps> = ({ onClose, setStep }) => {
  return (
    <React.Fragment>
      <ModalHeader>
        <h2>
          <Button icon={<BackArrow />} onClick={onClose} variant="transparent" />
          Error
        </h2>
      </ModalHeader>
      <ModalBody>
        <p>There was an issue with your transaction. Please try again</p>

        <Flex align="center" justify="center" css={{ width: '100%' }}>
          <Box css={{ minWidth: 245 }}>
            <Button
              variant="primary"
              size="large"
              onClick={() => setStep(Steps.Method)}
              text="Retry"
            />
          </Box>
        </Flex>
      </ModalBody>
    </React.Fragment>
  )
}
