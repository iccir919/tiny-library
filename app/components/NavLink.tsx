"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import type { NavLinkProps } from "@/app/types"

export default function NavLink({ href, children }: NavLinkProps) {
    const pathname = usePathname()
    const isActive = pathname === href || (pathname.startsWith(`${href}/`))

    return (
        <Link
            href={href}
            className={`uppercase text-sm tracking-wide pb-1 border-b-2
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

