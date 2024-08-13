import Footer from '@/components/footer/Footer'
import Categories from '@/components/item-categories/Categories'
import MarkerPlace from '@/components/market-place/MarkerPlace'
import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import StoreIcon from '@/components/storeIcon/StoreIcon'
import React from 'react'

const Dashboard = () => {
  return (
    <main className='text-sm'>
      <div className='py-10 px-20'>
        <Navbar />
        <Categories />
      </div>
      {/* <div className='bg-[#111827] text-white py-4 pl-20 mb-4'>
        <h3 className='text-base mb-4'>Clearance sales</h3>
        <p className='text-sm '>
          Slash Sales begins in April. Get up to 80% Discount on all products
          Read More
        </p>
      </div> */}

      <div className='px-20'>
        <div className='flex justify-between my-6'>
          <p>Showing 1 - 20 out of 2,356 Products</p>

          <p className='text-[#6B7280] flex items-center gap-1'>
            Sort by:{' '}
            <span className='flex items-center font-semibold text-dark cursor-pointer'>
              New Arrival <StoreIcon iconName='arrowDown' />
            </span>
          </p>
        </div>

        <div className='flex gap-7'>
          <Sidebar />
          <MarkerPlace />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Dashboard
