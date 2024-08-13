'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react'

interface MultiRangeSliderProps {
  min?: number
  max?: number
  onChange?: (values: { min: number; max: number }) => void
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({
  min = 0,
  max = 100,
  onChange,
}) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const sliderRef = useRef<HTMLDivElement>(null)

  const calcProgressWidth = useCallback(() => {
    if (sliderRef.current) {
      return ((maxVal - minVal) / 100) * sliderRef.current.offsetWidth
    }
    return 0
  }, [minVal, maxVal])

  const calcProgressLeft = useCallback(() => {
    if (sliderRef.current) {
      return (minVal / 100) * sliderRef.current.offsetWidth
    }
    return 0
  }, [minVal])

  useEffect(() => {
    const handleResize = () => {
      setMinVal((prevMin) => prevMin)
      setMaxVal((prevMax) => prevMax)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (onChange) {
      onChange({ min: minVal, max: maxVal })
    }
  }, [minVal, maxVal, onChange])

  return (
    <div className='relative w-full h-6 mt-10 mx-auto' ref={sliderRef}>
      <div className='absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-300'></div>
      <div
        className='absolute top-1/2 -translate-y-1/2 h-1 bg-blue-500'
        style={{
          width: `${calcProgressWidth()}px`,
          left: `${calcProgressLeft()}px`,
        }}
      ></div>
      <input
        type='range'
        min='0'
        max='100'
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1)
          setMinVal(value)
        }}
        className='absolute w-full h-1 bg-transparent'
        style={{
          zIndex: 3,
          pointerEvents: 'auto',
          left: 0,
        }}
      />
      <input
        type='range'
        min='0'
        max='100'
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1)
          setMaxVal(value)
        }}
        className='absolute w-full h-1 bg-transparent'
        style={{
          zIndex: 4,
          pointerEvents: 'auto',
          left: 0,
        }}
      />
      <div
        className='absolute w-5 h-5 bg-blue-500 rounded-full cursor-pointer'
        style={{
          top: '50%',
          transform: 'translate(-50%, -50%)',
          left: `${(minVal / 100) * (sliderRef.current?.offsetWidth || 0)}px`,
          zIndex: 5,
        }}
      ></div>
      <div
        className='absolute w-5 h-5 bg-blue-500 rounded-full cursor-pointer'
        style={{
          top: '50%',
          transform: 'translate(-50%, -50%)',
          left: `${(maxVal / 100) * (sliderRef.current?.offsetWidth || 0)}px`,
          zIndex: 5,
        }}
      ></div>
    </div>
  )
}

export default MultiRangeSlider
