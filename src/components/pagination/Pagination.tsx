'use client'

import React, { useState } from 'react'

const Pagination = () => {
  const totalPages = 10
  const [currentPage, setCurrentPage] = useState(1)

  const handleClick = (page: number) => {
    setCurrentPage(page)
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div>
      <nav
        className='isolate inline-flex -space-x-px rounded-md shadow-sm'
        aria-label='Pagination'
      >
        <button className='relative inline-flex items-center rounded-l-md px-2 py-2 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
          <span className='sr-only'>Previous</span>
          <svg
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fill-rule='evenodd'
              d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
              clip-rule='evenodd'
            />
          </svg>
        </button>
        <button
          aria-current='page'
          className='relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-dark rounded-lg focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          1
        </button>
        <button className='relative inline-flex items-center px-4 py-2 text-sm font-semibold  bg-primaryColor text-white rounded-lg hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
          2
        </button>
        <button className='relative hidden items-center px-4 py-2 text-sm font-semibold  text-dark rounded-lg hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'>
          3
        </button>
        <span className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 text-dark rounded-lg focus:outline-offset-0'>
          ...
        </span>
        <button className='relative hidden items-center px-4 py-2 text-sm font-semibold  text-dark rounded-lg hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'>
          8
        </button>
        <button className='relative inline-flex items-center px-4 py-2 text-sm font-semibold  text-dark rounded-lg hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
          9
        </button>
        <button className='relative inline-flex items-center px-4 py-2 text-sm font-semibold  text-dark rounded-lg hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
          10
        </button>
        <button className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 text-dark rounded-lg hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
          <span className='sr-only'>Next</span>
          <svg
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fill-rule='evenodd'
              d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
              clip-rule='evenodd'
            />
          </svg>
        </button>
      </nav>
    </div>
  )
}

export default Pagination
