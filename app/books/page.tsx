import type { BooksPageProps } from "@/app/types"

import SearchBox from "@/app/components/SearchBox"

import BooksGrid from "@/app/components/BooksGrid"

import { getAllBooks, searchBooks } from "@/app/lib/books"

export default async function BooksPage({ searchParams }: BooksPageProps) {
    const { query } = await searchParams

    const books = query ? await searchBooks(query) : await getAllBooks()

    return (
        <main>

            <div className="flex flex-col md:flex-row  justify-between items-start md:items-center gap-6 mb-6">
                <h1 className="text-4xl font-semibold text-gray-700">Books</h1>

                <SearchBox query={query} books={books} />
            </div>

            <BooksGrid books={books} />
        </main>
    )
}