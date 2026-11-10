"use client"

import type { Book } from "@/app/types"

import { useState } from "react"

import Link from "next/link"
import Form from "next/form"
import { useRouter } from "next/navigation"



export default function SearchBox({ query, books }: { query?: string; books: Book[] }) {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState(query || "")
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(-1)

    const normalizedQuery: string = searchQuery.trim().toLowerCase()

    let matches: Book[]

    if (!normalizedQuery) {
        matches = []
    } else {
        matches = books
            .filter((book) =>
                book.name.toLowerCase().includes(normalizedQuery) 
                || book.author.toLowerCase().includes(normalizedQuery)
            )
            .slice(0, 3)
    }

    return (
        <div className="relative w-full md:w-auto">
            <Form className="flex items-center gap-2" action="/books">
                <input
                    id="query"
                    type="text"
                    name="query"
                    value={searchQuery}
                    onKeyDown={(event) => {
                        if (event.key === "ArrowDown") {
                            event.preventDefault()
                            setIsOpen(true)
                            setHighlightedIndex((index) =>
                                Math.min(index + 1, matches.length - 1)
                            )
                        } else if (event.key === "ArrowUp") {
                            event.preventDefault()
                            setHighlightedIndex((index) => Math.max(index - 1, -1))
                        } else if (event.key === "Enter") {
                            if (highlightedIndex >= 0 && matches[highlightedIndex]) {
                                event.preventDefault()
                                router.push(`/books/${matches[highlightedIndex].id}`)
                            }
                        } else if (event.key === "Escape") {
                            setIsOpen(false)
                            setHighlightedIndex(-1)
                        }
                    }}
                    onChange={(event) => {
                        setSearchQuery(event.target.value)
                        setIsOpen(true)
                        setHighlightedIndex(-1)
                    }} 
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => {
                        setIsOpen(false)
                        setHighlightedIndex(-1)
                    }}
                    placeholder="Search for a book"
                    className="w-full md:w-80 rounded-full border border-gray-300 px-4 py-2 text-sm"
                />
                <label htmlFor="query" className="sr-only">
                    Search for a book
                </label>
            </Form>
            {isOpen && matches.length > 0 && (
                <ul 
                    className="absolute z-10 mt-1 p-2 top-full left-0 right-0 rounded-lg border border-gray-200 bg-white shadow-lg"
                    onMouseDown={(e) => e.preventDefault()}
                >
                    {matches.map((book, index) => (
                        <li key={book.id}>
                            <Link 
                                href={`/books/${book.id}`}
                                className={`block p-2 hover:bg-gray-100 rounded text-sm ${
                                    index === highlightedIndex ? "bg-gray-100" : ""
                                }`}
                            >
                                {book.name} by {book.author}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}