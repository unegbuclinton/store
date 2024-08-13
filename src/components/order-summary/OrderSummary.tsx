import React from 'react'
import InputField from '../input/InputField'
import Button from '../button/Button'

const OrderSummary = () => {
  return (
    <div className='mt-20 text-sm'>
      <div className='border border-[#EBEBEB] rounded-[10px] px-12 py-6 w-[520px]'>
        <h3 className='text-lg font-semibold mb-10'>Order Summary</h3>
        <div className='mb-6'>
          <p className='mb-2'>Discount code / Promo code</p>
          <InputField type='number' onChange={() => null} placeholder='Code' />
        </div>
        <div className='mb-6'>
          <p className='mb-2'>Your coupon code</p>
          <div className='relative flex items-center'>
            <InputField
              containerStyles='flex-1'
              type='number'
              onChange={() => null}
              placeholder='Your coupon code '
            />
            <span className='absolute text-primaryColor font-bold right-5 z-10 cursor-pointer'>
              Apply
            </span>
          </div>
        </div>

        <div className='flex text-lg mb-4 justify-between items-center'>
          <p>Subtotal</p>
          <p>$2347</p>
        </div>
        <div className='flex text-lg mb-4 justify-between items-center'>
          <p className='text-grey/65'>Estimated Tax</p>
          <p>$50</p>
        </div>
        <div className='flex text-lg mb-4 justify-between items-center'>
          <p className='text-grey/65'>Coupon Applied</p>
          <p>$2347</p>
        </div>
        <div className='flex text-lg mb-4 justify-between items-center'>
          <p className='text-grey/65'>Discount</p>
          <p>$2347</p>
        </div>
        <div className='flex text-lg mb-4 justify-between items-center'>
          <p>Total</p>
          <p>$2347</p>
        </div>
        <Button type='button' onClick={() => null}>
          Checkout
        </Button>
      </div>
    </div>
  )
}

export default OrderSummary
