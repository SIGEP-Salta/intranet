"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import CourseCreateSheet from "@/components/modules/capacitacion/CourseCreateSheet"
import useCourses from "@/hooks/useCourses"
import Link from "next/link";
import React, { useEffect, useState } from "react"

export default function CursosGrid() {
  const [search, setSearch] = useState("");
  const {courses, loading} = useCourses();
  const [createOpen, setCreateOpen] = useState(false);

  const filtered = courses.filter((course) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      course.name?.toLowerCase().includes(q) ||
      course.description?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="col-span-2">
      {loading ? (
        <p className="mt-4 text-sm text-muted-foreground">Cargando cursos</p>
      ) : courses.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">No hay cursos por ahora.</p>
      ) : (
        <>
          <div>
            <div className="flex flex-row gap-3 md:flex-row md:items-center md:justify-between">
              <Input
                placeholder="Buscar por nombre, slug o descripción..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="md:max-w-sm"
              />
              <Sheet open={createOpen} onOpenChange={setCreateOpen}>
                <SheetTrigger asChild>
                  <Button>Crear capacitación</Button>
                </SheetTrigger>
                <CourseCreateSheet
                  onCreated={() => {
                    refetch();
                    setCreateOpen(false);
                  }}
                />
              </Sheet>  
            </div>
            
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {filtered.map((item, index) => (
              <Card className="flex flex-col h-full overflow-hidden pt-0">
                  {/* Imagen + overlay */}
                  <div className="relative">
                      <div className="absolute inset-0 z-10 bg-black/35" />

                      <img
                      src={item.image}
                      alt={item.name}
                      className="aspect-video w-full object-cover"
                      />
                  </div>

                  {/* Contenido */}
                  <CardHeader className="flex flex-col flex-1">
                      <CardAction>
                        <Badge variant="alternative" className="rounded-full">{item.type}</Badge>
                      </CardAction>

                      <CardTitle>
                      <Link href={`/capacitacion/${item.id}`}>
                          {item.name}
                      </Link>
                      </CardTitle>

                      <CardDescription className="line-clamp-3">
                      {item.description}
                      </CardDescription>

                      {/* 👇 empuja el footer abajo */}
                      <div className="mt-auto" />
                  </CardHeader>

                  {/* Footer siempre abajo */}
                  <CardFooter>
                      <Button className="w-full">Descargar material</Button>
                  </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
