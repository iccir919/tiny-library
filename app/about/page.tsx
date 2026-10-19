import Image from "next/image"
import heroImage from "@/public/hero-image-square.png"

export default function AboutPage() {
    return (
        <div>
            <h1>Tiny Library - About Page</h1>
            <Image 
                src={heroImage} 
                alt="Tiny Library Hero Image" 
                width={1798} 
                height={1799} 
            />
        </div>
    )
}