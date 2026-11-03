import type { ReactNode } from "react"

// Keep in sync with app/data/categories.json
export type BookCategorySlug = 
    | "fiction"
    | "non-fiction"
    | "romance"
    | "fantasy"
    | "thriller"
    | "horror"
    | "historical"
    | "biography"
    | "self-help"

export type Category = {
    slug: BookCategorySlug,
    name: string,
    description: string
}

export type Book = {
    id: number,
    name: string,
    author: string,
    likes: number,
    image: string,
    category: string,
    dateAdded: string
}

export type RootLayoutProps = Readonly<{
    children: ReactNode
}>

export type BookDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

export type BookCardProps = {
    book: Book
}

export type BooksGridProps = {
    books: Book[]
}

export type PillProps = {
    children: ReactNode,
    className?: string
}