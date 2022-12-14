import { Post } from '~/types'

export interface DataI {
  title: string
  featured_image: any
  author: {
    first_name: string
    last_name: string
  }
  published: string
  meta_description: string
  body: string
}

export type ArticleProps = {
  posts: Post[]
}

export interface ArticleItemPros {
  post: Post
}
