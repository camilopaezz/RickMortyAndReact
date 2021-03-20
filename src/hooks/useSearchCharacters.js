import { useEffect, useState } from 'react'
import { getCharacter } from 'rickmortyapi'

export default function useSearchCharacters({ name, page }) {
  const [characters, setCharacters] = useState([])
  const [loading, setLoadState] = useState(true)
  const [maxPages, setMaxPages] = useState(1)

  console.log(characters)

  useEffect(() => {
    if (page <= maxPages) {
      getCharacter({ name, page }).then((response) => {
        setLoadState(true)
        if (!response.error && page <= response.info.pages) {
          setMaxPages(response.info.pages)
          setCharacters([].concat(characters, response.results))
        }
        setLoadState(false)
      })
    }
  }, [page])

  useEffect(() => {
    getCharacter({ name, page }).then((response) => {
      setLoadState(true)
      if (response.info && response.results) {
        setMaxPages(response.info.pages)
        setCharacters(response.results)
      } else {
        setMaxPages(1)
        setCharacters([
          {
            name: 'NOTHING HERE...',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg',
            id: '1000000',
          },
        ])
      }
      setLoadState(false)
    })
  }, [name])

  return { characters, loading }
}
