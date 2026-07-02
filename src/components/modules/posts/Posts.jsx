"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useNews from "@/hooks/useNews"
import Link from "next/link";
import React, { useEffect, useState } from "react"

export default function Posts() {
  const {news, loading} = useNews();

  return (
    <div className="col-span-2">
      {loading ? (
        <p className="mt-4 text-sm text-muted-foreground">Cargando novedades…</p>
      ) : news.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">No hay novedades por ahora.</p>
      ) : (
        <div className="mt-4 grid grid-cols-3 gap-4">
          {news.map((item, index) => (
            <Card className="flex flex-col h-full overflow-hidden pt-0">
                {/* Imagen + overlay */}
                <div className="relative">
                    <div className="absolute inset-0 z-10 bg-black/35" />

                    <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-video w-full object-cover"
                    />
                </div>

                {/* Contenido */}
                <CardHeader className="flex flex-col flex-1">
                    <CardAction>
                    <Badge>{ item.post_type }</Badge>
                    </CardAction>

                    <CardTitle>
                    <Link href={`/novedades/${item.id}`}>
                        {item.title}
                    </Link>
                    </CardTitle>

                    <CardDescription className="line-clamp-3">
                    {item.content}
                    </CardDescription>

                    {/* 👇 empuja el footer abajo */}
                    <div className="mt-auto" />
                </CardHeader>

                {/* Footer siempre abajo */}
                <CardFooter>
                    <Button className="w-full">
                        <Link href={`/novedades/${item.id}`}>
                          Ver novedadx
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
