'use client'
import React, { useEffect, useState } from 'react'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselSlides = [
    { url: '/login-img1.jpg' },
    { url: '/login-img2.jpg' },
    { url: '/login-img3.jpg' },
  ]
  const delay = 6000
  useEffect(() => {
    const timer = setTimeout(
      () =>
        setCurrentIndex((prev) =>
          prev === carouselSlides.length - 1 ? 0 : prev + 1
        ),
      delay
    )
    return () => clearTimeout(timer)
  }, [currentIndex])
  const goToIndex = (slideIndex: number) => setCurrentIndex(slideIndex)

  return (
    <div className='w-[650px] '>
      <div
        style={{ backgroundImage: `url(${carouselSlides[currentIndex].url})` }}
        className='h-full bg-cover bg-center relative'
      >
        <div>
          <div className='flex top-4 justify-center py-2'>
            {carouselSlides.map((_, slideIndex) => {
              return (
                <span
                  key={slideIndex}
                  className={`${
                    currentIndex === slideIndex ? 'bg-white' : ''
                  } block w-2 h-2 rounded-full cursor-pointer`}
                  onClick={() => goToIndex(slideIndex)}
                />
              )
            })}
          </div>
          <p className='font-bold max-w-[520px] mx-auto'>
            Looking for exclusive{' '}
            <span className='text-primaryColor'>kicks</span> and what <br />{' '}
            will match your
            <span className='text-primaryColor'>aesthetics?</span>. We’ve got
            you!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Carousel
