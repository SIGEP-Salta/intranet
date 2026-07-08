import PostDetail from "@/components/modules/posts/PostDetail"
import RecentPosts from "@/components/modules/posts/RecentPosts"
import { getNewsById } from "@/lib/posts"

type Props = {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const item = await getNewsById(params.id)

  if (!item) {
    return <div>No encontrada</div>
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <PostDetail post={item.data} />
      </div>
      <div className="bg-white mt-6">
        <RecentPosts />
      </div>
    </div>
  )
}