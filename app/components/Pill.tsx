import type { PillProps } from "@/app/types"

export default function Pill({ children, className }: PillProps) {
    return (
        <span className={`inline-block text-base px-3 py-1 rounded-full border border-gray-300 ${className || ''}`}>
            {children}
        </span>
    )
}