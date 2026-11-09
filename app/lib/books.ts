import type { Book, Category } from "@/app/types"

import { cache } from "react"

import booksData from "@/app/data/books.json"
import categoriesData from "@/app/data/categories.json"

const books: Book[] = booksData
// JSON slugs are inferred as string; categories.json is kept in sync with BookCategorySlug by hand
const categories = categoriesData as Category[]

export async function getAllBooks(): Promise<Book[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate a delay
    return books
}

export async function searchBooks(query: string): Promise<Book[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate a delay


    let normalizedQuery = query.trim()
    
    if (!normalizedQuery) return books

    normalizedQuery = normalizedQuery.toLowerCase()

    const results = books.filter((book) =>
        book.name.toLowerCase().includes(normalizedQuery) ||
        book.author.toLowerCase().includes(normalizedQuery)
    )

    return results}

export const getBookById = cache(async (id: string | number): Promise<Book> => {

    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate a delay

    const numericId = Number(id)
    const book = books.find((b) => b.id === numericId)
    if (!book) {
        throw new Error(`Book with ID ${id} not found`)
    }
    return book
})

export async function getAllCategories(): Promise<Category[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate a delay
    return categories
}

export const getCategoryBySlug = cache(async (slug: string): Promise<Category> => {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate a delay
    const category = categories.find((c) => c.slug === slug)
    if (!category) {
        throw new Error(`Category with slug ${slug} not found`)
    }
    return category
})

export async function getBooksByCategory(slug: string): Promise<Book[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate a delay

    const booksInCategory = books.filter((b) => b.category === slug)

    return booksInCategory
}