import { Button } from "../ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty";

export default function EmptyCard({ title, description, icon, action}) {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia>
                    {icon}
                </EmptyMedia>
                <EmptyTitle>{ title ?? 'No hay data'}</EmptyTitle>
                <EmptyDescription>{ description }</EmptyDescription>
            </EmptyHeader>
            { action && (
                <EmptyContent>
                    <Button className="text-white">Add data</Button>
                </EmptyContent>
            )}
        </Empty>
    )
}