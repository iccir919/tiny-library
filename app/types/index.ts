import type { ReactNode } from "react"

export type RootLayoutProps = Readonly<{
    children: ReactNode
}>

export type BookDetailPageProps = {
    params: Promise<{
        id: string
    }>
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