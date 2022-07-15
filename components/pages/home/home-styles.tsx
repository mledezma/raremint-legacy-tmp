import { styled } from '~/styles/stitches.config'
import { Link } from '~/components/primitives/Link'

export const MainHeading = styled('h2', {
  fontSize: '$display-1',
  lineHeight: '$display-1',
  fontWeight: '$bold',
  textAlign: 'center',
  height: 'fit-content',
  '@medium-min': {
    fontSize: '$chakra-petch-64',
    lineHeight: '$chakra-petch-64',
  },
})

export const SubHeading = styled('h3', {
  fontSize: '$chakra-petch-40',
  lineHeight: '$chakra-petch-40',
  fontWeight: '$bold',
  textAlign: 'center',
  height: 'fit-content',
  mt: 0,
  mb: '$x-small',
})

export const HeadingDescription = styled('p', {
  color: '$details-default-grey',
  mb: 0,
  mt: 0,
  variants: {
    alignment: {
      center: {
        textAlign: 'center',
      },
    },
  },
})

export const HomeSectionLink = styled(Link, {
  fontWeight: '$bold',
  color: '$text-links-and-metadata-panel-contract-address-link-text-color',
  textAlign: 'center',
  textDecoration: 'none',
})
