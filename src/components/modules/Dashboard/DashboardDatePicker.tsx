'use client'

import 'react-day-picker/style.css'

import { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { es } from 'react-day-picker/locale'
import { Cake, Calendar, ChevronRightIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import EmptyCard from '@/components/common/EmptyCard'
import Legend from '@/components/common/Legend'
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item'

interface EventItem {
    title: string
    type: 'birthday' | 'holiday'
    icon: ReactNode
    date: Date
}

const legendItems = [
    { color: 'bg-red-500', label: 'Cumpleaños' },
    { color: 'bg-blue-500', label: 'Feriado' },
    { color: 'bg-purple-500', label: 'Cumpleaños + Feriado' },
]

const formatDateKey = (date: Date) => {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
}

const mapEvents = (birthdays: any[], holidays: any[]): Record<string, EventItem[]> => {
    const map: Record<string, EventItem[]> = {}

    birthdays.forEach((b) => {
        const [, month, day] = b.birth_date.split('-')
        const date = new Date(new Date().getFullYear(), Number(month) - 1, Number(day))
        const key = formatDateKey(date)
        if (!map[key]) map[key] = []
        map[key].push({ title: b.name, type: 'birthday', icon: <Cake className="size-4 text-pink-600" />, date })
    })

    holidays.forEach((h) => {
        const [datePart] = h.date.split('T')
        const [year, month, day] = datePart.split('-')
        const date = new Date(Number(year), Number(month) - 1, Number(day))
        const key = formatDateKey(date)
        if (!map[key]) map[key] = []
        map[key].push({ title: h.name, type: 'holiday', icon: <Calendar className="size-4 text-blue-600" />, date })
    })

    return map
}

export default function DashboardDatePicker() {
    const [loading, setLoading] = useState(true)
    const [selected, setSelected] = useState<Date>(new Date())
    const [selectedDateEvents, setSelectedDateEvents] = useState<EventItem[]>([])
    const [eventsByDate, setEventsByDate] = useState<Record<string, EventItem[]>>({})
    const [birthdayDays, setBirthdayDays] = useState<Date[]>([])
    const [holidayDays, setHolidayDays] = useState<Date[]>([])
    const [mixedDays, setMixedDays] = useState<Date[]>([])

    useEffect(() => {
        let cancelled = false
        ;(async () => {
            try {
                const [birthdaysRes, holidaysRes] = await Promise.all([
                    fetch('/api/employees/birthdays', { cache: 'no-store' }),
                    fetch('/api/holidays', { cache: 'no-store' }),
                ])

                const birthdays = await birthdaysRes.json()
                const holidays = await holidaysRes.json()
                const mapped = mapEvents(birthdays, holidays)

                const bDays: Date[] = []
                const hDays: Date[] = []
                const mDays: Date[] = []

                Object.values(mapped).forEach((events) => {
                    const types = events.map(e => e.type)
                    const date = events[0].date
                    if (types.includes('birthday') && types.includes('holiday')) {
                        mDays.push(date)
                    } else if (types.includes('birthday')) {
                        bDays.push(date)
                    } else {
                        hDays.push(date)
                    }
                })

                if (!cancelled) {
                    setEventsByDate(mapped)
                    setBirthdayDays(bDays)
                    setHolidayDays(hDays)
                    setMixedDays(mDays)
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                if (!cancelled) setLoading(false)
            }
        })()
        return () => { cancelled = true }
    }, [])

    useEffect(() => {
        const key = formatDateKey(selected)
        setSelectedDateEvents(eventsByDate[key] ?? [])
    }, [selected, eventsByDate])

    if (loading) return (
        <div className="h-[420px] flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-primary" />
        </div>
    )

    return (
        <div className="grid grid-cols-1 gap-4">
            <div className="flex w-[280px] flex-col gap-4">
                <DayPicker
                    animate
                    mode="single"
                    selected={selected}
                    onSelect={(date) => { if (date) setSelected(date) }}
                    locale={es}
                    classNames={{
                        today: 'font-bold',
                        selected: 'font-bold',
                    }}
                    modifiers={{
                        birthday: birthdayDays,
                        holiday: holidayDays,
                        mixed: mixedDays,
                    }}
                    modifiersClassNames={{
                        birthday: 'bg-red-500 text-white rounded-full',
                        holiday: 'bg-blue-500 text-white rounded-full',
                        mixed: 'bg-purple-500 text-white rounded-full',
                    }}
                    className="w-full"
                />
                <div className="flex w-full flex-col gap-2 h-[300px]">
                    <h2 className="text-lg font-semibold">
                        {selected.toLocaleDateString('es-AR', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                        })}
                    </h2>
                    {selectedDateEvents.length === 0 ? (
                        <EmptyCard
                            title="No hay eventos"
                            description=""
                            icon={<Calendar />}
                            action={null}
                        />
                    ) : (
                        <div className="flex w-full flex-col gap-2">
                            {selectedDateEvents.map((event, index) => (
                                <Item variant="outline" size="sm" asChild key={index}>
                                    <a href="#">
                                        <ItemMedia>{event.icon}</ItemMedia>
                                        <ItemContent>
                                            <ItemTitle>{event.title}</ItemTitle>
                                        </ItemContent>
                                        <ItemActions>
                                            <ChevronRightIcon className="size-4" />
                                        </ItemActions>
                                    </a>
                                </Item>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="col-span-1 md:col-span-2">
                <Legend items={legendItems} />
            </div>
        </div>
    )
}
