import React from 'react'
import CheckboxList from '../check-list/CheckList'
import { brands, cat, size } from '@/lib/reuseableData'

const Filter = () => {
  return (
    <div>
      <h4 className='text-base font-bold mb-8 mt-10'>Filters</h4>
      <CheckboxList items={cat} />
      <div>
        <h4 className='text-base font-bold my-8'>Brands</h4>
        <CheckboxList items={brands} />
      </div>
      <div>
        <h4 className='text-base font-bold my-8'>Size</h4>
        <CheckboxList items={size} />
      </div>
    </div>
  )
}

export default Filter
