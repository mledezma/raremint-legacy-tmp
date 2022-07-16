import { styled } from '~/styles/stitches.config'

export const Content = styled('div', {
  '@medium-min': {
    pl: '$small',
  },
  'p, span': {
    fontSize: '$chakra-petch-14',
    '@medium-min': {
      fontSize: '$chakra-petch-16',
    },
  },
  'ul, ol': {
    pl: '18px',
    my: '$large',
  },
  li: {
    mb: '$small',
  },
  h3: {
    fontWeight: 700,
    fontSize: '$chakra-petch-18',
    mb: '$small',
    '@medium-min': {
      fontSize: '$chakra-petch-24',
    },
  },
  h4: {
    fontWeight: 700,
    fontSize: '$chakra-petch-14',
    mt: '0',
    mb: '$x-small',
    '@medium-min': {
      fontSize: '$chakra-petch-16',
    },
  },
  '& a': {
    color: '$text-links-and-metadata-panel-contract-address-link-text-color',
    fontWeight: 500,
    '&:hover': {
      color: '$text-links-and-metadata-panel-contract-address-link-text-color',
      textDecoration: 'underline'
    }
  }
})
