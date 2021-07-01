import { useEffect, useState } from 'react'
import { getLocation } from '../utils/rickAndMorty'

export default function useAllLocations (page, limit = 12) {
  const [locations, setLocations] = useState([])
  const [loading, setLoadState] = useState(true)

  useEffect(async () => {
    const base = page * limit
    const IDs = []
    for (let i = 1; i <= limit; i++) {
      IDs.push(base + i)
    }

    try {
      const results = await getLocation(IDs)
      setLocations([].concat(locations, results))
      setLoadState(false)
    } catch (error) {
      console.error(error)
    }
  }, [page])

  return { locations, loading }
}
