import { useEffect, useState } from 'react'
import { getCharacter } from 'rickmortyapi'

export default function useSearchCharacters(props = null) {
  if (!props) return

  const [results, setResults] = useState({})
  const [loading, setLoadState] = useState(true)
  const [maxPages, setMaxPages] = useState(0)

  useEffect(() => {
    getCharacter(props).then((response) => {
      setResults([].concat(results, response.results))
      setMaxPages(response.info.pages)
      setLoadState(false)
    })
  }, [])

  return { results, loading, maxPages }
}
