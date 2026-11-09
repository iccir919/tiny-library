import type { EyebrowProps } from "@/app/types"



export default function Eyebrow({ children, className }: EyebrowProps) {
    return (
        <p className={`text-sm uppercase tracking-wide text-gray-700 ${className ?? ""}`}>
            {children}
        </p>
    )
}