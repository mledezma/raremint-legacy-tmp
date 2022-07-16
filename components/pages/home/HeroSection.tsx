import { Flex } from '~/components/primitives/Flex'
import { styled } from '~/styles/stitches.config'
import { HeadingDescription, HomeSectionLink, MainHeading } from './home-styles'
import { routes } from '~/library/routes'
import Image from 'next/image'

const HeroContainer = styled(Flex, {
  rowGap: '$regular',
  '@regular-min': {
    columnGap: '$xx-large',
  },
})

const HeroAsset = styled(Flex, {
  maxWidth: '400px',
  textAlign: 'center',
  '@regular-min': { maxWidth: 540 },
})

const VideoBox = styled('div', {
  borderRadius: '$regular',
  maxWidth: '100%',
  objectFit: 'cover',
  overflow: 'hidden',
  '& video': {
    maxWidth: '100%',
    width: '100%',
  },
  '@regular-min': {
    height: 400,
    width: 540,
  },
})

export const HeroSection = () => {
  const home_vide =
    'https://res.cloudinary.com/raremint/video/upload/v1655331252/application_assets/homepage_teaser_5_bupnt5.mp4'
  return (
    <HeroContainer
      direction={{ '@initial': 'column', '@regular-min': 'row' }}
      align="center"
      justify={{ '@regular-min': 'center' }}
    >
      <Flex css={{ maxWidth: 600 }} direction="column">
        <MainHeading
          css={{
            my: 0,
            fontSize: 48,
            '@regular-min': { fontSize: 64 },
          }}
        >
          Connecting <br /> Physical to Digital
        </MainHeading>
        <HeadingDescription
          css={{ pt: '$large', fontWeight: 500, fontSize: '$chakra-petch-16', px: '$regular' }}
          alignment="center"
        >
          RareMint offers authentic real world collectible assets and creates a digital experience
          of those collectibles through asset-backed NFTs. Each 1/1 Ultra Rare NFT has the
          corresponding physical asset in our safe and secure vault.
        </HeadingDescription>
        <HomeSectionLink
          href={routes.marketplace}
          css={{ pt: '$regular', fontSize: '$chakra-petch-18' }}
        >
          Enter the Marketplace &gt;
        </HomeSectionLink>
      </Flex>
      <HeroAsset direction="column" align="center">
        <VideoBox>
          <video
            preload=""
            autoPlay
            loop
            muted
            playsInline
            poster="https://res.cloudinary.com/raremint/video/upload/v1655331252/application_assets/homepage_teaser_5_bupnt5.jpg"
          >
            <source
              src="https://res.cloudinary.com/raremint/video/upload/q_100/v1655331252/application_assets/homepage_teaser_5_bupnt5.webm"
              type="video/webm"
            />
            <source src={home_vide} type="video/mp4" />
            <source
              src="https://res.cloudinary.com/raremint/video/upload/q_100/v1655331252/application_assets/homepage_teaser_5_bupnt5.ogv"
              type="video/ogg"
            />
            <Image src="https://res.cloudinary.com/raremint/video/upload/v1655331252/application_assets/homepage_teaser_5_bupnt5.jpg" layout="fill" alt="Home Teaser"/>
          </video>
        </VideoBox>
      </HeroAsset>
    </HeroContainer>
  )
}
