import type { ButtonLinkProps } from "@/app/types"

import Link from "next/link"

export default function ButtonLink({ href, children }: ButtonLinkProps) {
    return (
        <Link
            href={href}
             className="inline-block uppercase border border-black text-black text-sm tracking-wide px-4 py-2 hover:bg-black hover:text-white transition-colors"
        >
            {children}
        </Link>
    )
}