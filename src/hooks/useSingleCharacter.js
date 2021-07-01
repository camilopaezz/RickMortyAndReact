import { useEffect, useState } from 'react'
import { getCharacter } from '../utils/rickAndMorty'

export default function useOneCharacters (id) {
  const [character, setCharacter] = useState({})
  const [loading, setLoadState] = useState(true)

  useEffect(() => {
    getCharacter([id]).then((response) => {
      setCharacter(response)
      setLoadState(false)
    })
  }, [id])

  return { character, loading }
}
