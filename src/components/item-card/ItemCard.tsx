import React from 'react'
import StoreIcon from '../storeIcon/StoreIcon'
import Image from 'next/image'

interface cardProp {
  size?: 'medium' | 'small'
}

const ItemCard: React.FC<cardProp> = ({ size }) => {
  const medium = 'max-w-[379px]'
  const small = 'max-w-[300px]'
  const mediumImgeSize = { width: 380, height: 240 }
  const smallImgeSize = { width: 280, height: 190 }
  return (
    <div
      className={`${
        size && size === 'medium'
          ? medium
          : size === 'small'
          ? small
          : 'max-w-[449px]'
      } h-full rounded-[10px] bg-primaryColor/30`}
    >
      <div className='flex justify-end px-5 pt-3.5'>
        <span className='cursor-pointer'>
          <StoreIcon iconName='cartIconLight' />
        </span>
      </div>
      <div className=' p-5 rounded-t-[10px]'>
        <Image
          alt='item-img'
          src={'/img.png'}
          width={
            size && size === 'medium'
              ? mediumImgeSize.width
              : size === 'small'
              ? smallImgeSize.width
              : 400
          }
          height={
            size && size === 'medium'
              ? mediumImgeSize.height
              : size === 'small'
              ? smallImgeSize.height
              : 220
          }
        />
      </div>
      <div className='bg-white rounded-t-[10px] py-8 px-5 text-dark'>
        <h3 className='text-dark/50 mb-2 font-bold'>Unisex</h3>
        <h4 className='font-medium text-lg'>Sketchers Don A5</h4>
        <p className='my-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex
          cumque porro magnam et velit dicta modi accusamus qui. Quos.
        </p>
        <p className='font-bold text-base'>N500,000</p>
        <span className='mt-2 flex gap-2 items-center font-medium'>
          {['1', '2', '3'].map((index) => (
            <StoreIcon key={index} iconName='ratingIcon' />
          ))}{' '}
          (45)
        </span>
      </div>
    </div>
  )
}

export default ItemCard
