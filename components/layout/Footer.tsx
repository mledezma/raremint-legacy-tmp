import NextLink from 'next/link'
import { marketFilteredRoute, marketSortByRoute } from '~/library/utils'
import { routes } from '~/library/routes'
import { styled } from '~/styles/stitches.config'
import { Button } from '~/components/primitives/Button'
import { Container } from '~/components/primitives/Container'
import { Image } from '~/components/primitives/Image'
import { Input } from '~/components/primitives/Input'
import { Flex } from '~/components/primitives/Flex'
import { Text } from '~/components/primitives/Text'
import { Grid } from '~/components/primitives/Grid'
import { RaremintIconLong } from '../icons'
import { useStore } from '~/store'

type CustomFooterLinkProps = {
  href: string
  title: string
  src: string
}

const StyledFlex = styled(Flex, {
  variants: {
    links: {
      quick: {
        '& > a': {
          '&:first-child': {
            fontWeight: '$extra-bold',
            fontSize: '20px',
            pb: '$regular',
          },
          color: '$overlay-dialogue-text',
          fontSize: '$chakra-petch-16',
          display: 'block',
          pb: '$small',
          '@regular-min': {
            fontSize: '$chakra-petch-13',
          },
        },
      },
      help: {
        columnGap: '$x-small',
        fontSize: '20px',
        '@regular-min': {
          fontSize: '$chakra-petch-14',
        },
      },
    },
  },
})

const StyledFooter = styled('div', {
  textAlign: 'left',
  color: 'white',
  bg: '#040C17',
  pb: '$xx-large',
  pt: '$xxx-large',
  mt: 'auto',
  '& a': {
    color: 'white',
    textDecoration: 'none',
  },
})

const SignUpHeading = styled('h2', {
  fontSize: '$chakra-petch-24',
  fontWeight: 700,
  mb: '$small',
})

const SignUpSubHeading = styled('h3', {
  fontSize: '$chakra-petch-18',
  fontWeight: 500,
  lineHeight: '20px',
  mb: '$regular',
  mt: '$small',
  '@regular-min': {
    fontSize: '$chakra-petch-13',
    mb: '$large',
  },
})

const SignUpSubmit = styled(Button, {
  fontWeight: '$bold',
  fontSize: '$chakra-petch-18',
  flex: 1,
  gap: '$regular',
  maxWidth: '190px',
})

const StyledRaremintWrapper = styled('div', {
  textAlign: 'center',
  mb: '$xx-large',
  '@regular-min': {
    display: 'none',
  },
})

const CustomFooterLink = ({ href, title, src }: CustomFooterLinkProps) => (
  <a href={href} title={title} target="_blank" rel="noreferrer">
    <Image alt="Footer Image" variant="icon" src={src} aria-hidden="true" />
  </a>
)

const Links = () => (
  <Grid
    gap="unset"
    gapX={{ '@initial': 'unset', '@regular-min': 'large' }}
    gapY="large"
    columns={{ '@initial': 2, '@regular-min': 3 }}
  >
    <StyledFlex links="quick" direction="column" align="start">
      <NextLink href={routes.marketplace}>Marketplace</NextLink>
      <NextLink href={marketSortByRoute('popular')}>Most Popular</NextLink>
      <NextLink href={marketSortByRoute('latest')}>Latest Releases</NextLink>
      <NextLink href={marketFilteredRoute({ tier: ['Ultra Rare'] })}>Ultra Rare</NextLink>
      <NextLink
        href={marketFilteredRoute({
          tier: ['Limited Edition'],
        })}
      >
        Limited Edition
      </NextLink>
      {/* <NextLink href={routes.redemption}>Redemption</NextLink> */}
    </StyledFlex>
    <StyledFlex
      links="quick"
      direction="column"
      align="start"
      css={{
        pl: '$large',
        '@regular-min': { pl: '0' },
      }}
    >
      <NextLink href="">Learn</NextLink>
      <NextLink prefetch={false} href={routes.faq}>
        FAQs
      </NextLink>
      <NextLink prefetch={false} href={routes.articles}>
        Blog
      </NextLink>
    </StyledFlex>
    <StyledFlex
      links="quick"
      direction="column"
      align="start"
      css={{
        '@regular-max': { gridArea: '2 / 1 / last-line / last-line' },
      }}
    >
      <NextLink href="#">Follow Us</NextLink>
      <Grid
        columns={{ '@initial': 'unset', '@regular-min': 2 }}
        gap={{ '@initial': 'large', '@regular-min': 'small' }}
        flow={{ '@initial': 'column', '@regular-min': 'row' }}
      >
        <CustomFooterLink
          href="https://medium.com/@raremint"
          title="Medium External Link"
          src="/images/icon/medium.svg"
        />
        <CustomFooterLink
          href="https://www.instagram.com/raremint.nft/?hl=en"
          title="Instagram External Link"
          src="/images/icon/instagram.svg"
        />
        <CustomFooterLink
          href="https://discord.gg/raremint"
          title="Discord External Link"
          src="/images/icon/discord.svg"
        />
        <CustomFooterLink
          href="https://twitter.com/RareMint_nft"
          title="Twitter External Link"
          src="/images/icon/twitter.svg"
        />
        <CustomFooterLink
          href="https://t.me/RareMintNetwork"
          title="Telegram External Link"
          src="/images/icon/telegram.svg"
        />
      </Grid>
    </StyledFlex>
  </Grid>
)

const SignUp = () => {
  const { build_flags } = useStore()

  return (
    <form
      action={`${build_flags.services.mailchimp_url}/subscribe/post`}
      method="POST"
      target="_blank"
    >
      <SignUpHeading>Get the RareFeed</SignUpHeading>
      <SignUpSubHeading>
        Get notifications about upcoming drops
        <br /> delivered directly to your inbox.
      </SignUpSubHeading>
      <Flex
        direction={{ '@initial': 'column', '@regular-min': 'row' }}
        align={{ '@regular-min': 'center' }}
        css={{ gap: '$regular' }}
      >
        <input type="hidden" name="u" value="baa76e2edc5762cf8cea39e1f" />
        <input type="hidden" name="id" value="bded0f7d78" />
        <Input
          type="email"
          name="MERGE0"
          id="MERGE0"
          variant="footer_subscribe"
          css={{ flex: 1 }}
        />
        <SignUpSubmit
          size={{ '@initial': 'medium', '@regular-min': 'small' }}
          variant="primary"
          text="Sign Me Up"
        />
      </Flex>
    </form>
  )
}

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledRaremintWrapper>
          <RaremintIconLong />
        </StyledRaremintWrapper>
        <Grid
          columns={{ '@initial': 1, '@regular-min': 2 }}
          css={{ '@regular-min': { columnGap: '146px' } }}
        >
          <Links />
          <SignUp />
        </Grid>
        <Flex
          justify="between"
          align="center"
          css={{ mt: '$xx-large', '@regular-min': { mt: '$large' } }}
          direction={{ '@initial': 'column', '@regular-min': 'row' }}
        >
          <StyledFlex
            links="help"
            direction="row"
            wrap={{ '@initial': 'wrap', '@regular-min': 'noWrap' }}
            css={{ lineHeight: 1.8 }}
          >
            {/* <NextLink href="">HELP</NextLink> | <NextLink href={routes.about}>HOW IT WORKS</NextLink> |{' '} */}
            <NextLink href={routes.privacy}>PRIVACY</NextLink> |{' '}
            <NextLink href={routes.terms}>TERMS</NextLink> |{' '}
            <a href="mailto:social@raremint.network">CONTACT</a> |{' '}
            <NextLink href={routes.articles}>PRESS</NextLink>{' '}
          </StyledFlex>
          <Text
            css={{
              px: '0',
              mb: 0,
              mt: '$x-large',
              '@regular-min': { mt: 0 },
            }}
          >
            <strong>@2022 Raremint.</strong> All Rights Reserved.
          </Text>
        </Flex>
      </Container>
    </StyledFooter>
  )
}
