import { styled } from '@stitches/react'
import { theme } from '~/styles/stitches.config'

export const ModalHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$x-small',
  width: '100%',
  paddingLeft: '$large',
  paddingRight: '$large',
  'button': {
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: -32,
    top: -4,
  },
  'svg': {
    'path': {
      fill: '$default-text-accentuate-color',
    }
  },
  'h2': {
    ...theme.typeStyles['chakra-petch-18'],
    color: '$default-text-accentuate-color',
    textAlign: 'center',
    position: 'relative',
    width: '100%',
    '@small-min': {
      width: 380,
    }
  }
})
export const ModalBody = styled('div', {
  ...theme.typeStyles['chakra-petch-15'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '$regular',
  flexDirection: 'column',
  width: '100%',
  // NOTE: Sometimes mb does not work? Weird...
  marginBottom: '$regular',
  px: '$regular',
  '@regular-min': {
    px: '$large',
  },
  'p': {
    maxWidth: 380,
  }
})
