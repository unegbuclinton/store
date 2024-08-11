import React from 'react'
import CountDown from '../countdown/CountDown'
import ItemCard from '../item-card/ItemCard'

const SummerSales = () => {
  return (
    <div className='bg-offWhite/75 px-20 py-24 flex justify-between items-center'>
      <CountDown />
      <div className='flex gap-8 justify-center mb-8'>
        {['1', '2'].map((index) => (
          <ItemCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default SummerSales
