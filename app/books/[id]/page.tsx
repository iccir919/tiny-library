import type { Book, BookDetailPageProps } from '@/app/types'

import { getBookById } from '@/app/lib/books'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from "next"

import { Heart } from 'lucide-react'

import Pill from '@/app/components/Pill'

export async function generateMetadata({ params }: BookDetailPageProps): Promise<Metadata> {
    const { id: bookId } = await params
    let book: Book

    try {
        book = await getBookById(bookId)
    } catch {
        notFound()
    }

    return {
        title: book.name 
    }
}

export default async function BookPage({ params }: BookDetailPageProps) { 
    const { id: bookId } = await params;
    let book: Book

    try {
        book = await getBookById(bookId)
    } catch {
        notFound()
    }

    return (
        <main>
            <div className="text-center md:hidden">
                <Link 
                    href="/books"
                    className="uppercase text-sm tracking-wide text-gray-500 hover:text-gray-700"
                >
                    Back to overview
                </Link>
            </div>
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