import { useEffect, useRef, useState } from 'react'
import useObserver from '@hooks/useObserver'
import { useParams } from 'react-router'
import ListOfCharacters from '@components/ListOfCharacter'

export default function SearchPage() {
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
      <h1>Resultados de búsqueda de {name}</h1>
      <div>
        <ListOfCharacters name={name} page={page} />
      </div>
      <div style={{ display: 'none' }} ref={ref}></div>
    </>
  )
}
