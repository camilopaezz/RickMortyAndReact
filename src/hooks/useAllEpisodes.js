import { useEffect, useState } from 'react'
import { getEpisode } from 'rickmortyapi'

export default function useAllEpisodes (page, limit = 12) {
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoadState] = useState(true)

  useEffect(async () => {
    const base = page * limit
    const IDs = []
    for (let i = 1; i <= limit; i++) {
      IDs.push(base + i)
    }

    try {
      const results = await getEpisode(IDs)
      setEpisodes([].concat(episodes, results))
      setLoadState(false)
    } catch (error) {
      console.error(error)
    }
  }, [page])

  return { episodes, loading }
}
