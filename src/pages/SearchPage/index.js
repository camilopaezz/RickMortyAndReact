import { useEffect, useRef, useState } from 'react'
import useObserver from '../../hooks/useObserver'
import { useParams } from 'react-router'
import ListOfCharacters from '../../components/ListOfCharacters'
import { Helmet } from 'react-helmet'

export default function SearchPage () {
  const { name = '' } = useParams()

  const ref = useRef(null)
  const [page, setPage] = useState(1)
  const isIntersecting = useObserver(ref)

  useEffect(() => {
    if (isIntersecting) {
      setPage(page + 1)
    }
  }, [isIntersecting])

  useEffect(() => {
    setPage(1)
  }, [name])

  setTimeout(() => {
    if (ref.current) {
      ref.current.style.display = 'block'
    }
  }, 600)

  return (
    <>
      <Helmet>
        <title>{`Results of ${name} | Rick Morty And React`}</title>
      </Helmet>
      <h1>Resultados de búsqueda de {name}</h1>
      <div>
        <ListOfCharacters name={name} page={page} />
      </div>
      <div style={{ display: 'none' }} ref={ref} />
    </>
  )
}
