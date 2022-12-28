import axios from 'axios'
import { useState, useEffect } from 'react'
import { SauceInterface, UserID } from '../types/interfaces'

export const useFetch = (url: string) => {
  const [data, setData] = useState<SauceInterface[]>()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      try {
        const res = await axios.get(url)
        const data = await res.data
        setData(data)
      } catch (error) {
        console.log(error)
        setError(error.message)
      } finally {
        setLoading(false)
      }

      setLoading(false)
    }

    setLoading(true)

    fetchData()
  }, [url])

  return { data, isLoading, error }
}
