import { useEffect, useState } from 'react'
import type { Transition } from 'history'
export type Tx = Transition & { retry: () => void }
import { Button } from '~/components/primitives/Button'

import { useBlocker } from '~/library/router'
import { styled } from '~/styles/stitches.config'
import { Modal } from '~/components/shared/Modal'
import { Flex } from '~/components/primitives/Flex'

type AlertPageProps = {
  when?: boolean
}

const H3 = styled('h3', {
  mb: '$regular',
  color: '$default-text-accentuate-color',
  textAlign: 'center',
  fontWeight: '$bold',
  fontFamily: '$chakra-petch-18',
})

const AlertContent = styled('p', {
  mb: '$large',
  color: 'white',
})

export const AlertPage = ({ when }: AlertPageProps) => {
  const [block, setBlock] = useState(when)
  const [visible, setVisible] = useState(false)
  const [tx, setTx] = useState<Tx | undefined>()
  const show = () => setVisible(true)
  const hide = () => setVisible(false)

  const skip = () => {
    setBlock(false)
    setTimeout(() => {
      tx?.retry()
      hide()
    }, 0)
  }

  useEffect(() => {
    setBlock(when)
  }, [when])

  useBlocker((tx) => {
    setTx(tx)
    show()
  }, block)

  return (
    <>
      {when && visible && (
        <Modal show={visible} handleClose={hide}>
          <Flex direction="column" css={{ maxWidth: 350, p: '$regular' }}>
            <H3>You haven't saved your profile!</H3>
            <AlertContent>
              Please save your profile by selecting the Finish my Profile button below and then
              selecting Save at the bottom of the screen. If you select Leave, your profile will not
              be saved.
            </AlertContent>
            <Flex
              align="center"
              justify="center"
              css={{ gap: 16 }}
              direction={{
                '@initial': 'column',
                '@medium-min': 'row',
              }}
            >
              <Button
                css={{ minWidth: 180, maxWidth: 180 }}
                text="Finish my Profile"
                variant="secondary"
                onClick={hide}
              />
              <Button
                css={{ minWidth: 180, maxWidth: 180 }}
                variant="cancel_action"
                type="button"
                onClick={skip}
                text="Leave"
              />
            </Flex>
          </Flex>
        </Modal>
      )}
    </>
  )
}
