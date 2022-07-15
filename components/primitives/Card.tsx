import { styled, theme } from '~/styles/stitches.config'

export const Card = styled('div', {
  borderRadius: '$regular',
  background: '$overlay-bg-color',
  minWidth: 300, // mobile
  variants: {
    variant: {
      nav: {
        minWidth: 50,
        borderRadius: 10, // '$small',
        px: '$large',
        py: '$regular', // $small ?
        bg: '$navbar-submenu-bg',
      },
      medium: {
        minWidth: 340,
        width: 580,
      },
      asset: {
        minWidth: 300,
        minHeight: 434,
      },
      provenance: {
        maxWidth: 88,
        height: 88,
        minWidth: 'auto',
        width: '100%',
      },
      fluid: {
        width: '100%',
      },
      small_highlight: {
        // h3: {
        //   ...theme.typeStyles['chakra-petch-24'],
        //   color: '$pokemon-drop-text-accentuated',
        //   mb: '$regular'
        // }
      },
      landing: {
        backgroundColor: 'transparent',
        px: 0,
        my: 0,
      },
      info: {
        px: '$regular',
        py: '$regular',

        '@small-min': {
          px: '$x-large',
          py: '$regular',
        }
      }
    },
  },
})
