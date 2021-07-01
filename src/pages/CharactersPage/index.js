import ListOfCharacters from '../../components/ListOfCharacter'
import { useEffect, useRef, useState } from 'react'
import useObserver from '../../hooks/useObserver'
import { Helmet } from 'react-helmet'

export default function CharactersPage () {
  const ref = useRef(null)
  const [page, setPage] = useState(0)
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
  }, 400)

  return (
    <>
      <Helmet>
        <title>All Characters | Rick Morty And React</title>
      </Helmet>
      <div>
        <h1>All Characters:</h1>
        <div>
          <ListOfCharacters page={page} />
        </div>
        <div style={{ display: 'none' }} ref={ref} />
      </div>
    </>
  )
}
