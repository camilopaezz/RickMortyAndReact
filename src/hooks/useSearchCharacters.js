import { useEffect, useState } from 'react'
import { getCharacter } from 'rickmortyapi'

export default function useSearchCharacters({ name, page }) {
  const [characters, setCharacters] = useState([])
  const [loading, setLoadState] = useState(true)
  const [maxPages, setMaxPages] = useState(1)

  useEffect(() => {
    if (page <= maxPages) {
      getCharacter({ name, page }).then((response) => {
        setLoadState(true)
        if (!response.error && page <= response.info.pages) {
          if (response.info.pages > 1) {
            setMaxPages(response.info.pages)
            setCharacters([].concat(characters, response.results))
          }
          if (page !== response.info.pages) {
            setMaxPages(response.info.pages)
            setCharacters([].concat(characters, response.results))
          }
        }
        setLoadState(false)
      })
    }
  }, [page])

  return { characters, loading }
}
