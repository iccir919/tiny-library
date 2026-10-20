import type { BookDetailPageProps } from '@/app/types'

import { getBookById } from '@/app/lib/books'

export default async function BookPage({ params }: BookDetailPageProps) { 
    const { id } = await params;

    const book = await getBookById(id)

    return (
        <div>
            <h1>Tiny Library - Book Details Page</h1>
            <p>Book ID: {id}</p>
            <p>Book Title: {book.name}</p>
            <p>Book Author: {book.author}</p>
        </div>
    )
}