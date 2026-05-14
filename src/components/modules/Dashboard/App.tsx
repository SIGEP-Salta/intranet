import Link from "next/link"
import Image from "next/image"
import logo from "@/../public/assets/logo_blanco.png"
import Card from "@/components/Card"

export default function App({ url, name, description}) {
    return (
        <Card className="">
        <Link href={url} target="_blank" className="">
            <div className="flex flex-col cursor-pointer">
                
                <p className="mt-2 font-semibold text-sm">{name}</p>
                <p className="mt-2 font-semibold text-sm">{description}</p>
            </div>
        </Link>
        </Card>
    )
}