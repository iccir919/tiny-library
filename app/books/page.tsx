import BooksGrid from "@/app/components/BooksGrid"

import { getAllBooks } from "@/app/lib/books"



export default async function BooksPage() {
    const books = await getAllBooks()

    return (
        <main className="mx-auto max-w-6xl p-4">
            <h1 className="text-4xl font-semibold text-gray-700 mb-4">Books</h1>

            <BooksGrid books={books} />
        </main>
    )
}