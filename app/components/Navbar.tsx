import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Tiny Library</Link>
            <Link href="/books">Books</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}