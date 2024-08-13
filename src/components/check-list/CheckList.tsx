'use client'
import React, { useState } from 'react'

interface CheckboxListProps {
  items: string[]
}

const CheckboxList: React.FC<CheckboxListProps> = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const handleCheckboxChange = (item: string) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(item)
        ? prevCheckedItems.filter((i) => i !== item)
        : [...prevCheckedItems, item]
    )
  }

  return (
    <div className='flex flex-col space-y-3'>
      {items.map((item) => (
        <label
          key={item}
          className='flex items-center space-x-2 cursor-pointer w-fit'
        >
          <input
            type='checkbox'
            className='form-checkbox text-blue-600 rounded'
            checked={checkedItems.includes(item)}
            onChange={() => handleCheckboxChange(item)}
          />
          <span className='text-gray-700'>{item}</span>
        </label>
      ))}
    </div>
  )
}

export default CheckboxList
