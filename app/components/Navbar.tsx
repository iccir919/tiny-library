import Link from "next/link";
import Image from "next/image"
import logoImage from "@/public/tiny-library-logo.png"

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                <Image 
                    src={logoImage} 
                    alt="Tiny Library home" 
                />
            </Link>
            <Link href="/books">Books</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}