import Image from 'next/image'
import React from 'react'

const Brand = () => {
  const brands = [
    { path: '/nike.png' },
    { path: '/adidas.png' },
    { path: '/puma.png' },
    { path: '/fila.png' },
    { path: '/newbalance.png' },
  ]
  return (
    <div className='flex justify-evenly bg-offWhite/75 py-10 gap-14 mb-32'>
      {brands.map(({ path }, index) => (
        <Image key={index} alt='brand-logo' src={path} height={60} width={60} />
      ))}
    </div>
  )
}

export default Brand
