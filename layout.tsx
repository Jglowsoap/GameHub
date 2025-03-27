import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GameHub - Play Your Favorite Games",
  description: "A collection of free online games to play in your browser",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        {/* Header Banner */}
        <div className="header-banner">
          This website gives you access to unblocked games. Shoutout to Watchdocumentaries and Nintendoboi (for now)
        </div>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="content">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
