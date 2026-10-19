import Image from "next/image"
import heroImage from "@/public/hero-image.png"

export default function Home() {
  return (
    <div>
      <h1>Tiny Library - Home</h1>
      <Image 
        priority
        src={heroImage} 
        alt="Hero Image for Tiny Library, a view of a beach" 
      />
    </div>
  );  
}
