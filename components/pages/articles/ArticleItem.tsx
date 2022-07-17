import moment from 'moment'
import { Container } from '~/components/primitives/Container'
import { HR } from '~/components/primitives/HR'
import { Breadcrumb } from '~/components/shared/Breadcrumb'
import { Link } from '~/components/primitives/Link'
import { styled } from '~/styles/stitches.config'
import { Post } from '~/types'

export interface ArticlePros {
  post: Post
}

const PublishedDate = styled('div', {
  pb: '$small',
  fontSize: '$text-4-xl',
})

const H1 = styled('h1', {
  '@regular-min': {
    pt: '$large',
  }
})

const Content = styled('div', {
  a: {
    color: '$text-links-and-metadata-panel-contract-address-link-text-color',
  },
})

const LinkWrapper = styled('div', {
  textAlign: 'center',
  fontSize: 16,
  fontWeight: 700,
  my: '$large',
  '@regular-min': {
    display: 'none'
  }
})

export const ArticleItem = ({ post }: ArticlePros) => {
  if (!post) return <div>No article found</div>

  return (
    <Container css={{ pb: '$x-large' }}>
      <Breadcrumb
        path={[
          { url: '/', label: 'Home' },
          { url: '/articles', label: 'Articles' },
          { label: post.title },
        ]}
      />
      <Content>
        <LinkWrapper><Link to="/articles">See All Articles &gt;</Link></LinkWrapper>
        <H1>{post.title}</H1>
        <HR />
        {post.published && (
          <PublishedDate>{moment(post.published).format('MMMM DD, YYYY')}</PublishedDate>
        )}
        <div dangerouslySetInnerHTML={{ __html: post?.body || '' }} />
      </Content>
    </Container>
  )
}
