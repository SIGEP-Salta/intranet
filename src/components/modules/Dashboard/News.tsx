"use client"

import React, { useEffect, useState } from "react"
import New, { fetchNews, type NewsItem } from "./New"

export default function News() {
  const [items, setItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  
  const [capacitacion, setCapacitacion] = useState<NewsItem | null>(null)
  const [rrhh, setRrhh] = useState<NewsItem | null>(null)
  const [institucional, setInstitucional] = useState<NewsItem | null>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      setLoading(true)
      const data = await fetchNews()
      
      if (!cancelled) {
        setItems(data)
        setCapacitacion(data.find(n => n.post_type === "capacitacion") || null)
        setRrhh(data.find(n => n.post_type === "rrhh") || null)
        setInstitucional(data.find(n => n.post_type === "institucional") || null)
        setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  console.log(items);

  /*
  Capacitacion arriba siempre sin importar fecha
  Institucional abajo a la iquierda
  RRHH abajo a la derecha
  Solo van estos 3 cards sin importar mas
  */

  return (
    <div className="col-span-2">
      <h2 className="text-lg font-semibold">Novedades</h2>
    
      {loading ? (
        <p className="mt-4 text-sm text-muted-foreground">Cargando novedades…</p>
      ) : items.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">No hay novedades por ahora.</p>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-4">
          { capacitacion && (
            <New key={`${capacitacion.title}-${0}`} item={capacitacion} type="capacitacion" index={0} />
          )}

          { institucional && (
            <New key={`${institucional.title}-${2}`} item={institucional} type="institucional" index={2} />
          )}

          { rrhh && (
            <New key={`${rrhh.title}-${1}`} item={rrhh} type="rrhh" index={1} />
          )}
        </div>
      )}
    </div>
  )
}
