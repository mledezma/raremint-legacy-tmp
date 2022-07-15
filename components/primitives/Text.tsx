import { styled } from '~/styles/stitches.config'

export const Text = styled('p', {
  variants: {
    padding: {
      flat: {
        px: 0,
        m: 0,
      },
    },
    variant: {
      asset: {
        px: '$x-small',
        color: '$marketplace-text',
      },
      p: {
        px: '$small',
        rt: 'center',
        fontWeight: '$regular',
        fontSize: '$text-base',
      },
      navBar: {
        color: '$nav-bar-submenu-rollover',
      },
      flat: {
        px: 0,
        m: 0,
      },
      filter: {
        cursor: 'pointer',
        px: 0,
        m: 0,
        color: '$marketplace-text',
        textDecorationLine: 'underline',
      },
      breadcrumb: {
        fontWeight: '$regular',
        fontSize: '$chakra-petch-15',
      },
      unset: {},
    },
  },
  defaultVariants: {
    variant: 'p',
  },
})
