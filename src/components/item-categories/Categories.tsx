import React from 'react'

const Categories = () => {
  const categories = [
    'New Arrivals',
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
  return (
    <div className='py-2 mt-3'>
      <ul className='flex gap-8'>
        {categories.map((item, index) => (
          <li
            className='text-xs cursor-pointer hover:text-primaryColor'
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
