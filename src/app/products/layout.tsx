import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'

const inter = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fly kick products',
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
        <div className='pt-10 px-20'>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
