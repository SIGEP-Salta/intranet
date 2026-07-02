import PostDetail from "@/components/modules/posts/PostDetail"
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
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-3">
        <PostDetail post={item.data} />
      </div>
      <div>
        Listado de posts
      </div>
    </div>
  )
}