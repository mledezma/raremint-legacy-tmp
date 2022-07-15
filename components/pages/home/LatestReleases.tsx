import { AssetList } from '~/components/shared/AssetList'
import { styled } from '~/styles/stitches.config'
import { Asset } from '~/types'
import { MainHeading } from './home-styles'

const StyledContainer = styled('div', {
  '@regular-min': {
    pt: '$large',
  },
  [`& ${MainHeading}`]: {
    mt: '0',
    mb: '$regular',
    '@regular-min': {
      mb: '$x-large',
    },
  },
})

export const LatestReleases = ({ latest_releases }: { latest_releases: Asset[] }) => {
  return (
    <StyledContainer>
      <MainHeading as="h2">Latest Releases</MainHeading>
      <AssetList assets={latest_releases} page="homepage" />
    </StyledContainer>
  )
}
