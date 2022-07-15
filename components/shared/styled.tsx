import NumberFormat from 'react-number-format'
import { Flex } from '~/components/primitives/Flex'
import { styled, theme } from '~/styles/stitches.config'

export const StyledDropsCounter = styled(NumberFormat, {
  ...theme.typeStyles['chakra-petch-40'],
  width: 100,
  fontWeight: '$bold',
  bg: 'transparent',
  border: 'none',
  color: '$pokemon-drop-text-accentuated',
  textAlign: 'center',
})

export const StyledAmountTextContainer = styled('p', {
  ...theme.typeStyles["chakra-petch-24"],
  color: '$marketplace-text',
  display: 'flex',
  alignItems: 'center',
  columnGap: '$small',
})

export const StyledAmountText = styled('span', {
  fontSize: '1.25rem',
  fontWeight: '$bold',
  'span:last-of-type': theme.typeStyles['chakra-petch-13']
})

// [InfoActions (Info.tsx) Components Start]

export const InfoActionsSubtitleStyled = styled('p', {
  ...theme.typeStyles['chakra-petch-13'],
  fontWeight: '$bold',
  minHeight: 'min-content',
  color: '#7A7A7A',
  mb: '$small',
  my: 0,
  span: {
    fontWeight: '$regular',
  },
  'a': {
    textDecoration: 'underline',
    '&:hover,&:focus': {
      textDecoration: 'none',
    }
  },
  variants: {
   size: {
      large: {
        ...theme.typeStyles["chakra-petch-16"],
      }
    },
    color: {
      secondary: {
        color: '$descriptions-default-grey'
      }
    }
  }
})

export const Payments = styled(Flex, {
  color: '$marketplace-text',
  fontSize: 12,
  gridArea: 'payments',
  '& p': {
    my: 0,
    mr: '$small',
  },
  '& path': {
    fill: '$marketplace-text'
  },
})

// [InfoActions (Info.tsx) Components End]

// [Pass & Drop Page Components Start]

export const BodyTitleStyled = styled('h2', {
  ...theme.typeStyles["chakra-petch-24"],
  color: '$pokemon-drop-text-accentuated',
  mb: '$large',
})

export const BodyItemWrapper = styled('li', {
  listStyle: 'none',
  px: 0,
})

export const BodyItemDescriptionStyled = styled('p', {
  ...theme.typeStyles['chakra-petch-18'],
  fontWeight: '$regular',
  px: 0
})

export const BodyItemTitleStyled = styled('h3', {
  ...theme.typeStyles['chakra-petch-24'],
  fontSize: '1.375rem',
  px: 0
})

// [Checkout Steps Components Start]

export const PurchaseDetailsWrapper = styled('table', {
  background: '#242424',
  tableLayout: 'auto',
  borderRadius: 5,
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  p: '$regular',
  flexDirection: 'column',
  '@regular-min': {
    flexDirection: 'row',
  },
  'tbody': {
    gap: '$small',
    '@regular-min': {
      width: '66.66%',
    }
  },
  'tfoot': {
    width: '100%',
    gap: '$xx-small',
    '@regular-min': {
      gap: '$small',
      width: '33.33%',
    }
  }
})
export const PurchaseDetailsTableTitleStyled = styled('th', {
  ...theme.typeStyles['chakra-petch-15'],
  fontWeight: '$medium',
})
export const PurchaseDetailsTableDescStyled = styled('td', {
  ...theme.typeStyles['chakra-petch-13'],
  'svg': {
    mr: '$xx-small',
    'path': {
      fill: '$seafoam',
    }
  },
  variants: {
    size: {
      large: {
        ...theme.typeStyles['chakra-petch-18'],
        fontWeight: '$bold',
        color: '$seafoam',
        '> span': {
          ...theme.typeStyles['chakra-petch-13'],
          fontWeight: '$regular',
        },
      }
    }
  }
})
export const PurchaseDetailsTableTotalStyled = styled('td', theme.typeStyles['chakra-petch-18'])

// AssetCard & Info Components Start

export const AssetCardStatusStyled = styled('div', {
  ...theme.typeStyles['chakra-petch-24'],
  width: '100%',
  fontWeight: '$bold',
  borderRadius: '$regular',
  bg: '$page-background-color',
  mt: '$regular',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  variants: {
    state: {
      sold: {
        color: '$sold-asset',
      },
      acquired: {
        fontSize: '1.25rem',
        color: '$text-links-and-metadata-panel-contract-address-link-text-color'
      },
      acquired_asset_card: {
        ...theme.typeStyles['chakra-petch-15'],
        color: '$text-links-and-metadata-panel-contract-address-link-text-color',
        bg: 'transparent',
        mt: 0,
      }
    },
    size: {
      info: {
        height: 82
      },
      asset_card: {
        height: 70
      },
    }
  }
})

// AssetCard & Info Components Start
