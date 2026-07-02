import Button from "@/components/Button";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default async function PostDetail({ post }) {

  return (
    <Card className="relative w-full">
      <CardHeader>
        <CardTitle>{ post.title }</CardTitle>
      </CardHeader>
      <CardContent>
        <img
            src={ post.image }
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardAction>
          <Badge>{ post.type }</Badge>
        </CardAction>
        <CardDescription>
          { post.content }
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Cargar capacitación</Button>
      </CardFooter>
    </Card>
  );
}