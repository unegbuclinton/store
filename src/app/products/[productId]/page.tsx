'use client'

import Button from '@/components/button/Button'
import StoreIcon from '@/components/storeIcon/StoreIcon'
import Variant from '@/components/variant/Variant'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Product({ params }: { params: { productId: string } }) {
  const { productId } = params
  console.log(productId)

  const [activeColor, setActiveColor] = useState('')
  const [activeVariant, setActiveVariant] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const img = [
    '/product-img.png',
    '/product-1.png',
    '/product-2.png',
    '/product-3.png',
  ]

  const nextVariant = () => {
    if (activeVariant !== img.length - 1) {
      const nextValue = activeVariant + 1

      setActiveVariant(nextValue)
    } else {
      setActiveVariant(0)
    }
  }
  const prevVariant = () => {
    if (activeVariant !== 0) {
      const prevValue = activeVariant - 1
      setActiveVariant(prevValue)
    } else {
      return
    }
  }

  const increase = () => {
    if (quantity < 10) {
      return setQuantity((prev) => prev + 1)
    }
    return
  }
  const decrease = () => {
    if (quantity > 1) {
      return setQuantity((prev) => prev - 1)
    }
    return
  }
  return (
    <div className='px-20 py-12'>
      <div className='flex items-center gap-1 justify-end'>
        <p className='text-xl font-bold flex'>{activeVariant + 1}</p>/
        <p className='text-grey/35 text-base font-medium'>{img.length}</p>
      </div>
      <div className='flex justify-end gap-10 mt-9'>
        <button onClick={prevVariant} className='cursor-pointer'>
          <StoreIcon iconName='arrowLeft' />
        </button>
        <button onClick={nextVariant} className='cursor-pointer'>
          <StoreIcon iconName='arrowRight' />
        </button>
      </div>

      <div className='flex gap-32'>
        <div>
          <div className='max-w-[545px]'>
            <h3 className='text-[48px] font-bold mb-8'>Nike Explorer</h3>
            <div className='flex text-base justify-between pr-7 items-center mb-12'>
              <p className='font-bold text-xl'>$143.99</p>
              <div className='flex items-center gap-3'>
                <p className='flex gap-2'>
                  {['1', '2', '3', '4'].map((index) => (
                    <StoreIcon iconName='ratingIcon' key={index} />
                  ))}
                </p>
                <div>
                  <div className='flex items-center gap-1 text-base font-normal'>
                    <p className='flex'>4.6</p>/
                    <p className='text-grey/35 text-base'>5.0</p>{' '}
                    <span className='text-grey'>(556)</span>
                  </div>
                </div>
              </div>
            </div>
            <p className='text-base mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{' '}
            </p>

            <p className='text-primaryColor font-normal flex items-center gap-3 mb-8 cursor-pointer'>
              <StoreIcon iconName='favoriteIcon' /> Add to Wishlist
            </p>

            <div className='flex  items-center gap-3 mb-10'>
              {['#F9E31F', '#58737D', '#545454', '#CBA5A5'].map(
                (color, index) => (
                  <p
                    key={index}
                    style={{ background: color }}
                    onClick={() => setActiveColor(color)}
                    className={`w-6 h-6 rounded-full cursor-pointer ${
                      activeColor === color ? 'border-[5px] border-grey/20' : ''
                    }`}
                  ></p>
                )
              )}
            </div>
            <div className='flex gap-8 items-center mb-10'>
              <div className='flex gap-10 py-[6px] px-5 rounded-lg border border-dark w-fit'>
                <button onClick={decrease}>
                  <StoreIcon iconName='minus' />
                </button>
                <p className='w-[20px]'>{quantity}</p>
                <button onClick={increase}>
                  <StoreIcon iconName='plusIcon' />
                </button>
              </div>
              <Button type='button'>Add to Cart</Button>
            </div>
            <p className='text-xl'>Free 3-5 days shipping</p>
          </div>
        </div>
        <div>
          <div className='h-[650px]'>
            <Image
              alt='product'
              src={img[activeVariant]}
              width={580}
              height={612}
            />
          </div>
          <div className='flex gap-8'>
            {img.map((value, index) => (
              <Variant
                key={index}
                src={value}
                active={activeVariant === index}
                onClick={() => setActiveVariant(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
