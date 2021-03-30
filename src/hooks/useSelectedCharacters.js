import { useEffect, useState } from 'react'
import { getCharacter } from 'rickmortyapi'

export default function useSelectedCharacters (ids) {
  const [characters, setCharacters] = useState([])
  const [loading, setLoadState] = useState(true)

  useEffect(async () => {
    setLoadState(true)
    const response = await getCharacter(ids)
    if (!response.length) {
      setCharacters([response])
    } else {
      setCharacters(response)
    }
    setLoadState(false)
  }, [ids])

  return { characters, loading }
}
