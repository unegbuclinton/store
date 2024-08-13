'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import StoreIcon from '../storeIcon/StoreIcon'

const CartItem = ({ onCancel }: { onCancel: () => void }) => {
  const [itemCount, setItemCount] = useState(1)

  const increaseCount = () => {
    setItemCount((prev) => prev + 1)
  }

  const decreaseCount = () => {
    if (itemCount === 1) return
    setItemCount((prev) => prev - 1)
  }

  return (
    <div className='max-w-[590px] h-fit flex-1 w-full flex items-center justify-between pb-10 border-b mb-10'>
      <Image
        alt='item-img'
        src={'/cartItem.png'}
        width={90}
        height={90}
        className='mr-4'
      />
      <div>
        <div>
          <p className='text-lg font-semibold'>Nike Explorer</p>
          <p className='text-sm font-normal mt-2'>#25139526913984</p>
        </div>
      </div>

      <div className='flex items-center gap-6'>
        <div className='flex items-center gap-2'>
          <span className='cursor-pointer' onClick={decreaseCount}>
            <StoreIcon iconName='minus' />
          </span>
          <p className='rounded-md border px-4 py-2'>{itemCount}</p>
          <span className='cursor-pointer' onClick={increaseCount}>
            <StoreIcon iconName='plusIcon' />
          </span>
        </div>
        <p>$542</p>
        <span className='cursor-pointer' onClick={onCancel}>
          <StoreIcon iconName='cancelIcon' />
        </span>
      </div>
    </div>
  )
}

export default CartItem
