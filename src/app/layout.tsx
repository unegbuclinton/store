import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'

const inter = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fly kick',
  description:
    'Buy all your fashion wears online, at affordable prices. All at the comfort of your home.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
