import Eyebrow from "@/app/components/Eyebrow"
import ButtonLink from "@/app/components/ButtonLink"

import Image from "next/image"

import heroImage from "@/public/hero-image.png"

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <Eyebrow>Browse Books</Eyebrow>
          <h1 className="text-5xl font-semibold text-gray-700 mt-2">Find your next favourite book</h1>
          <p className="text-gray-600 mt-4">
            Tiny Library is a cosy corner of the web where readers discover hand-picked titles across every genre, from timeless classics to hidden indie gems.
          </p>
          <div className="mt-6">
            <ButtonLink href="/books">
              Browse Books
            </ButtonLink>
          </div>
        </div>
        <Image 
        priority
        src={heroImage} 
        alt="A view of a beach, looking out over the coast, which is flat and sandy. The sky is blue with a few clouds."
        className="w-full md:w-2/5 h-auto"
        />
      </div>
    </main>
  );  
}
