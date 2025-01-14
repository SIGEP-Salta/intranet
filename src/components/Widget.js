import React from "react"

export default function Widget({ children, className = "" }) {
    return (
        <div className={`shadow-md rounded-lg border border-gray-200 ${className}`}>
            <div>{children}</div>
        </div>
    )
}