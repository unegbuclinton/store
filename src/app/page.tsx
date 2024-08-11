import BestSelling from '@/components/best-selling/BestSelling'
import Brand from '@/components/brands/Brand'
import Footer from '@/components/footer/Footer'
import HeroSection from '@/components/hero-section/HeroSection'
import Navbar from '@/components/navbar/Navbar'
import NewArrival from '@/components/new-arrival/NewArrival'
import StoreIcon from '@/components/storeIcon/StoreIcon'
import SummerSales from '@/components/summer-sale/SummerSales'

export default function Home() {
  return (
    <main className='pt-10 '>
      <div className='px-20'>
        <Navbar />
        <HeroSection />
      </div>
      <div className='relative h-36'>
        <span className='absolute left-0'>
          <StoreIcon iconName='dot2' />
        </span>
        <span className='absolute right-0'>
          <StoreIcon iconName='dot3' />
        </span>
      </div>
      <Brand />
      <div className='px-20 pt-16'>
        <NewArrival />
      </div>

      <SummerSales />
      <BestSelling />

      <Footer />
    </main>
  )
}
