import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import Carousel from '@/components/carousel/Carousel'
import StoreIcon from '@/components/storeIcon/StoreIcon'

const inter = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fly kick authentication',
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
          <div className='flex-1 flex justify-center flex-col items-center overflow-auto pt-36 pb-20'>
            <span className='block mb-20'>
              <StoreIcon iconName='authLogo' />
            </span>
            <div className='max-w-[560px] w-full'>{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
