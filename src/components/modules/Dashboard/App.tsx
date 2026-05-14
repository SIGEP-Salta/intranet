import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function App({ url, name, description}) {
    return (
        <Card>
            <Link href={url} target="_blank">
                <div className="flex flex-col cursor-pointer">
                    <p className="mt-2 font-semibold text-sm">{name}</p>
                    <p className="mt-2 font-semibold text-sm">{description}</p>
                </div>
            </Link>
        </Card>
    )
}