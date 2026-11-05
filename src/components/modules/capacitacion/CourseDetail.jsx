import Button from "@/components/Button";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, File, FileText } from "lucide-react";
import Link from "next/link";


export default async function CourseDetail({ course }) {
  return (
    <>
      
      <Card className="relative w-full bg-white mt-6">
        <CardHeader>
          <Link className="my-2" href={'/capacitacion'}>Volver a todos los cursos</Link>
          <CardTitle className="text-xl">{ course.name }</CardTitle>
          <CardDescription>
            <Badge>{ course.type }</Badge>
          </CardDescription>
          <CardAction>
            
          </CardAction>
        </CardHeader>
        <CardContent>
          <img
              src={ course.image }
              alt="Event cover"
              className="relative z-20 aspect-video w-full"
          />
          <div className="mt-6">
            <p>{ course.description }</p>
          </div>

          {/* Material del curso */}
          <div className="mt-8">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                Material de capacitación
              </h3>

              <p className="text-sm text-muted-foreground">
                Archivos y documentos disponibles para descargar.
              </p>
            </div>

            {course.files && course.files.length > 0 ? (
              <div className="divide-y rounded-lg border">
                {course.files.map((file) => {
                  const extension = file.name?.split(".").pop()?.toUpperCase();

                  return (
                    <div
                      key={file.id}
                      className="flex items-center justify-between gap-4 p-4"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="rounded-md bg-muted p-2">
                          {extension === "PDF" ? (
                            <FileText className="h-5 w-5 text-red-500" />
                          ) : (
                            <File className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium">
                            {file.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Autor: {file.author || "Desconocido"}
                          </p>
                        </div>
                      </div>

                      <Button asChild size="sm" variant="outline" className="shrink-0 whitespace-nowrap gap-2">
                        <a href={`http://131.107.3.101/intranet/${file.path}`} download>
                          Descargar
                        </a>
                      </Button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <File className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />

                <p className="text-sm text-muted-foreground">
                  Todavía no hay materiales disponibles para este curso.
                </p>
              </div>
            )}
            </div>
        </CardContent>
      </Card>
    </>
  );
}