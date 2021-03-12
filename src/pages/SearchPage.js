import qs from 'querystring'
import { useRef } from 'react'
import ListOfCharacters from '../components/ListOfCharacters'
import useObserver from '../hooks/useObserver'
import useSearchCharacters from '../hooks/useSearchCharacters'

export default function SearchPage() {
  const ref = useRef(null)
  const isIntersecting = useObserver(ref)

  const query = qs.decode(location.search.replace('?', ''))
  const { results, loading, maxPages } = useSearchCharacters(query)

  return (
    <>
      <h1>Resultados de búsqueda</h1>
      {<ListOfCharacters data={results} />}
    </>
  )
}
