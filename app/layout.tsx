import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getPortfolioData } from '@/lib/data'
import ThemeProvider from '@/components/ThemeProvider'
import NavigationWrapper from '@/components/NavigationWrapper'

const inter = Inter({ subsets: ['latin'] })

// Generate metadata dynamically from data.json
export async function generateMetadata(): Promise<Metadata> {
  try {
    const portfolioData = await getPortfolioData();
    const personal = portfolioData.personal;
    const metadata = portfolioData.metadata;
    
    return {
      metadataBase: new URL(metadata.websiteUrl),
      title: `${personal.name} - ${personal.title}`,
      description: personal.bio,
      keywords: [
        'developer', 
        'full stack', 
        'react', 
        'next.js', 
        'typescript', 
        'portfolio',
        personal.title.toLowerCase(),
        ...personal.topSkills.map(skill => skill.toLowerCase())
      ],
      authors: [{ name: personal.name }],
      creator: personal.name,
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: metadata.websiteUrl,
        title: `${personal.name} - ${personal.title}`,
        description: personal.bio,
        siteName: metadata.siteName,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${personal.name} - ${personal.title}`,
        description: personal.bio,
      },
      robots: {
        index: true,
        follow: true,
      },
    }
  } catch (error) {
    // Fallback metadata if data.json can't be loaded
    return {
      title: 'Portfolio - Developer',
      description: 'Professional developer portfolio',
      keywords: ['developer', 'portfolio'],
      authors: [{ name: 'Developer' }],
      creator: 'Developer',
      openGraph: {
        type: 'website',
        title: 'Portfolio - Developer',
        description: 'Professional developer portfolio',
        siteName: 'Developer Portfolio',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Portfolio - Developer',
        description: 'Professional developer portfolio',
      },
      robots: {
        index: true,
        follow: true,
      },
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var finalTheme = theme || systemTheme;
                  
                  if (finalTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <NavigationWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
