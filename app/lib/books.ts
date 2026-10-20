import type { Book } from "@/app/types"

import booksData from "@/app/data/books.json"

const books: Book[] = booksData

export async function getAllBooks(): Promise<Book[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate a delay
    return books
}

export async function getBookById(id: string | number): Promise<Book> {

    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate a delay

    const numericId = Number(id)
    const book = books.find((b) => b.id === numericId)
    if (!book) {
        throw new Error(`Book with ID ${id} not found`)
    }
    return book

}