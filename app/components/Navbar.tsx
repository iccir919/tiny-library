import Link from "next/link";
import Image from "next/image"
import logoImage from "@/public/tiny-library-logo.png"
import NavLink from "@/app/components/NavLink"

export default function Navbar() {
    return (
        <nav>
            <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
                <Link href="/">
                    <Image 
                        className="h-24 w-auto"
                        src={logoImage} 
                        alt="Tiny Library home" 
                    />
                </Link>
                <div className="flex gap-6 text-sm tracking-wide uppercase">
                    <NavLink href="/books">Books</NavLink>
                    <NavLink href="/about">About</NavLink>
                </div>
            </div>
        </nav>
    )
}