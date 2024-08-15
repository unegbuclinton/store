'use client'
import React, { useEffect, useState } from 'react'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const carouselSlides = [
    { url: '/logo-img-1.jpg' },
    { url: '/logo-img-2.jpg' },
    { url: '/logo-img-3.jpg' },
    { url: '/logo-img-4.jpg' },
    { url: '/logo-img-5.jpg' },
  ]

  const delay = 10000

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === carouselSlides.length - 1 ? 0 : prev + 1
        )
      }, 500)
    }, delay)

    return () => clearTimeout(timer)
  }, [currentIndex])

  const goToIndex = (slideIndex: number) => {
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex(slideIndex)
    }, 500)
  }

  useEffect(() => {
    if (animating) {
      const animTimer = setTimeout(() => setAnimating(false), 500)
      return () => clearTimeout(animTimer)
    }
  }, [animating])

  return (
    <div className='w-full md:w-[650px] overlay'>
      <div className='relative h-full min-h-screen min-w-full'>
        <div
          className={`bg-cover bg-center transition-all duration-500 ease-in-out ${
            animating
              ? 'opacity-0 translate-x-[-100%]'
              : 'opacity-100 translate-x-0'
          } absolute inset-0 `}
          style={{
            backgroundImage: `url(${carouselSlides[currentIndex].url})`,
          }}
          role='img'
          aria-label={`Slide ${currentIndex + 1}`}
        >
          <div className='w-full mb-20 flex items-end h-full z-[1]'>
            <div className='w-full'>
              <div className='flex top-4 justify-center py-2 gap-2'>
                {carouselSlides.map((_, slideIndex) => (
                  <span
                    key={slideIndex}
                    className={`${
                      currentIndex === slideIndex
                        ? 'bg-primaryColor'
                        : 'bg-white'
                    } block w-2 h-2 rounded-full cursor-pointer`}
                    onClick={() => goToIndex(slideIndex)}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                  />
                ))}
              </div>
              <p className='font-bold max-w-[520px] mx-auto my-0 text-white text-center mb-20 '>
                Looking for exclusive{' '}
                <span className='text-primaryColor'>kicks</span> and what <br />{' '}
                will match your{' '}
                <span className='text-primaryColor'>aesthetics?</span> We’ve got
                you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
