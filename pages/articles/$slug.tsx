// Todo: Check this page, didn't work in remix site.
import { ArticleItem } from '~/components/pages/articles/ArticleItem'
import { butterService } from '~/services/butter.server'
// import { useLoaderData } from '@remix-run/react'
// import { json, LoaderFunction } from '@remix-run/node'

// export const loader: LoaderFunction = async ({ params }) => {
//   const { slug = '' } = params
//   const post = (await butterService.getPostDetail(slug)) as any // TODO: fix any
//   return json({
//     post: post?.data,
//   })
// }

const Article = () => {
  // const { post } = useLoaderData()
  // return <ArticleItem post={post} />
}

export default Article
