import { useEffect, useState } from 'react'
import { getLocation } from 'rickmortyapi'

export default function useAllLocations(page, limit = 12) {
  const [locations, setLocations] = useState([])
  const [loading, setLoadState] = useState(true)

  useEffect(async () => {
    const base = page * limit
    const IDs = []
    for (let i = 1; i <= limit; i++) {
      IDs.push(base + i)
    }

    const results = await getLocation(IDs)
    setLocations([].concat(locations, results))
    setLoadState(false)
  }, [page])

  return { locations, loading }
}
