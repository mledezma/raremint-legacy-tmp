import { styled } from '~/styles/stitches.config'

export const Container = styled('div', {
  maxWidth: '$container',
  width: '100%',
  margin: '0 auto',
  px: '$regular',

  // Different container max-sizes support w/padding-x corrections
  variants: {
    max: {
      'x-small': {
        maxWidth: 'calc($breakpoint-x-small + 48px)',
      },
      small: {
        maxWidth: 'calc($breakpoint-small + 48px)',
      },
      medium: {
        maxWidth: 'calc($breakpoint-medium + 48px)',
      },
      large: {
        maxWidth: 'calc($breakpoint-large + 48px)',
      },
    },
  },
})
