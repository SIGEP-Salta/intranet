export async function getNewsById(id: string) {
  try {
    const res = await fetch(`${process.env.RRHH_URL}/api/v1/posts/${id}`, {
      method: "GET",
      cache: "no-store", // SSR siempre actualizado
    })

    if (!res.ok) {
      throw new Error("Error al obtener la noticia")
    }

    const data = await res.json()

    return data
  } catch (error) {
    console.error("getNewsById error:", error)
    return null
  }
}