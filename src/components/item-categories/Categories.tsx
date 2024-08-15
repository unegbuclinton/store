'use client'
import React, { useState } from 'react'

const Categories = () => {
  const categories = [
    'New Arrivals',
    '#Fresh',
    'Sneakers',
    'Oxfords',
    'Brougues',
    'Chelsea boot',
    'Trainers',
    'Loafers',
    'Boots',
    'Heels',
    'Palm',
    'Sandals',
  ]

  const [active, setActive] = useState('')
  return (
    <div className='py-2 mt-3'>
      <ul className='flex gap-8'>
        {categories.map((item, index) => (
          <li
            className={`text-sm cursor-pointer hover:text-primaryColor py-1 px-2 rounded-[10px] font-semibold ${
              active === item
                ? 'bg-primaryColor text-white hover:text-white'
                : ''
            } `}
            onClick={() => setActive(item)}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
