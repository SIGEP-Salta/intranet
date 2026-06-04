import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {
    LayoutGrid,
    FileText,
    Users,
    Package,
    Mail,
    Globe,
    PenLine,
    Settings,
    BarChart2,
    Shield,
    Building2,
    ClipboardList,
    CalendarDays,
    UserCog,
    Landmark,
    type LucideIcon,
} from "lucide-react"

const iconRegistry: Record<string, LucideIcon> = {
    'layout-grid': LayoutGrid,
    'file-text': FileText,
    'users': Users,
    'package': Package,
    'mail': Mail,
    'globe': Globe,
    'pen-line': PenLine,
    'settings': Settings,
    'bar-chart-2': BarChart2,
    'shield': Shield,
    'building-2': Building2,
    'clipboard-list': ClipboardList,
    'calendar-days': CalendarDays,
    'user-cog': UserCog,
    'landmark': Landmark,
}

export interface AppProps {
    url: string
    name: string
    description: string
    icon?: string
}

function AppIcon({ icon, name }: { icon?: string; name: string }) {
    if (icon) {
        if (icon.startsWith('http') || icon.startsWith('/')) {
            return (
                <Image
                    src={icon}
                    alt={name}
                    width={28}
                    height={28}
                    className="object-contain"
                />
            )
        }
        const Icon = iconRegistry[icon]
        if (Icon) return <Icon className="size-6 text-primary" />
    }
    return <LayoutGrid className="size-6 text-primary" />
}

export default function App({ url, name, description, icon }: AppProps) {
    return (
        <Card className="group transition-all duration-200 bg-white">
            <Link
                href={url}
                target="_blank"
                className="flex flex-col items-center gap-2 text-center"
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                    <AppIcon icon={icon} name={name} />
                </div>
                <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-semibold text-gray-800 leading-tight line-clamp-2">{name}</p>
                    <p className="text-[11px] text-gray-400 leading-tight line-clamp-1">{description}</p>
                </div>
            </Link>
        </Card>
    )
}
