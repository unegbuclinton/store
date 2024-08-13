import React from 'react'
import Pricing from '../pricing/Pricing'
import Filter from '../filter/Filter'

const Sidebar = () => {
  return (
    <aside className='max-w-[310px] h-fit text-sm w-full bg-[#F9FAFB] text px-5 py-7'>
      <Pricing />
      <Filter />
    </aside>
  )
}

export default Sidebar
