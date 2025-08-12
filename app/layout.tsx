import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Johnson - Full Stack Developer',
  description: 'Passionate full-stack developer creating exceptional digital experiences with modern technologies.',
  keywords: ['developer', 'full stack', 'react', 'next.js', 'typescript', 'portfolio'],
  authors: [{ name: 'Alex Johnson' }],
  creator: 'Alex Johnson',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexjohnson.dev',
    title: 'Alex Johnson - Full Stack Developer',
    description: 'Passionate full-stack developer creating exceptional digital experiences.',
    siteName: 'Alex Johnson Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Johnson - Full Stack Developer',
    description: 'Passionate full-stack developer creating exceptional digital experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
