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
    id: number,
    slug: BookCategorySlug,
    label: string
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

export type LayoutProps = Readonly<{
    children: ReactNode
}>


export type CategoryPageProps = {
    params: Promise<{
        categoryName: string
    }>
}

export type NavLinkProps = {
    href: string,
    children: ReactNode
}

export type BooksPageProps = {
    searchParams: Promise<{
        query?: string
    }>
}

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

export type ButtonLinkProps = {
    href: string,
    children: ReactNode
}

export type EyebrowProps = {
    children: ReactNode,
    className?: string
}