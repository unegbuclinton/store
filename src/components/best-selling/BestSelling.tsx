import React from 'react'
import StoreIcon from '../storeIcon/StoreIcon'
import ItemCard from '../item-card/ItemCard'
import Pagination from '../pagination/Pagination'

const BestSelling = () => {
  return (
    <div className='my-16 px-20'>
      <div className='flex items-center justify-between mb-12'>
        <h3 className='font-semibold text-3xl text-dark relative bar pl-[35px]'>
          Best selling
        </h3>
        <h3 className='flex gap-2 items-center font-bold text-2xl text-primaryColor cursor-pointer'>
          See All
          <span>
            <StoreIcon iconName='arrowRightMedium' />
          </span>
        </h3>
      </div>
      <div className='flex gap-8 justify-center mb-8'>
        {['1', '2', '3'].map((index) => (
          <ItemCard key={index} size='medium' />
        ))}
      </div>
      <div className='flex justify-center'>
        <Pagination />
      </div>
    </div>
  )
}

export default BestSelling
