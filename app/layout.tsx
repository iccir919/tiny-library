import type { Metadata } from "next"
import type { ReactNode } from "react"
import Navbar from "./components/Navbar"

import "./globals.css"

export const metadata: Metadata = {
  title: "Tiny Library",
  description: "A small, curated catalogue of books.",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Navbar />
        </nav>
        {children}
      </body>
    </html>
  )
}