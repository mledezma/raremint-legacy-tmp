import moment from 'moment'
// Search the remix-run/react to nextjs.
//import { Link } from '@remix-run/react'
import { routes } from '~/library/routes'
import { Container } from '~/components/primitives/Container'
import { Image} from '~/components/primitives/Image'
import { HR } from '~/components/primitives/HR'
import { Breadcrumb } from '~/components/shared/Breadcrumb'
import { styled } from '~/styles/stitches.config'
import { Post } from '~/types'

export type ArticleProps = {
  posts: Post[]
}

const H1 = styled('h1', {
  pt: '$regular',
  pb: '$xx-small',
})

const ArticlesContent = styled('div', {
  pb: '$x-large',
})

const ArticleBox = styled('div', {
  display: 'inline-block',
  verticalAlign: 'top',
  width: '33%',

  img: {
    width: '100%',
  },

  '@medium-max': {
    width: '50%',
  },

  '@small-max': {
    width: '100%',
  },
})

const ArticleItem = styled('div', {
  p: '$small',
})

const PublishedDate = styled('div', {
  pb: '$small',
  fontSize: '$text-4-xl',
})

// const ArticleLink = styled(Link, {
//   variants: {
//     variant: {
//       article: {
//         color: 'white',
//         textDecoration: 'none',
//         fontWeight: '$extra-bold',
//         fontSize: '$text-lg',
//       },
//       readMore: {
//         color: '$text-links-and-metadata-panel-contract-address-link-text-color',
//         ml: '$small',
//       },
//     },
//   },
// })

export const Articles = ({ posts }: ArticleProps) => {
  return (
    <Container>
      <Breadcrumb
        path={[{ url: '/', label: 'Home' }, { label: 'Articles ' }]}
      />
      <H1>Articles</H1>
      <HR />

      <ArticlesContent>
        {posts?.map((item, key) => {
          return (
            <ArticleBox key={key}>
              <ArticleItem>
                <PublishedDate>{moment(item.published).format('MMMM DD, YYYY')}</PublishedDate>
                {/* <ArticleLink variant="article" to={`${routes.article_detail}${item.slug}`}>
                  <Image src={item.featured_image} alt={item.slug} />
                  <h4>{item.title}</h4>
                </ArticleLink> */}
                <p>
                  {item.meta_description}...
                  {/* <ArticleLink variant="readMore" to={`${routes.article_detail}${item.slug}`}>
                    read more
                  </ArticleLink> */}
                </p>
              </ArticleItem>
            </ArticleBox>
          )
        })}
      </ArticlesContent>
    </Container>
  )
}
