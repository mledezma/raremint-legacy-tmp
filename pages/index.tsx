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
import { getAssetsInCollection, getHomepageData } from '~/services/prisma.server'
import { butterService } from '~/services/butter.server'
import type { NextPage } from "next";
import type { Asset } from '~/types'
import safeJsonStringify from 'safe-json-stringify';

type HomepageData = {
  latest_releases: Asset[]
  home_post_list: any[]
}

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
    <Posts home_post_list={home_post_list} />
  </Flex>
)

const Home: NextPage<HomepageData> = ({ latest_releases, home_post_list }) => {
  return (
    <Container>
      <HomeSection css={{ '@regular-max': { mt: '$x-large' } }} component={<HeroSection />} />
      <HomeSection component={<StepsCard cards_data={formula_data} title="The Formula" />} />
      <HomeSection component={<DropSection />} />
      <HomeSection component={<BigCardSection />} />
      <HomeSection component={<LatestReleases latest_releases={latest_releases} />} />
      <HomeSection component={<HomeBackersNews home_post_list={home_post_list} />} />
    </Container>
  )
};

export async function getStaticProps() {
  // const user = await auth.isAuthenticated(request) ToDo: fix this when auth is ready
  const user = null
  const homepage = await getHomepageData()
  if (!homepage) throw new Error('Error loading homepage data')
  const latest_releases_uris = homepage.latest_releases as string[]
  const popular_assets_uris = homepage.popular_assets as string[]

  const [home_post_list, db_assets] = await Promise.all([
    await butterService.getPostList(),
    await getAssetsInCollection(
      [homepage.hero_asset, ...latest_releases_uris, ...popular_assets_uris],
      user?.address,
    ),
  ])

  let latest_releases: Asset[] = []

  db_assets.forEach((asset) => {
    if (latest_releases_uris.includes(asset.asset_uri)) latest_releases.push(asset)
  })

  const stringifiedData = safeJsonStringify({
    latest_releases,
    home_post_list: home_post_list?.data,
  });
  const data = JSON.parse(stringifiedData);

  return {
    props: data
  }
}

export default Home;