export async function getCourseById(id: string) {
  try {
    const res = await fetch(`${process.env.CORE_URL}/api/v1/courses/${id}`, {
      method: "GET",
      cache: "no-store", // SSR siempre actualizado
    })

    if (!res.ok) {
      throw new Error("Error al obtener el curso")
    }

    const data = await res.json()

    return data
  } catch (error) {
    console.error("getCourseById error:", error)
    return null
  }
}