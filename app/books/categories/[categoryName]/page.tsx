import type { CategoryPageProps, Category, Book  } from '@/app/types'

import { getCategoryBySlug, getBooksByCategory } from '@/app/lib/books'

import BooksGrid from '@/app/components/BooksGrid'

import { notFound } from 'next/navigation'

export const metadata = {
    title: 'Tiny Library - Category',
    description: 'Books in a specific category in the Tiny Library',
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { categoryName } = await params;
    let category: Category
    let books: Book[]

    try {
        [category, books] = await Promise.all([
            getCategoryBySlug(categoryName),
            getBooksByCategory(categoryName)
        ])
    } catch {
        notFound()
    }

    return (
        <main>
            <h1 className="text-4xl font-semibold text-gray-700 mb-4">{category.label}</h1>

            <BooksGrid books={books} />
        </main>
    )
}