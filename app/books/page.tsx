import BookCard from "@/app/components/BookCard"
import { getAllBooks } from "@/app/lib/books"
import Link from "next/link"

export default async function BooksPage() {
    const books = await getAllBooks()


    return (
        <div className="mx-auto max-w-6xl p-4">
            <h1 className="text-2xl font-bold mb-4">Tiny Library - Books Page</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map((book) => (
                    <Link key={book.id} href={`/books/${book.id}`}> 
                        <BookCard book={book} />
                    </Link>
                ))}
            </div>
        </div>
    )
}