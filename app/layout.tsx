import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { LenisProvider } from './providers'
import CustomCursor from '@/components/ui/CustomCursor'
import Preloader from '@/components/ui/Preloader'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Ugra Creation | Premium Interior Design Studio',
  description: 'Ugra Creation - Spaces that hold meaning. Premium interior design studio based in Noida, Uttar Pradesh, India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <LenisProvider>
          <Preloader />
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
