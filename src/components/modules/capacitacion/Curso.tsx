import Button from "@/components/Button";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

async function getNewsById(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener la novedad");
  }

  return res.json();
}

export default async function Curso({ params }: { params: { id: string } }) {
  const news = await getNewsById(params.id);

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={ news.image }
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>{ news.title }</CardTitle>
        <CardDescription>
          { news.content }
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  );
}