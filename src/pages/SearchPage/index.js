import { useEffect, useRef, useState } from 'react'
import useObserver from 'hooks/useObserver'
import ListOfResults from 'components/ListOfResults'

export default function SearchPage({ params }) {
  const { name } = params

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
        <ListOfResults name={name} page={page} />
      </div>
      <div style={{ display: 'none' }} ref={ref}></div>
    </>
  )
}
