import * as React from 'react'
import { Flex } from '~/components/primitives/Flex'
import { useStore } from '~/store'
import { AnimatePresence, motion } from 'framer-motion'
import { Box } from '~/components/primitives/Box'
import { styled } from '~/styles/stitches.config'
import { PlusIcon } from '../icons/PlusIcon'

const animation_props = {
  animate: {
    y: '0%',
    clipPath: 'inset(0% 0% 0% 0%)',
  },
  exit: {
    clipPath: 'inset(0% 0% 100% 0%)',
  },
  initial: {
    y: '-100%',
    clipPath: 'inset(0% 0% 100% 0%)',
  },
}

// NOTE: Too risky to pass Flex and then change it as={motion.div} and define styles like this...
// It might cause troubles on SSR...
// Better to keep them separate always, whenever is possible
const MessageBar = styled(motion.div, {
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  variants: {
    variant: {
      alert: {
        background:
          'linear-gradient(90.01deg, #9B2960 5.14%, #7A1A48 26.16%, #751D42 67.91%, #AC2968 91.03%)',
      },
      confirmation: {
        background:
          'linear-gradient(90deg, #283440 0%, #537093 42.19%, #537093 55.21%, #283440 100%)',
      },
      info: {
        background:
          'linear-gradient(90.01deg, #343434 5.14%, #716F54 40.48%, #716F54 58.82%, #343434 91.03%)',
      },
    },
  },
})

export const TopMessage = () => {
  const { top_message, top_message_type, setTopbarMessage } = useStore()

  React.useEffect(() => {
    if (top_message) {
      setTimeout(() => {
        setTopbarMessage('')
      }, 15000)
    }
  }, [top_message, setTopbarMessage])

  return (
    <AnimatePresence>
      {top_message && (
        <Box css={{ position: 'fixed', width: '100%', top: 60, zIndex: 9998 }}>
          <MessageBar key="toaster" {...animation_props} variant={top_message_type}>
            <Flex
              css={{ minHeight: 30, width: '100%', gap: '$x-small' }}
              align="center"
              justify="center"
            >
              {top_message}
              <PlusIcon
                style={{ transform: 'rotateZ(45deg)' }}
                onClick={() => setTopbarMessage('')}
              />
            </Flex>
          </MessageBar>
        </Box>
      )}
    </AnimatePresence>
  )
}
