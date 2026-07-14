import CourseDetail from "@/components/modules/capacitacion/CourseDetail"
import RecentPosts from "@/components/modules/posts/RecentPosts"
import { getCourseById } from "@/lib/courses"

type Props = {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const item = await getCourseById(params.id)

  if (!item) {
    return <div>No encontrada</div>
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <CourseDetail course={item.data} />
      </div>
      <div className="bg-white mt-6">
        <RecentPosts />
      </div>
    </div>
  )
}