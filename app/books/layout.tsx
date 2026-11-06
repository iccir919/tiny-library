import { getAllCategories } from '@/app/lib/books'

import type { LayoutProps } from '@/app/types'

import Link from 'next/link'

export default async function BookLayout({ children }: { children: React.ReactNode }) {
    const categories = await getAllCategories()
    return (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 p-4">
            <nav className="flex flex-row md:flex-col gap-4 md:gap-2 overflow-x-auto md:w-48 shrink-0">
                <Link 
                    href="/books"
                    className="uppercase text-sm whitespace-nowrap tracking-wide text-gray-500 hover:text-gray-700"
                >
                    All
                </Link>
                {categories.map((category) => (
                    <Link 
                        key={category.slug}
                        href={`/books/categories/${category.slug}`}
                        className="uppercase text-sm whitespace-nowrap tracking-wide text-gray-500 hover:text-gray-700"
                    >
                        {category.label}
                    </Link>
                ))}
            </nav>
            <div className="flex-1 min-w-0">
                {children}
            </div>
        </div>
    )
}