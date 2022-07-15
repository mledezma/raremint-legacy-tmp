import type { NextPage } from "next";
import { Backers } from "~/components/pages/home/Backers";
import { BigCardSection } from "~/components/pages/home/BigCards";
import { DropSection } from "~/components/pages/home/DropSection";
import { HeroSection } from "~/components/pages/home/HeroSection";
import { LatestReleases } from "~/components/pages/home/LatestReleases";
import { Posts } from "~/components/pages/home/Posts";
import { Box } from "~/components/primitives/Box";
import { Container } from "~/components/primitives/Container";
import { Flex } from "~/components/primitives/Flex";
import { StepsCard } from "~/components/shared/StepsCard";

const formula_data = [
  {
    title: 'Digitize',
    text: 'Shot in 12K resolution, our custom 3D asset creation processes allow us to capture a photorealistic display. Authentication and provenance are recorded and then we mint the 1 of 1 asset-backed NFT.',
  },
  {
    title: 'Vault',
    text: 'RareMint insures and protects your physical assets in our highly secure vault at no cost to you. Vaulting allows for seamless portability, fast resale and collateralization of your asset-backed NFT without putting your physical asset at risk.',
  },
  {
    title: 'Sell',
    text: 'We are a community of like-minded, passionate collectors. All RareMint assets are initially dropped at our marketplace or with our drop partners. Secondary sales can be made on OpenSea and other marketplaces.',
  },
]

const HomeSection = ({ component, css: customCss }: { component: JSX.Element; css?: object }) => (
  <Box as="section" css={{ mt: '$xxx-large', width: '100%', ...customCss }}>{component}</Box>
)

const HomeBackersNews = ({ home_post_list }: any) => (
  <Flex
    justify="between"
    direction={{ '@initial': 'column', '@medium-min': 'row' }}
    align={{ '@initial': 'center', '@medium-min': 'start' }}
    css={{
      '@medium-min': {
        pb: '$xx-large',
      },
    }}
  >
    <Backers />
    {/* <Posts home_post_list={home_post_list} /> */}
  </Flex>
)

const Home: NextPage = ({ latest_releases, home_post_list }) => {
  return (
    <Container>
      <HomeSection css={{ '@regular-max': { mt: '$x-large' } }} component={<HeroSection />} />
      <HomeSection component={<StepsCard cards_data={formula_data} title="The Formula" />} />
      <HomeSection component={<DropSection />} />
      <HomeSection component={<BigCardSection />} />
      {/* <HomeSection component={<LatestReleases latest_releases={latest_releases} />} /> ToDo: display when auth is ready */}
      <HomeSection component={<HomeBackersNews home_post_list={home_post_list} />} />
    </Container>
  )
};


export async function getStaticProps() {
  //ToDo: add the correct info when the auth is done.
  return {
    props: {
      latest_releases: '',
      home_post_list: ''
    }, // will be passed to the page component as props
  }
}

export default Home;