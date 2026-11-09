import type { Metadata } from "next"
import type { LayoutProps } from "@/app/types"

import Navbar from "@/app/components/Navbar"

import "./globals.css"

import { Lato, Nunito_Sans } from "next/font/google"


const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: "--font-heading",
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap', 
})

export const metadata: Metadata = {
  title: {
    template: "%s - Tiny Library",
    default: "Tiny Library",
},
  description: "A small, curated catalogue of books.",
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} ${lato.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}