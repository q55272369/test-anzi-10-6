import { Post } from '@/src/types/blog'
import { LargeTitle } from '../LargeTitle'
import PostGrid from '../PostGrid'

export const MainPostsCollection = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <LargeTitle title="最新发布" />
      <PostGrid posts={posts} />
    </>
  )
}
