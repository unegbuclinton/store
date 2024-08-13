'use client'
import React from 'react'
import MultiRangeSlider from '../range-slider/RangeSlider'

const Pricing = () => {
  const handleSliderChange = (values: { min: number; max: number }) => {
    console.log('Slider values:', values)
  }
  return (
    <div>
      <h4 className='text-base font-bold mb-4'>Prices</h4>
      <p className='flex justify-between'>
        <span className='text-grey/50'>Range</span>
        <span>$120-$300</span>
      </p>
      <MultiRangeSlider min={0} max={200} onChange={handleSliderChange} />
    </div>
  )
}

export default Pricing
