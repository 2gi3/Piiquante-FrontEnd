import axios from 'axios'
import { useState, useEffect } from 'react'
import { SauceInterface, UserID } from '../types/interfaces'

export const useFetch = (url: string, token: null | string = null) => {
  const [data, setData] = useState<SauceInterface[]>()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      let res
      try {
        token === null
          ? (res = await axios.get(url))
          : (res = await axios.get(url, {
              headers: {
                Authorization: `token ${token}`,
              },
            }))
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
