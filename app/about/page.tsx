import Image from "next/image"
import Link from "next/link"

import { Layers, Globe, Flag } from "lucide-react"

import heroImage from "@/public/hero-image-square.png"

const features = [
    {
        icon: Layers,
        title: 'Curated, not crowded',
        description: 'Tiny Library keeps the catalogue intentionally small so every book feels like a recommendation.'
    },
    {
        icon: Globe,
        title: 'Easy to browse',
        description: 'Clear categories and simple descriptions make it quick to choose what you actually want to read next.'
    },
    {
        icon: Flag,
        title: 'Readers first',
        description: 'Every part of Tiny Library is designed to help you spend less time searching and more time reading.'
    }
]

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

            <section className="grid grid-cols-1 md:grid-cols-3 border-t md:divide-x border-gray-200 divide-gray-200 gap-6 md:gap-0 pt-8 mt-12">
                {features.map((feature) => {
                    const Icon = feature.icon
                    return (
                        <div key={feature.title} className="md:px-6">
                            <div className="flex items-center gap-4 mb-2">
                                <Icon className="w-6 h-6 text-gray-700" />
                                <h2 className="text-lg font-semibold text-gray-700">{feature.title}</h2>
                            </div>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    )
                })}
            </section>
            <section className="border-t border-gray-200 pt-8 my-12">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-700">Our ethos</h2>
                    <p className="text-gray-600 mt-4">
                        At Tiny Library, we believe a good book shouldn&apos;t be hard to find. Our ethos is to create a small, carefully curated space where every title earns its place on the shelf and readers can trust that anything they pick up is worth their time.
                    </p>
                    <hr className="w-36 mx-auto border-gray-300 my-6" />
                    <p className="text-gray-600 mt-4">
                        Instead of overwhelming you with thousands of options, Tiny Library focuses on a modest collection that feels personal and approachable. We want readers to feel like they&apos;ve stepped into a cosy, well-loved library where someone has already done the hard work of sorting through the noise.
                    </p>
                </div>
            </section>
        </main>
    )
}

