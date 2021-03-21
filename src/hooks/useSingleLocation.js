import { useEffect, useState } from 'react'
import { getLocation } from 'rickmortyapi'

export default function useSingleLocation(id) {
  const [locationData, setLocationData] = useState({})
  const [loading, setLoadState] = useState(true)

  useEffect(async () => {
    setLoadState(true)
    const response = await getLocation([id])
    setLocationData(response)
    setLoadState(false)
  }, [id])

  return {
    locationData,
    loading,
  }
}
