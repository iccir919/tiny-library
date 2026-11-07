"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import type { NavLinkProps } from "@/app/types"

export default function CategoryLink({ href, children }: NavLinkProps) {
    const pathname = usePathname()
    const isActive = pathname === href 

    return (
        <Link
            href={href}
            className={`uppercase text-sm tracking-wide whitespace-nowrap md:pl-2 md:border-l-2
                ${
                    isActive
                        ? "text-orange-accent border-orange-accent"
                        : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
        >
            {children}
        </Link>
    )
}