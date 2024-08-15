import React from 'react'

export default function Product({ params }: { params: { productId: string } }) {
  const { productId } = params
  console.log(productId)
  return (
    <div>
      <p className='text-lg font-bold text-offWhite/25'>
        <span className='text-2xl text-dark'>01</span>/05
      </p>
    </div>
  )
}
