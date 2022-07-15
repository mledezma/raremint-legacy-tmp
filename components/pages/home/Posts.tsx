import { styled } from '~/styles/stitches.config'
import { Text } from '~/components/primitives/Text'
import { Image } from '~/components/primitives/Image'
import { Link } from '~/components/primitives/Link'
import { MainHeading } from './home-styles'
import { Post } from '~/types'

export interface PostsProps {
  home_post_list: Post[]
}

const NewsSection = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  pt: '$large',
  rowGap: '$regular',
  columnGap: '$small',
  '@small-min': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

const HomePost = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const PostImage = styled(Image, {
  display: 'block',
  height: '160px',
  width: '100%',
  maxWidth: '100%',
  '@medium-min': {
    height: '100px',
  },
})

const PostTitle = styled(Text, {
  flex: 1,
  background: '$overlay-bg-color',
  fontSize: 20,
  fontWeight: 500,
  marginTop: 0,
  marginBottom: 0,
  py: '$regular',
  textAlign: 'center',
  '@medium-min': {
    fontSize: 14,
    py: '$small',
  },
})

const Container = styled('section', {
  pt: '$xx-large',
  '@medium-min': {
    maxWidth: '510px',
    pt: 0,
  },
})

const NewsLinkWrapper = styled('div', {
  textAlign: 'center',
  mt: '$small',
  pb: '$xx-large',
  '@medium-min': {
    pb: 0,
  },
})

const NewsLink = styled(Link, {
  color: '$text-links-and-metadata-panel-contract-address-link-text-color',
  fontSize: 18,
  fontWeight: 700,
})

export const Posts = ({ home_post_list }: PostsProps) => (
  <Container>
    <MainHeading as="h2" css={{ fontSize: 48 }}>
      News &amp; Noteworthy
    </MainHeading>
    <NewsSection>
      {home_post_list.slice(0, 4).map((post) => (
        <HomePost key={`${post.slug}-${post.title}`}>
          <PostImage fit="cover" src={post.featured_image} alt={post.featured_image_alt} />
          <PostTitle
            variant="flat"
            css={{
              px: '$regular',
              '@medium-min': {
                px: '$small',
              },
            }}
          >
            {post.title}
          </PostTitle>
        </HomePost>
      ))}
    </NewsSection>
    <NewsLinkWrapper>
      <NewsLink href="/articles">More Articles &gt;</NewsLink>
    </NewsLinkWrapper>
  </Container>
)
