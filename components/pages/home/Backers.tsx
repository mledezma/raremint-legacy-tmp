import { styled } from '~/styles/stitches.config'
import { Box } from '~/components/primitives/Box'
import { Image } from '~/components/primitives/Image'
import { MainHeading } from './home-styles'
import { getCloudinaryImage } from '~/services/cloudinary'

const BackersList = [
  {
    image: getCloudinaryImage('raremint_backers/backers_gatecap_1_ljrqht'),
    name: 'gatecap ventures',
    size: 224,
  },
  {
    image: getCloudinaryImage('raremint_backers/backers_crescent-city_1_puf4vg'),
    name: 'crescent city capital',
    size: 224,
  },
  {
    image: getCloudinaryImage('raremint_backers/backers_BK_1_ehhgjx'),
    name: 'BKCoin Capital',
    size: 144,
  },
  {
    image: getCloudinaryImage('raremint_backers/backers_commerce-ventures_1_1_nqnjiq'),
    name: 'commerce ventures',
    size: 260,
  },
  {
    image: getCloudinaryImage('raremint_backers/backers_sana-sano_1_pi0rv7'),
    name: 'sana sano capital',
    size: 260,
  },
  {
    image: getCloudinaryImage('raremint_backers/backers_arca_1_ifvpou'),
    name: 'arca',
    size: 130,
  },
]

const BackersSection = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  '@small-min': {
    mt: '$xx-large',
  },
})

const StyledBacker = styled(Box, {
  flex: '100%',
  textAlign: 'center',
  mt: '$large',
  '@small-min': {
    flex: '50%',
  },
})

export const Backers = () => (
  <Box as="section" css={{ maxWidth: '550px', flex: 1 }}>
    <MainHeading as="h2" css={{ fontSize: 48, mb: 0 }}>
      Backed By
    </MainHeading>
    <BackersSection>
      {BackersList.map((item) => (
        <StyledBacker key={item.name}>
          <Image
            fit="cover"
            src={item.image}
            alt={item.name}
            width={item.size}
            css={{ width: 'auto' }}
          />
        </StyledBacker>
      ))}
    </BackersSection>
  </Box>
)
