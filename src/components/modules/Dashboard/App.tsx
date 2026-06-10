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
    Star,
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

const colorPalette = [
    { bg: 'bg-blue-100', icon: 'text-blue-600' },
    { bg: 'bg-teal-100', icon: 'text-teal-600' },
    { bg: 'bg-amber-100', icon: 'text-amber-600' },
    { bg: 'bg-sky-100', icon: 'text-sky-600' },
    { bg: 'bg-violet-100', icon: 'text-violet-600' },
    { bg: 'bg-rose-100', icon: 'text-rose-600' },
    { bg: 'bg-emerald-100', icon: 'text-emerald-600' },
]

export interface AppProps {
    url: string
    name: string
    description: string
    icon?: string
    colorIndex?: number
}

function AppIcon({ icon, name, colorClass }: { icon?: string; name: string; colorClass: string }) {
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
        if (Icon) return <Icon className={`size-6 ${colorClass}`} />
    }
    return <LayoutGrid className={`size-6 ${colorClass}`} />
}

export default function App({ url, name, description, icon, colorIndex = 0 }: AppProps) {
    const colors = colorPalette[colorIndex % colorPalette.length]

    return (
        <Card className="group relative p-0 bg-white hover:shadow-md transition-shadow">
            {/*
            <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
                <Star className="size-3.5 text-amber-400 fill-amber-300" />
            </div>
            */}
            <Link
                href={url}
                target="_blank"
                className="flex flex-col items-start gap-2.5 px-4 pt-5 pb-4"
            >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${colors.bg}`}>
                    <AppIcon icon={icon} name={name} colorClass={colors.icon} />
                </div>
                <div className="flex flex-col gap-0.5 text-left">
                    <p className="text-xs font-semibold text-gray-800 leading-tight line-clamp-2">{name}</p>
                    <p className="text-[11px] text-gray-400 leading-tight line-clamp-1">{description}</p>
                </div>
            </Link>
        </Card>
    )
}
