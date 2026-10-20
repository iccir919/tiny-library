import type { BookDetailPageProps } from '@/app/types'

import { getBookById } from '@/app/lib/books'

export default async function BookPage({ params }: BookDetailPageProps) { 
    const { id } = await params;

    getBookById(id).then((book) => {
        console.log('Book details:', book);
    }).catch((error) => {
        console.error('Error fetching book details:', error);
    });

    return (
        <div>
            <h1>Tiny Library - Book Details Page</h1>
            <p>Book ID: {id}</p>
        </div>
    )
}