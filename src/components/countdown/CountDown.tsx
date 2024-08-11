'use client'
import React from 'react'
import Button from '../button/Button'
import useCountdownTimer from '@/lib/helperFunctions'

const CountDown = () => {
  const preciseEndDate = new Date('2024-12-26T00:00:00').getTime()

  const { days, hours, minutes, seconds } = useCountdownTimer(preciseEndDate)

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`
  }

  const formattedDays = formatTime(days)
  const formattedHours = formatTime(hours)
  const formattedMinutes = formatTime(minutes)
  const formattedSeconds = formatTime(seconds)
  return (
    <div>
      <h2 className='text-[36px] mb-8'>Summer sales</h2>
      <div className='flex gap-4 mb-16'>
        <div className='flex flex-col items-center'>
          <p className='mb-2 font-medium text-primaryColor text-[36px] w-9'>
            {formattedDays}
          </p>
          <p className='text-primaryColor text-sm'>Days</p>
        </div>
        <p className='font-medium text-[36px] text-primaryColor'>:</p>
        <div className='flex flex-col items-center'>
          <p className='mb-2 font-medium text-primaryColor text-[36px] w-9'>
            {formattedHours}
          </p>
          <p className='text-primaryColor text-sm'>Hours</p>
        </div>
        <p className='font-medium text-[36px] text-primaryColor'>:</p>
        <div className='flex flex-col items-center'>
          <p className='mb-2 font-medium text-primaryColor text-[36px] w-9'>
            {formattedMinutes}
          </p>
          <p className='text-primaryColor text-sm'>Mins</p>
        </div>
        <p className='font-medium text-[36px] text-primaryColor'>:</p>
        <div className='flex flex-col items-center'>
          <p className='mb-2 font-medium text-primaryColor text-[36px] w-9'>
            {formattedSeconds}
          </p>
          <p className='text-primaryColor text-sm'>Secs</p>
        </div>
      </div>

      <Button type='button' onClick={() => null}>
        Shop Now
      </Button>
    </div>
  )
}

export default CountDown
