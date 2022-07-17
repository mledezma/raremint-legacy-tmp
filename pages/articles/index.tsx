// ToDo: Please check the loader functionality.
// import { json, LoaderFunction } from '@remix-run/node'
// import { useLoaderData } from '@remix-run/react'
import { butterService } from '~/services/butter.server'
import { Articles } from '~/components/pages/articles/Article'
import { Post } from '~/types'

// export const loader: LoaderFunction = async () => {
//   const posts = (await butterService.getPostList()) as any // TODO: fix any
//   return json({ posts: posts?.data })
// }

type ArticlesPageData = {
  posts: Post[]
}

const ArticlesPage = () => {
  // const { posts }: ArticlesPageData = useLoaderData()
  // return <Articles posts={posts} />
}

export default ArticlesPage
