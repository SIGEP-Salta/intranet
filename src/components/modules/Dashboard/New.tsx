import React from "react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

const DEFAULT_NEWS_IMAGE = "/assets/logo.jpg"
const DEFAULT_CAPACITACION_IMAGE = "/assets/capacitacion.jpeg"
const DEFAULT_INSTITUCIONAL_IMAGE = "/assets/institucional.jpeg"
const DEFAULT_RRHH_IMAGE = "/assets/rrhh.jpeg"

const DEFAULT_IMAGES: Record<string, string> = {
  capacitacion: DEFAULT_CAPACITACION_IMAGE,
  institucional: DEFAULT_INSTITUCIONAL_IMAGE,
  rrhh: DEFAULT_RRHH_IMAGE,
}

function employeesOrigin(): string {
  return (process.env.NEXT_PUBLIC_EMPLOYEES_URL || process.env.EMPLOYEES_URL || "")
    .trim()
    .replace(/\/+$/, "")
}

function resolveNewsImage(src: string | undefined, type: string): string {
  const trimmed = src?.trim() ?? ""
  if (trimmed.length === 0) {
    return DEFAULT_IMAGES[type ?? ""] ?? DEFAULT_NEWS_IMAGE
  }
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed
  }
  const base = employeesOrigin()
  if (!base) {
    return trimmed
  }
  const path = trimmed.startsWith("/") ? trimmed : `/${trimmed}`
  return `${base}${path}`
}

export type NewsItem = {
  id: string
  image: string
  title: string
  content: string
  date: string
  post_type: string
}

type NewsItemRaw = {
  id: string
  image?: string
  image_url?: string
  title?: string
  content?: string
  body?: string
  date?: string
  published_at?: string
  post_type?: string
  category?: string
}

export function mapNewsItem(raw: NewsItemRaw): NewsItem {
  return {
    id: raw.id,
    image: raw.image ?? raw.image_url ?? "",
    title: raw.title ?? "",
    content: raw.content ?? raw.body ?? "",
    date: raw.date ?? raw.published_at ?? "",
    post_type: raw.post_type ?? raw.category ?? "",
  }
}

export async function fetchNews(): Promise<NewsItem[]> {
  const res = await fetch(`/api/posts/dashboard`, { cache: "no-store" })
  if (!res.ok) {
    return []
  }
  const data: NewsItemRaw[] = await res.json()
  

  console.log('la data es', data);
  
  if (!Array.isArray(data)) {
    return []
  }
  return data.map(mapNewsItem)
}

type NewProps = {
  item: NewsItem
  index: number,
  type: string
}

export default function New({ item, index, type }: NewProps) {
  const imageSrc = resolveNewsImage(item.image, type)

  return (
    <Card
      className={`py-0 bg-white overflow-hidden ${index === 0 ? "col-span-2" : "col-span-1"}`}
    >
      {index === 0 ? (
        <div className="flex h-[200px]">
          <div className="relative w-1/3 shrink-0">
            <img
              src={imageSrc}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <Badge className="absolute left-3 top-3 z-10 rounded-full">
              {item.post_type}
            </Badge>
          </div>
          <CardContent className="p-4">
            <Link href={`/novedades/${item.id}`}>{item.title}</Link>
            <CardDescription className="py-2">{item.content}</CardDescription>
            <span className="text-xs text-muted-foreground">{item.date}</span>
          </CardContent>
        </div>
      ) : (
        <div>
          <div className="relative h-40 w-full">
            <img
              src={imageSrc}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <Badge className="absolute left-3 top-3 z-10 rounded-full">
              {item.post_type}
            </Badge>
          </div>
          <CardContent className="p-4">
            <CardTitle>
              <Link href={`/novedades/${item.id}`}>{item.title}</Link>
            </CardTitle>
            <CardDescription className="py-2">{item.content}</CardDescription>
            <span className="text-xs text-muted-foreground">{item.date}</span>
          </CardContent>
        </div>
      )}
    </Card>
  )
}
