import Image from "next/image"
import Link from "next/link"

import heroImage from "@/public/hero-image-square.png"

export default function AboutPage() {
    return (
        <main className="max-w-6xl mx-auto p-4">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
                <Image
                    priority 
                    className="w-full md:w-2/5 h-auto"
                    src={heroImage} 
                    alt="A view of a beach, looking out over the coast, which is flat and sandy. The sky is blue with a few clouds." 
                />
                <div className="flex-1">
                    <p className="text-sm uppercase tracking-wide text-gray-700 mt-6 md:mt-0">About Tiny Library</p>
                    <h1 className="text-4xl font-semibold text-gray-700 mt-2">Small shelf, big impact</h1>
                    <p className="text-gray-600 mt-4">
                        Tiny Library started as a simple idea: make it easier for curious readers to actually find books they&apos;ll love, not just scroll endless lists. Every title here is chosen with care, not algorithms.
                    </p>
                    <div className="text-center mt-6">
                        <Link href="/about/contact" className="inline-block uppercase border border-black text-black text-sm tracking-wide px-4 py-2 hover:bg-black hover:text-white transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}