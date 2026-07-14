import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Pinyon_Script } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

// Premium structural Google Fonts
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk' 
})

// Elegant Calligraphy fallback matching Bickham Script's geometry
const pinyonScript = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pinyon'
})

export const metadata: Metadata = {
  title: 'Abigail Biegalska | Web Designer & Developer',
  description: 'I create websites that help businesses grow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${spaceGrotesk.variable} ${pinyonScript.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body selection:bg-accent selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}