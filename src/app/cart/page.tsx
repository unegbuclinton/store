'use client'
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import CartItem from '@/components/cart-item/CartItem'
import OrderSummary from '@/components/order-summary/OrderSummary'

const Cart = () => {
  const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '12']

  const [items, setItems] = useState<string[]>(data)

  const onCancel = (index: string) => {
    const newItems = items.filter((item) => item !== index)
    setItems(newItems)
  }
  return (
    <div className='py-8 px-20'>
      <Navbar />
      <div className='flex w-full justify-center items-start gap-24'>
        <div className='mt-24 pt-10'>
          <h2 className='font-bold text-2xl'>Shopping Cart</h2>
          {items.map((value, index) => (
            <CartItem key={index} onCancel={() => onCancel(value)} />
          ))}
        </div>
        <div className='sticky top-1'>
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

export default Cart
