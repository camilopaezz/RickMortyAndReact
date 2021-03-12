import qs from 'querystring'
// import { useRef } from 'react'
// import useObserver from '../hooks/useObserver'
import useSearchCharacters from '../hooks/useSearchCharacters'

export default function SearchPage() {
  // const ref = useRef(null)
  // const isIntersecting = useObserver(ref)

  const query = qs.decode(location.search.replace('?', ''))
  const { results, loading, maxPages } = useSearchCharacters(query)

  if (loading) {
    return <p>loading...</p>
  }

  console.log(results)

  return (
    <>
      <h1>Resultados de búsqueda</h1>
      {results.map((result) => (
        <p key={`${result.id}${result.name}`}>{result.name}</p>
      ))}
    </>
  )
}
