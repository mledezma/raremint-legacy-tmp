import { Flex, } from '~/components/primitives/Flex'
import { Grid } from '~/components/primitives/Grid'
import { Image } from '~/components/primitives/Image'
import { MainHeading, HeadingDescription, HomeSectionLink } from './home-styles'
import { StepsCardProps } from '../../shared/types'
import { routes } from '~/library/routes'
import { CloudinaryImage } from '@cloudinary/url-gen'
import { styled } from '~/styles/stitches.config'
import { getCloudinaryAppImage } from '~/services/cloudinary'

const big_card_data = [
  {
    image: getCloudinaryAppImage('GP-homepage_1_arohw0'),
    title: 'Galaxy Pass',
    text: 'RareMint Galaxy Pass is live. Get exclusive access to highly curated asset-backed NFT drops, private members only channels and livestreams, rewards, tokens, first looks on future asset-backed drops, allow lists, and much more.',
    link: routes.pass,
  },
  {
    image: getCloudinaryAppImage('learn-nft-1_vd7mdp'),
    title: 'What is an NFT?',
    text: `New to collecting NFTs? We'll cover the basics of what NFTs are, how they work, and why you should be collecting.`,
    link: routes.faq,
  },
]

interface BigCardProps extends StepsCardProps {
  image: string | CloudinaryImage
  link: string
}

const StyledCard = styled(Flex, {
  borderRadius: '$regular',
  background: '$overlay-bg-color',
  pt: '$large',
  pb: '$x-large',
  px: '$large',
  '@small-min': {
    px: '$regular',
    pb: '$large',
  },
})

const BigCardHeading = styled(MainHeading, {
  fontSize: 48,
  mt: '$x-small',
  mb: '$small',
  '@small-min': {
    px: '$regular',
    mb: '$regular',
    mt: '$regular',
  },
})

const BigCardDescription = styled(HeadingDescription, {
  mb: '$small',
  fontWeight: 500,
  '@small-min': {
    mb: '$regular',
    fontWeight: 700,
  },
})

const BigCard = ({ title, text, image, link }: BigCardProps) => {
  return (
    <StyledCard justify="center" direction="column" align="center">
      <Image alt="Big Card Image" src={image} width="220" height="245" css={{ width: 'auto', maxWidth: '100%' }} />
      <BigCardHeading as="h2">{title}</BigCardHeading>
      <BigCardDescription alignment="center">{text}</BigCardDescription>
      <HomeSectionLink css={{ fontSize: '$chakra-petch-18' }} href={link}>
        Learn more &gt;
      </HomeSectionLink>
    </StyledCard>
  )
}

export const BigCardSection = () => (
  <Grid columns={{ '@small-min': 2 }} gap={{ '@small-min': 'large' }}>
    {big_card_data.map((props) => (
      <BigCard {...props} key={props.title} />
    ))}
  </Grid>
)
