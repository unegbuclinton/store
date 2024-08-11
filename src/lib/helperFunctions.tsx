import { useState, useEffect } from 'react'

const useCountdownTimer = (preciseEndDate: number) => {
  // Function to get the end date, checking if localStorage is available
  const getEndDate = () => {
    if (typeof window !== 'undefined') {
      // Check if we are running on the client
      const savedEndDate = localStorage.getItem('countdownEndDate')
      if (savedEndDate) {
        return parseInt(savedEndDate, 10)
      } else {
        localStorage.setItem('countdownEndDate', preciseEndDate.toString())
      }
    }
    return preciseEndDate
  }

  // State to hold the end date and remaining time in seconds
  const [endDate, setEndDate] = useState(getEndDate())
  const [time, setTime] = useState(() =>
    Math.max(0, Math.floor((endDate - new Date().getTime()) / 1000))
  )

  useEffect(() => {
    // Set the end date in localStorage if on client
    if (
      typeof window !== 'undefined' &&
      !localStorage.getItem('countdownEndDate')
    ) {
      localStorage.setItem('countdownEndDate', endDate.toString())
    }

    const timerId = setInterval(() => {
      const currentTime = new Date().getTime()
      const remainingTime = Math.max(
        0,
        Math.floor((endDate - currentTime) / 1000)
      )
      setTime(remainingTime)

      // Stop the timer if time is up
      if (remainingTime <= 0) {
        clearInterval(timerId)
      }
    }, 1000)

    // Clear interval on component unmount
    return () => clearInterval(timerId)
  }, [endDate])

  const days = Math.floor(time / (24 * 60 * 60))
  const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60))
  const minutes = Math.floor((time % (60 * 60)) / 60)
  const seconds = time % 60

  return { days, hours, minutes, seconds }
}

export default useCountdownTimer
