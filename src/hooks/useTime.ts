import { useState, useEffect } from 'react'

const useTime = (): [number, number, number] => {
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)

  useEffect(() => {
    const intervalId = setInterval(
      (function func() {
        const time = new Date()
        const timestamp = time.getTime()
        const currentTime = new Date(timestamp + 1000)
        const currentHours = currentTime.getHours()
        const currentMinutes = currentTime.getMinutes()
        const currentSeconds = currentTime.getSeconds()
        setHours(currentHours)
        setMinutes(currentMinutes)
        setSeconds(currentSeconds)
        return func
      })(),
      1000
    )

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return [hours, minutes, seconds]
}

export default useTime
