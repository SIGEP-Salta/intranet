import React from "react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

const DEFAULT_NEWS_IMAGE = "/assets/logo.jpg"

function resolveNewsImage(src: string | undefined): string {
  const trimmed = src?.trim() ?? ""
  return trimmed.length > 0 ? trimmed : DEFAULT_NEWS_IMAGE
}

export type NewsItem = {
  image: string
  title: string
  content: string
  date: string
  type: string
}

type NewsItemRaw = {
  image?: string
  image_url?: string
  title?: string
  content?: string
  body?: string
  date?: string
  published_at?: string
  type?: string
  category?: string
}

export function mapNewsItem(raw: NewsItemRaw): NewsItem {
  return {
    image: raw.image ?? raw.image_url ?? "",
    title: raw.title ?? "",
    content: raw.content ?? raw.body ?? "",
    date: raw.date ?? raw.published_at ?? "",
    type: raw.type ?? raw.category ?? "",
  }
}

export async function fetchNews(): Promise<NewsItem[]> {
  const res = await fetch(`/api/news`, { cache: "no-store" })
  if (!res.ok) {
    return []
  }
  const data: NewsItemRaw[] = await res.json()
  if (!Array.isArray(data)) {
    return []
  }
  return data.map(mapNewsItem)
}

type NewProps = {
  item: NewsItem
  index: number
}

export default function New({ item, index }: NewProps) {
  const imageSrc = resolveNewsImage(item.image)

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
            <Badge variant="secondary" className="absolute left-3 top-3 z-10 bg-white">
              {item.type}
            </Badge>
          </div>
          <CardContent className="p-4">
            <CardTitle>{item.title}</CardTitle>
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
            <Badge className="absolute left-3 top-3 z-10 rounded-full bg-white">
              {item.type}
            </Badge>
          </div>
          <CardContent className="p-4">
            <CardTitle>{item.title}</CardTitle>
            <CardDescription className="py-2">{item.content}</CardDescription>
            <span className="text-xs text-muted-foreground">{item.date}</span>
          </CardContent>
        </div>
      )}
    </Card>
  )
}
