import React from "react"

export default function Card({ title, subtitle, children, className = "" }) {
    return (
        <div className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 ${className}`}>
            <div className="mb-6">
                {title && (
                    <h2 className="text-lg font-semibold text-primary">{title}</h2>
                )}
                {subtitle && (
                    <h6 className="text-sm text-gray-400">{subtitle}</h6>
                )}
            </div>
            <div>{children}</div>
        </div>
    )
}