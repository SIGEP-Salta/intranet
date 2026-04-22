'use client'

import Button from '@/components/Button';
import { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import EmptyCard from '@/components/common/EmptyCard'
import { es } from "react-day-picker/locale";
import { Cake, Calendar, ChevronRightIcon } from 'lucide-react';
import Legend from "@/components/common/Legend"
import 'react-day-picker/style.css'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item';
import Card from '@/components/Card';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Loading from '@/app/(app)/Loading';

export default function DashboardDatePicker() {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>(new Date())
  const [selectedDateEvents, setSelectedDateEvents] = useState<any[]>([])
  const [bookedDays, setBookedDays] = useState<Date[]>([])
  const [eventsByDate, setEventsByDate] = useState<Record<string, any[]>>({})

  const [birthdayDays, setBirthdayDays] = useState<Date[]>([]);
  const [holidayDays, setHolidayDays] = useState<Date[]>([]);
  const [mixedDays, setMixedDays] = useState<Date[]>([]);

  const legendItems = [
    {
      color: 'bg-red-500',
      label: 'Cumpleaños'
    },
    {
      color: 'bg-blue-500',
      label: 'Feriado'
    },
    {
      color: 'bg-purple-500',
      label: 'Cumpleaños + Feriado'
    },
  ]

  const formatDateKey = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
  
    return `${y}-${m}-${d}`;
  };

  const mapEvents = (birthdays: any[], holidays: any[]) => {
    const map: Record<string, any[]> = {};
  
    
  
    // 🎂 Cumpleaños (año actual)
    birthdays.forEach((b) => {
      const [_, month, day] = b.birth_date.split('-');
  
      const date = new Date(
        new Date().getFullYear(),
        Number(month) - 1,
        Number(day)
      );
  
      const key = formatDateKey(date);
  
      if (!map[key]) map[key] = [];
  
      map[key].push({
        title: b.name,
        type: "birthday", // 🔥 IMPORTANTE
        icon: <Cake className="size-4 text-pink-600" />,
        date,
      });
    });
  
    // 📅 Holidays
    holidays.forEach((h) => {
      const [datePart] = h.date.split("T");
      const [year, month, day] = datePart.split("-");
  
      const date = new Date(
        Number(year),
        Number(month) - 1,
        Number(day)
      );
  
      const key = formatDateKey(date);
  
      if (!map[key]) map[key] = [];
  
      map[key].push({
        title: h.name,
        type: "holiday", // 🔥 IMPORTANTE
        icon: <Calendar className="size-4 text-blue-600" />,
        date,
      });
    });
  
    return map;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        /*
        const [birthdaysRes, holidaysRes] = await Promise.all([
          fetch(`/api/employees/birthdays`, { cache: 'no-store' }),
          fetch(`/api/holidays`, { cache: 'no-store' }),
        ]);
  
        const birthdays = await birthdaysRes.json();
        const holidays = await holidaysRes.json();
        // Transformar datos
        const currentYear = new Date().getFullYear();
        const birthdayDates = birthdays.map((b: any) => {
          const [_, month, day] = b.birth_date.split('-');
          return new Date(currentYear, Number(month) - 1, Number(day));
        });

        const eventDates = holidays.map((e: any) => new Date(e.date));
        // Unificar todo
        //setBookedDays([...birthdayDates, ...eventDates]);
        const mapped = mapEvents(birthdays, holidays);
        setEventsByDate(mapped);

        //setBookedDays(Object.values(mapped).flat().map(e => e.date));
        const birthdayDates: Date[] = [];
        const holidayDates: Date[] = [];
        const mixedDates: Date[] = [];

        Object.entries(mapped).forEach(([_, events]) => {
          const types = events.map(e => e.type);
          const date = events[0].date;

          if (types.includes("birthday") && types.includes("holiday")) {
            mixedDates.push(date);
          } else if (types.includes("birthday")) {
            birthdayDates.push(date);
          } else if (types.includes("holiday")) {
            holidayDates.push(date);
          }
        });
        setBirthdayDays(birthdayDates);
        setHolidayDays(holidayDates);
        setMixedDays(mixedDates);
        */
        const [birthdaysRes, holidaysRes] = await Promise.all([
          fetch(`/api/employees/birthdays`, { cache: 'no-store' }),
          fetch(`/api/holidays`, { cache: 'no-store' }),
        ]);
  
        const birthdays = await birthdaysRes.json();
        const holidays = await holidaysRes.json();
  
        // 🔥 Fuente única de verdad
        const mapped = mapEvents(birthdays, holidays);
        setEventsByDate(mapped);
  
        // 🔥 Separación por tipo
        const birthdayDates: Date[] = [];
        const holidayDates: Date[] = [];
        const mixedDates: Date[] = [];
  
        Object.values(mapped).forEach((events) => {
          const types = events.map(e => e.type);
          const date = events[0].date;
  
          if (types.includes("birthday") && types.includes("holiday")) {
            mixedDates.push(date);
          } else if (types.includes("birthday")) {
            birthdayDates.push(date);
          } else if (types.includes("holiday")) {
            holidayDates.push(date);
          }
        });
  
        setBirthdayDays(birthdayDates);
        setHolidayDays(holidayDates);
        setMixedDays(mixedDates);

        console.log("birthdayDays", birthdayDays);
console.log("holidayDays", holidayDays);
console.log("mixedDays", mixedDays);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false)
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!selected) {
      setSelectedDateEvents([]);
      return;
    }

    const key = formatDateKey(selected);
    setSelectedDateEvents(eventsByDate[key] || []);
  }, [selected, eventsByDate]);

  return (
    <>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        { loading && (<Loading />)}
        { !loading && bookedDays && (
          <>
            <DayPicker
              animate
              mode="single"
              required
              selected={selected}
              onSelect={setSelected}
              locale={es}
              classNames={{
                today: 'font-bold',
                selected: `font-bold`
              }}
              modifiers={{
                birthday: birthdayDays,
                holiday: holidayDays,
                mixed: mixedDays,
              }}
              modifiersClassNames={{
                birthday: "bg-red-500 text-white rounded-full",
                holiday: "bg-blue-500 text-white rounded-full",
                mixed: "bg-purple-500 text-white rounded-full",
              }}
            />
            <div className='flex w-full flex-col gap-2'>
              {selected && (
                <h2 className="text-lg font-semibold">
                  {selected.toLocaleDateString("es-AR", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </h2>
              )}
              { selectedDateEvents.length === 0 && (
                <EmptyCard 
                  title="No hay eventos" 
                  description=""
                  icon={<Calendar />}
                  action={null}
                />
              )}
              { selectedDateEvents.length > 0 && (
                <div className="flex w-full flex-col gap-2">
                  { selectedDateEvents.map((event, index) => (
                    <Item variant="outline" size="sm" asChild key={index}>
                      <a href="#">
                        <ItemMedia>
                          { event.icon }
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle>{ event.title }</ItemTitle>
                        </ItemContent>
                        <ItemActions>
                          <ChevronRightIcon className="size-4" />
                        </ItemActions>
                      </a>
                    </Item>
                  ))}
                </div>
              ) }
            </div>
          </>
        )}
        { !loading && (
          <div className="col-span-1 md:col-span-2">
            <Legend items={legendItems} />
          </div>
        )}
      </div>
    </>
  )
}

