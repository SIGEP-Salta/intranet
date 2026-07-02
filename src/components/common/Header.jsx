import React from "react"

export default function Header({ title, description = "" }) {
    return (
        <div className="py-4">
            <h2 className="font-semibold text-xl leading-tight text-gray-900">
                { title }
            </h2>
            { description && (
                <p className="text-sm text-gray-400 mt-0.5">{ description }</p>
            )}
        </div>
    )
}