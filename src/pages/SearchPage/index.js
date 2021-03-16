import qs from 'querystring'
import ListOfCharacters from 'components/ListOfCharacter'
import { useEffect, useRef, useState } from 'react'
import useObserver from 'hooks/useObserver'

export default function SearchPage() {
  const { name } = qs.decode(location.search.replace('?', ''))

  const ref = useRef(null)
  const [page, setPage] = useState(1)
  const isIntersecting = useObserver(ref)

  useEffect(() => {
    if (isIntersecting) {
      setPage(page + 1)
    }
  }, [isIntersecting])

  setTimeout(() => {
    if (ref.current) {
      ref.current.style.display = 'block'
    }
  }, 600)

  return (
    <>
      <h1>Resultados de búsqueda</h1>
      <div>
        <ListOfCharacters name={name} page={page} />
      </div>
      <div style={{ display: 'none' }} ref={ref}></div>
    </>
  )
}
