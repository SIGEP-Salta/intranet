import Button from "@/components/Button";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default async function Novedad({ post }) {

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={ post.image }
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="outline">Featuredex</Badge>
        </CardAction>
        <CardTitle>{ post.title }</CardTitle>
        <CardDescription>
          { news.content }
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Cargar capacitación</Button>
      </CardFooter>
    </Card>
  );
}