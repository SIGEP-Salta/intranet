import Button from "@/components/Button";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default async function CourseDetail({ course }) {
  return (
    <Card className="relative w-full bg-white mt-6">
      <CardHeader>
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
      </CardContent>
    </Card>
  );
}