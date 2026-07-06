import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Sora } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700'],
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Smart Pack — Empaques que hacen que tu marca sea inolvidable',
  description:
    'Smart Pack diseña empaques creativos y personalizados para pequeños negocios, emprendimientos de comida, regalos, cosmética y productos artesanales.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2F9E72',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${sora.variable} bg-background`} suppressHydrationWarning>
      <head>
        <script
          // Pre-paint script: applies the saved theme before React hydrates,
          // so the page never flashes white when the user prefers dark.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark', t==='dark' || (!t && d));}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}

// © aivo discreto
