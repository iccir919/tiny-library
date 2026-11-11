import { getAllCategories } from '@/app/lib/books'

import type { LayoutProps } from '@/app/types'

import CategoryLink from '@/app/components/CategoryLink'

export default async function BookLayout({ children }: LayoutProps) {
    const categories = await getAllCategories()
    return (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 p-4">
            <nav className="flex flex-row md:flex-col gap-4 md:gap-4 overflow-x-auto md:w-48 shrink-0">
                <CategoryLink 
                    href="/books"
                >
                    All
                </CategoryLink>
                {categories.map((category) => (
                    <CategoryLink 
                        key={category.slug}
                        href={`/books/categories/${category.slug}`}
                    >
                        {category.label}
                    </CategoryLink>
                ))}
            </nav>
            <div className="flex-1 min-w-0">
                {children}
            </div>
        </div>
    )
}