"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import CourseCreateSheet from "@/components/modules/capacitacion/CourseCreateSheet"
import useCourses from "@/hooks/useCourses"
import Link from "next/link";
import React, { useState } from "react"
import Image from "next/image";

export default function CursosGrid() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { courses, pagination, loading, refetch } = useCourses(currentPage, 8, search);

  return (
    <div className="col-span-2">
      {loading ? (
        <p className="mt-4 text-sm text-muted-foreground">Cargando cursos</p>
      ) : courses.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">
          {search
            ? "No se encontraron cursos con esa búsqueda."
            : "No hay cursos por ahora."}
        </p>
      ) : (
        <>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Input
            placeholder="Buscar por nombre o descripción..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="md:max-w-sm"
          />

          <div className="flex items-center gap-3 justify-end">
            {/* Paginador */}
            {pagination && pagination.last_page > 1 && (
              <div className="flex items-center gap-2 text-sm">

                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1 || loading}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                >
                  Anterior
                </Button>

                <span className="whitespace-nowrap text-muted-foreground">
                  Página {pagination.current_page} de {pagination.last_page}
                </span>

                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === pagination.last_page || loading}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                >
                  Siguiente
                </Button>

              </div>
            )}
{/*
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
            */}
          </div>
        </div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {courses.map((item) => (
              <Card key={item.id} className="flex flex-col h-full overflow-hidden pt-0">
                  {/* Imagen + overlay */}
                  <div className="relative">
                      <div className="absolute inset-0 z-10 bg-black/35" />
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
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
                      <Button className="w-full">
                        <Link href={`/capacitacion/${item.id}`}>
                          Ver curso
                        </Link>
                      </Button>
                  </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-3 text-sm text-muted-foreground">
  Mostrando {pagination?.from ?? 0} - {pagination?.to ?? 0}
  {" "}de {pagination?.total ?? 0} cursos
</div>
        </>
      )}
    </div>
  )
}
