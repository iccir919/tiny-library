import type { EyebrowProps } from "@/app/types"

export default function Eyebrow({ children, className }: EyebrowProps) {
    return (
        <span className={`text-sm font-semibold text-gray-500 uppercase tracking-wide ${className ?? ""}`}>
            {children}
        </span>
    )
}