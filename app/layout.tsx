import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/context/cart-context'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Pijama - Pyjamas Premium Confortables | Livraison Gratuite Maroc',
  description: 'Découvrez nos pyjamas luxueux et confortables de haute qualité. Livraison gratuite au Maroc. Paiement à la livraison. Commandez maintenant pour un confort premium.',
  keywords: 'pyjamas, pyjama été, pyjama luxe, confort, sommeil, Maroc, livraison gratuite',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://pijama.com',
    title: 'Pijama - Pyjamas Premium Confortables',
    description: 'Découvrez nos pyjamas luxueux et confortables avec livraison gratuite au Maroc.',
    images: [{
      url: '/images/hero-bg.jpg',
      width: 1200,
      height: 630,
      alt: 'Pijama Pyjamas Premium',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pijama - Pyjamas Premium Confortables',
    description: 'Découvrez nos pyjamas luxueux et confortables avec livraison gratuite au Maroc.',
    images: ['/images/hero-bg.jpg'],
  },
  alternates: {
    canonical: 'https://pijama.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
          <WhatsAppButton />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
