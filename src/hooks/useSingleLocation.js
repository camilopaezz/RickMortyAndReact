import { useEffect, useState } from 'react'
import { getLocation } from '../utils/rickAndMorty'

export default function useSingleLocation (id) {
  const [locationData, setLocationData] = useState({})
  const [loading, setLoadState] = useState(true)

  useEffect(async () => {
    setLoadState(true)
    try {
      const response = await getLocation([id])
      setLocationData(response)
      setLoadState(false)
    } catch (error) {
      console.error(error)
    }
  }, [id])

  return {
    locationData,
    loading
  }
}
