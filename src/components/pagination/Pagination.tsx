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
    <div className='flex items-center rounded-md'>
      {currentPage !== 1 && (
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-3 py-2`}
        >
          {'<'}
        </button>
      )}

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={`px-5 py-2.5 rounded-lg ${
              currentPage === page ? 'bg-primaryColor text-white' : ''
            }`}
          >
            {page}
          </button>
        )
      )}

      {currentPage !== totalPages && (
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 `}
        >
          {'>'}
        </button>
      )}
    </div>
  )
}

export default Pagination
