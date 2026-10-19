import type { Book } from "@/app/types"

import booksData from "@/app/data/books.json"

const books: Book[] = booksData

export async function getAllBooks(): Promise<Book[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate a delay
    return books
}