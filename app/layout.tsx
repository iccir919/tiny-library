import type { Metadata } from "next"
import type { RootLayoutProps } from "@/app/types"

import Navbar from "@/app/components/Navbar"

import "./globals.css"

import { Albert_Sans, Montserrat_Alternates } from "next/font/google"


const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Tiny Library",
  description: "A small, curated catalogue of books.",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}