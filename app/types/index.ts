import type { ReactNode } from "react"

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

export type PillProps = {
    children: ReactNode,
    className?: string
}