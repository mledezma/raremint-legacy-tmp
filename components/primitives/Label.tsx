import { styled } from '~/styles/stitches.config'

export const Label = styled('label', {
  variants: {
    variant: {
      filter: {
        color: '$marketplace-text',
        fontWeight: '$regular',
        fontSize: '$chakra-petch-regular-12',
        lineHeight: '$chakra-petch-regular-12',
        userSelect: 'none',
      },
    },
  },
})
