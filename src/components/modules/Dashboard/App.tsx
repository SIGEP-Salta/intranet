import Link from "next/link"
import Image from "next/image"
import logo from "@/../public/assets/logo_blanco.png"

export default function App({ url, title}) {
    return (
        <Link href={url} target="_blank" className="">
            <div className="flex flex-col items-center py-6 cursor-pointer">
                <div className="bg-primary py-4 px-5 rounded-full">
                    <span className="text-base">
                        <Image src={logo} width={16} height={16} alt="Employees" />
                    </span>
                </div>
                <p className="mt-2 font-semibold text-sm text-center">{title}</p>
            </div>
        </Link>
    )
}