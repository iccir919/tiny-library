import type { BookCardProps } from "@/app/types"

import Pill from "@/app/components/Pill"
import { Heart } from "lucide-react"
import Image from "next/image"

export default function BookCard({ book }: BookCardProps) {
    return (
        <article className="h-full overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Image 
                className="w-full h-auto"
                src={book.image}
                alt={`Cover of ${book.name}`}
                width={300}
                height={300}
            />
            <div className="p-4 space-y-2">
                <h2 className="font-semibold text-lg">{book.name}</h2>
                <p className="text-gray-600">{book.author}</p>
                <Pill className="capitalize">{book.category}</Pill>
                <div className="flex items-center gap-1 text-gray-500">
                    <Heart 
                        size={16}
                    />
                    <p className="text-sm">{book.likes.toLocaleString()}</p>
                </div>
            </div>
        </article>
    )
}