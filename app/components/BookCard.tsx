import type { BookCardProps } from "@/app/types"

import Pill from "@/app/components/Pill"

import Image from "next/image"

export default function BookCard({ book }: BookCardProps) {
    return (
        <article className="h-full border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 space-y-2">
            <Image 
                src={book.image}
                alt={`Cover of ${book.name}`}
                width={300}
                height={300}
            />
            <h2 className="font-semibold text-lg">{book.name}</h2>
            <p className="text-gray-600">{book.author}</p>
            <Pill className="capitalize">{book.category}</Pill>
            <p className="text-sm text-gray-500">Likes: {book.likes.toLocaleString()}</p>
        </article>
    )
}