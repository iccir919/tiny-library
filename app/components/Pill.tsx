import type { PillProps } from "@/app/types"

export default function Pill({ children, className }: PillProps) {
    return (
        <span className={`inline-block text-sm px-2 py-0.5 rounded-full border border-gray-300 ${className || ''}`}>
            {children}
        </span>
    )
}