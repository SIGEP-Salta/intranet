"use client"

import React, { useEffect, useState } from "react"
import New, { fetchNews, type NewsItem } from "./New"

export default function News() {
  const [items, setItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      setLoading(true)
      const data = await fetchNews()
      if (!cancelled) {
        setItems(data)
        setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  console.log(items);

  return (
    <div className="col-span-2">
      <h2 className="text-lg font-semibold">Novedades</h2>

      {loading ? (
        <p className="mt-4 text-sm text-muted-foreground">Cargando novedades…</p>
      ) : items.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">No hay novedades por ahora.</p>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <New key={`${item.title}-${index}`} item={item} index={index} />
          ))}
        </div>
      )}
    </div>
  )
}
