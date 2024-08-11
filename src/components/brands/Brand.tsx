import Image from 'next/image'
import React from 'react'

const Brand = () => {
  const brands = [
    { path: '/nike.png' },
    { path: '/addidas.png' },
    { path: '/puma.png' },
    { path: '/fila.png' },
    { path: '/nb.png' },
  ]
  return (
    <div className='flex justify-center bg-primaryColor/20 py-24 gap-14'>
      {brands.map(({ path }, index) => (
        <Image
          key={index}
          alt='brand-logo'
          src={path}
          height={90}
          width={180}
        />
      ))}
    </div>
  )
}

export default Brand
