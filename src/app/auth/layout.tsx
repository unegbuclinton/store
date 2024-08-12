import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Carousel from '@/components/carousel/Carousel'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fly kick auth',
  description:
    'Sign up to buy all your fashion wears online, at affordable prices. All at the comfort of your home.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex h-screen'>
          <Carousel />
          {children}
        </div>
      </body>
    </html>
  )
}
