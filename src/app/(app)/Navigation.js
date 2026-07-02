'use client'

import Dropdown from '@/components/Dropdown'
import DropdownLink, { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_LINKS = [
    { href: '/dashboard', label: 'Inicio' },
    { href: '/novedades', label: 'Novedades' },
    { href: '/capacitacion', label: 'Capacitación' },
]

function getInitials(name) {
    if (!name) return '?'
    const parts = name.trim().split(/\s+/)
    if (parts.length === 1) return parts[0][0].toUpperCase()
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

const Navigation = ({ user }) => {
    const { logout } = useAuth()
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const initials = getInitials(user?.name)

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/dashboard" className="flex items-center gap-3 flex-shrink-0">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm tracking-wide">SG</span>
                        </div>
                        <div className="leading-tight">
                            <div className="font-bold text-gray-900 text-base leading-none">SIGEP</div>
                            <div className="text-xs text-gray-500 mt-0.5">Sindicatura General — Salta</div>
                        </div>
                    </Link>

                    {/* Center nav links */}
                    <div className="hidden sm:flex items-center gap-1">
                        {NAV_LINKS.map(({ href, label }) => {
                            const isActive =
                                pathname === href ||
                                (href !== '/dashboard' && pathname.startsWith(href))
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 ${
                                        isActive
                                            ? 'bg-rose-100 text-primary'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}>
                                    {label}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Right section */}
                    <div className="hidden sm:flex items-center gap-3">
                        {/* IA button */}
                        <Link
                            href="/control"
                            className="flex items-center gap-1.5 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
                            <svg
                                className="w-3.5 h-3.5"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                aria-hidden="true">
                                <path d="M8 0 L9.5 5.5 L15 7 L9.5 8.5 L8 14 L6.5 8.5 L1 7 L6.5 5.5 Z" />
                            </svg>
                            IA
                        </Link>

                        {/* User avatar */}
                        <Dropdown
                            align="right"
                            width="48"
                            trigger={
                                <button className="w-9 h-9 rounded-full bg-amber-700 flex items-center justify-center text-white text-sm font-semibold hover:opacity-90 transition-opacity focus:outline-none">
                                    {initials}
                                </button>
                            }>
                            <DropdownLink href="/profile">Perfil</DropdownLink>
                            <DropdownButton onClick={logout}>
                                Cerrar sesión
                            </DropdownButton>
                        </Dropdown>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setOpen(o => !o)}
                        className="sm:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition duration-150">
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24">
                            {open ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="sm:hidden border-t border-gray-100">
                    <div className="pt-2 pb-3 space-y-1 px-4">
                        {NAV_LINKS.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                                    pathname === href
                                        ? 'bg-rose-100 text-primary'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}>
                                {label}
                            </Link>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4 gap-3">
                            <div className="w-9 h-9 rounded-full bg-amber-700 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                                {initials}
                            </div>
                            <div>
                                <div className="text-sm font-medium text-gray-800">
                                    {user?.name}
                                </div>
                                <div className="text-xs text-gray-500">{user?.email}</div>
                            </div>
                        </div>
                        <div className="mt-3 px-4 space-y-1">
                            <Link
                                href="/profile"
                                className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                                Perfil
                            </Link>
                            <button
                                onClick={logout}
                                className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation
