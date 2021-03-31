import { useEffect, useState } from 'react'
import { getEpisode } from 'rickmortyapi'

export default function useSingleEpisode (id) {
  const [episodeData, setEpisodeData] = useState({})
  const [loading, setLoadState] = useState(true)

  useEffect(async () => {
    setLoadState(true)
    try {
      const response = await getEpisode([id])
      setEpisodeData(response)
      setLoadState(false)
    } catch (error) {
      console.error(error)
    }
  }, [id])

  return { episodeData, loading }
}
