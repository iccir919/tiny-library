import type { BooksPageProps } from "@/app/types"

import Form from "next/form"

import BooksGrid from "@/app/components/BooksGrid"

import { getAllBooks, searchBooks } from "@/app/lib/books"




export default async function BooksPage({ searchParams }: BooksPageProps) {
    const { query } = await searchParams

    const books = query ? await searchBooks(query) : await getAllBooks()

    return (
        <main>

            <div className="flex flex-col md:flex-row  justify-between items-start md:items-center gap-6 mb-6">
                <h1 className="text-4xl font-semibold text-gray-700">Books</h1>

                <Form className="flex items-center w-full md:w-auto gap-2" action="/books">
                    <input
                        id="query"
                        type="text"
                        name="query"
                        defaultValue={query}
                        placeholder="Search for a book"
                        className="w-full md:w-80 rounded-full border border-gray-300 px-4 py-2 text-sm"
                    />
                    <label htmlFor="query" className="sr-only">
                        Search for a book
                    </label>
                </Form>
            </div>

            <BooksGrid books={books} />
        </main>
    )
}