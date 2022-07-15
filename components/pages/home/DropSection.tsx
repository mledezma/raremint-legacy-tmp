import { Image } from '~/components/primitives/Image'
import { Box } from '~/components/primitives/Box'
import { Flex } from '~/components/primitives/Flex'
import { MainHeading, SubHeading, HeadingDescription, HomeSectionLink } from './home-styles'
import { routes } from '~/library/routes'
import { styled } from '~/styles/stitches.config'
import { getCloudinaryAppImage } from '~/services/cloudinary'

const DropHeading = styled(HeadingDescription, {
  fontWeight: '500',
  fontSize: '$chakra-petch-16',
  mb: '$regular',
  '@small-min': {
    maxWidth: '415px',
    letterSpacing: '0.03em',
    mx: 'auto',
  },
})

export const DropSection = () => (
  <Flex
    direction={{
      '@initial': 'column',
      '@medium-min': 'row',
    }}
    justify={{
      '@initial': 'start',
      '@medium-min': 'center',
    }}
    css={{
      '@medium-min': { columnGap: '$xxx-large' },
    }}
    align="center"
  >
    <Box css={{ textAlign: 'center' }}>
      <MainHeading css={{ mt: 0, mb: '$regular' }}>The Drop</MainHeading>
      <SubHeading>Slab Series</SubHeading>
      <DropHeading alignment="center">
        The RareMint Slab Series will launch its initial Pokemon digital break. The drop contains
        200 Pokemon Mystery Packs that each contain a 1 of 1 Pokemon Card NFT. The NFT can be
        redeemed anytime for the physical version stored in our secure vault. You could be the lucky
        one to rip open the $28,800 Charizard Holo in our first mystery pack drop.
      </DropHeading>
      <HomeSectionLink href={routes.drops} css={{ fontSize: '$chakra-petch-18' }}>
        Explore &gt;
      </HomeSectionLink>
    </Box>
    <Flex>
      <Image
        src={getCloudinaryAppImage('mystery-pack-10_jjxgg9')}
        alt="Pokemon drop"
        css={{ margin: '0 auto', maxWidth: 400 }}
        width="400"
        height="400"
      />
    </Flex>
  </Flex>
)
