import { styled, theme } from '~/styles/stitches.config'

export const StyledBaseButton = styled('button', {
  // setting font styles from base style theme
  ...theme.typeStyles.body,

  // Reset
  all: 'unset',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  borderRadius: '5px',
  gap: '$xx-small',

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom'
  fontVariantNumeric: 'tabular-nums',
  border: '1px solid none',
  textAlign: 'center',
  lineHeight: 1,
  transition: 'all 240ms ease-in-out',

  '&:disabled': {
    color: '$drop-down-selection-color-behind-text',
    backgroundColor: '$sold-asset',
    cursor: 'not-allowed',
  },
  '&:hover:not(:disabled)': {
    boxShadow: '0px 8px 16px 0px #00000014, 4px 4px 4px 0px #0000000a',
  },
  variants: {
    size: {
      // NOTE: Icon size
      'x-small': {
        height: '36px',
        p: '$xx-small',
      },
      small: {
        height: '40px',
        p: '$xx-small',
      },
      medium: {
        height: '50px',
        p: '$x-small',
      },
      large: {
        ...theme.typeStyles['chakra-petch-24'],
        fontWeight: 'bold',
        fontSize: '1.25rem',
        width: '100%',
        height: '50px',
        p: '$x-small',
      },
      none: {
        fontSize: '$body',
      },
    },

    radii: {
      round: {
        borderRadius: '$round',
      },
    },

    variant: {
      default: {
        backgroundColor: '$gray-scale-100',
        '&:hover:not(:disabled)': {
          backgroundColor: '$gray-scale-200',
        },
      },
      primary: {
        backgroundColor: '$footer-signup-button',
        color: '$white',
      },
      transparent: {
        all: 'unset',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        cursor: 'pointer',
        svg: { m: 0 },
        '&:hover:not(:disabled)': {
          boxShadow: 'none',
        },
      },
      secondary: {
        backgroundColor: '$marketplace-buttons',
        color: '$white',
      },
      secondary_inactive: {
        backgroundColor: '$submenu-item-divider-line',
        color: '$white',
      },
      inventory_active: {
        height: 38,
        borderRadius: 0,
        backgroundColor: '$marketplace-button-bg',
        color: '$default-text-accentuate-color',
      },
      inventory_inactive: {
        height: 38,
        borderRadius: 0,
        backgroundColor: '$page-background-color',
        color: '$marketplace-text ',
      },
      cancel_action: {
        backgroundColor: '$no-decline-or-inactive-button',
        color: '$white',
      },
      filter: {
        color: '$black',
        height: 37,
        backgroundColor: '$marketplace-filter-icons-buttons-and-text',
      },
      ternary: {
        width: 'max-content',
        height: 'max-content',
        backgroundColor: '$primary-variant',
        boxShadow: 'none',
      },
      oAuth: {
        backgroundColor: '$gray-scale-200',
        '&:hover:not(:disabled)': {
          backgroundColor: '$gray-scale-300',
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'default',
  },
})

type ButtonProps = {
  icon?: React.ReactNode
  text?: string
}

export const Button = ({
  icon,
  text,
  ...props
}: ButtonProps & React.ComponentProps<typeof StyledBaseButton>) => {
  return (
    <StyledBaseButton {...props}>
      {icon}
      {text && <span>{text}</span>}
    </StyledBaseButton>
  )
}
