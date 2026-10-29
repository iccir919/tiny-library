import type { BookDetailPageProps } from '@/app/types'

import { getBookById } from '@/app/lib/books'

import Image from 'next/image'
import { Heart } from 'lucide-react'
import Pill from '@/app/components/Pill'


export const metadata = {
    title: 'Tiny Library - Book Details',
    description: 'Details of a specific book in the Tiny Library',
}



export default async function BookPage({ params }: BookDetailPageProps) { 
    const { id } = await params;

    const book = await getBookById(id)

    return (
        <main className="max-w-6xl mx-auto p-4">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mt-6">
                <div className="md:w-1/2">
                    <Image
                        priority
                        className="w-full h-auto rounded-lg shadow-md"
                        src={book.image}
                        alt={`Cover of ${book.name}`}
                        width={300}
                        height={300}
                    />
                </div>
                <div className="md:w-1/2">
                    <div className="flex items-center gap-2 mb-4 text-lg text-gray-500">
                        <Heart 
                            size={20}   
                        />
                        {book.likes.toLocaleString()}
                    </div>
                    <h1 className="text-3xl font-bold mb-4">{book.name}</h1>
                    <Pill className="capitalize mb-4">{book.category}</Pill>
                    <p className="text-xl text-gray-700 mb-2">{book.author}</p>
                    <p className="text-sm text-gray-600 mb-2 mt-4">
                        Added on {new Date(book.dateAdded).toLocaleDateString("en-US", { timeZone: "UTC" })}
                    </p>
                </div>
            </div>
        </main>
    )
}