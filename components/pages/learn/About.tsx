import { Container} from '~/components/primitives/Container'
import { Image,  } from '~/components/primitives/Image'
import { Flex,} from '~/components/primitives/Flex'
import { Content,  } from '~/components/shared/Content'
import { Grid} from '~/components/primitives/Grid'
import { Breadcrumb } from '~/components/shared/Breadcrumb'
import { styled } from '~/styles/stitches.config'
import { getCloudinaryAppImage } from '~/services/cloudinary'

type TeamCardProps = {
  image: any
  imageAlt: String
  title: String
  info: String[]
}

const TeamGrid = styled(Grid, {
  gridTemplateColumns: '1fr',
  mt: '$large',
  pb: '$xx-large',
  '@regular-min': {
    gridTemplateColumns: 'repeat(auto-fit, 300px)',
    mt: '$xxx-large',
  },
})

const FounderItem = styled('div', {
  background: '$overlay-bg-color',
  borderRadius: '$regular',
  pb: '$xx-large',
  pt: '$x-large',
  px: '$large',
  '& h2': {
    mb: '$regular',
    mt: 0,
  },
  '& img': {
    mb: '$x-large',
  },
  '& ul': {
    pl: '$regular',
    my: 0,
  },
  '& li': {
    mb: '$x-small',
  },
})

const AboutTitle = styled('h1', {
  mb: '$regular',
  mt: '$large',
  textAlign: 'center',
  '@regular-min': {
    mb: '$large',
    mt: '$x-large',
    textAlign: 'left',
  },
})

const TeamImage = styled(Image, {
  maxWidth: 175,
})

const TeamCard = ({ image, imageAlt, title, info }: TeamCardProps) => (
  <FounderItem as={Flex} direction="column" align="center">
    <h2>{title}</h2>
    <TeamImage src={image} alt={imageAlt} />
    <ul>
      {info.map((data, idx) => (
        <li key={idx}>{data}</li>
      ))}
    </ul>
  </FounderItem>
)

export const About = () => {
  const BrettInfo = [
    'Seasoned entrepreneur and executive',
    'Deep history in sports and gambling',
    'Passionate about shaping the future of the digital sports landscape',
    'linkedin.com/brettcallapp?',
  ]

  const NikoInfo = [
    'Senior Blockchain architect and engineer',
    'Blockchain and product visionary',
    'Loves to get hands-on and code',
    'linkedin.com/nikohosn?',
  ]

  return (
    <Container>
      <Breadcrumb path={[{ url: '/', label: 'Home' }, { label: 'About' }]} />
      <AboutTitle>About Us</AboutTitle>
      <Content>
        <h3>Every Asset has an Origin Story</h3>
        <p>
          RareMint creates authentic asset-backed NFTs for real world collectibles. This uniquely
          connects each physical and digital asset in perpetuity through RareMint. Each 1 of 1 NFT
          has the corresponding physical asset in our safe and secure vault.
        </p>
        <br />
        <h3>RareMint Culture</h3>
        <h4>Where our passion lives...</h4>
        <span>
          The RareMint culture was founded because of the childhood joy that collecting brought into
          our lives. Never losing sight of that feeling shaped the way we interact and build
          technology today. We believe:
          <ul>
            <li>
              Collectibles are an important fabric that bring people together through shared values,
              camaraderie, community, competition, and loyalty.
            </li>
            <li>Iconic and historical collectibles should not be locked away from public view.</li>
            <li>
              In curating life shaping stories through the athlete’s eyes, memorializing legends of
              the game, creating unique experiences, and preserving culturally significant
              collectibles for all eternity through the use of asset-backed NFTs.
            </li>
            <li>
              Asset-backed NFTs give global fans the ability to participate in the collectible’s
              journey in both the physical and digital world.
            </li>
            <li>
              Timeless preservation of collectible’s provenance and authenticity with asset-backed
              NFTs.
            </li>
          </ul>
          Simply put, we are deeply passionate about sports, collectibles, and the digital future.
        </span>
        <br />
        <br />
        <h3>RareMint Team</h3>
        <p>
          A dedicated and strong team who have worked in the blockchain space since 2016, the
          RareMint team has extensive experience with sports, collectibles, cryptocurrency,
          blockchains, and the gambling industry. We’ve worked on cornerstone projects delivering
          performant and scalable products to market that have supported millions of users.
        </p>
        <p>
          Our diverse and talented team of operators, engineers, collectors, product developers,
          legal, and marketers bring with them experience as entrepreneurs, executives, employees,
          and advisors from a wide variety of technology companies.
        </p>
        <p>
          The engineering team has strong experience with full stack development, complex systems,
          economic modeling, financial engineering, security, and other disciplines related to
          blockchain and distributed systems.
        </p>
        <br />
        <br />
        <h3>RareMint Founders</h3>
        <h4>It’s in our DNA</h4>
      </Content>
      <TeamGrid
        columns={{ '@initial': 1, '@regular-min': 3 }}
        gap={{ '@initial': 'regular', '@regular-min': 'xx-large' }}
      >
        <TeamCard
          image={getCloudinaryAppImage('pic-Brett_hjvln3')}
          imageAlt="Brett Avatar"
          title="Brett Callapp"
          info={BrettInfo}
        />
        <TeamCard
          image={getCloudinaryAppImage('pic-Niko_nmof92')}
          imageAlt="Niko Avatar"
          title="Niko Hosn"
          info={NikoInfo}
        />
      </TeamGrid>
    </Container>
  )
}
