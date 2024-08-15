import React from 'react'
import ItemCard from '../item-card/ItemCard'

const MarkerPlace = () => {
  const stocks = Array.from(Array(10).keys())
  return (
    <div className='flex-1 flex flex-wrap gap-5 pb-24'>
      {stocks.map((item, index) => {
        return <ItemCard id={String(item)} key={index} size='small' />
      })}
    </div>
  )
}

export default MarkerPlace
