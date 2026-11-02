import type { BooksGridProps } from "@/app/types"

import Link from "next/link"

import BookCard from "@/app/components/BookCard"

export default function BooksGrid({ books }: BooksGridProps) {
    if (books.length === 0) {
        return <p className="text-gray-500 text-center">No books found.</p>
    }
    
    return  (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
                <Link key={book.id} href={`/books/${book.id}`}>
                    <BookCard book={book} />
                </Link>
            ))}
        </div>
    ) 
}