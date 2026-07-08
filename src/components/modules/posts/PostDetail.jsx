import Button from "@/components/Button";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const DEFAULT_NEWS_IMAGE = "/assets/logo.jpg"
const DEFAULT_CAPACITACION_IMAGE = "/assets/capacitacion.jpeg"
const DEFAULT_INSTITUCIONAL_IMAGE = "/assets/institucional.jpeg"
const DEFAULT_RRHH_IMAGE = "/assets/rrhh.jpeg"

const DEFAULT_IMAGES = {
  capacitacion: DEFAULT_CAPACITACION_IMAGE,
  institucional: DEFAULT_INSTITUCIONAL_IMAGE,
  rrhh: DEFAULT_RRHH_IMAGE,
}

function resolveNewsImage(src, type) {
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

export default async function PostDetail({ post }) {
  const image = resolveNewsImage(post.image, post.type)
  return (
    <Card className="relative w-full bg-white mt-6">
      <CardHeader>
        <CardTitle className="text-xl">{ post.title }</CardTitle>
        <CardDescription>
          <Badge>{ post.type }</Badge>
        </CardDescription>
        <CardAction>
          
        </CardAction>
      </CardHeader>
      <CardContent>
        <img
            src={ image }
            alt="Event cover"
            className="relative z-20 aspect-video w-full"
        />
        <div className="mt-6">
          <p>{ post.content }</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Cargar capacitación</Button>
      </CardFooter>
    </Card>
  );
}