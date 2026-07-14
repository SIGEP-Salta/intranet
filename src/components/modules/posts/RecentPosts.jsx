"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useNews from "@/hooks/useNews"
import Link from "next/link";
import React, { useEffect, useState } from "react"

export default function RecentPosts() {
  const {news, loading} = useNews();

  return (
    <div className="col-span-2">
        {news?.map((post) => (
            <Link href={`/novedades/${post.id}`}>
                <Card className="p-3 hover:bg-muted/50 transition cursor-pointer">
                    <div className="flex gap-3">
                    
                    {/* Imagen */}
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
                        <img
                        src={post.image || "/placeholder.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Contenido */}
                    <div className="flex flex-col gap-1">
                        
                        {/* Título */}
                        <h4 className="text-sm font-semibold line-clamp-1">
                        {post.title}
                        </h4>

                        { post.date && (
                            <span className="text-xs text-muted-foreground">
                                {post.date}
                            </span>
                        )}

                        {/* Resumen */}
                        <p className="text-xs text-muted-foreground line-clamp-2">
                        {post.content}
                        </p>

                    </div>
                    </div>
                </Card>
                </Link>
        ))}
    </div>
  )
}