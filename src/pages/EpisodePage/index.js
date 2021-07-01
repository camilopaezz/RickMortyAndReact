import { useEffect, useRef, useState } from 'react'
import useObserver from '../../hooks/useObserver'
import ListOfEpisodes from '../../components/ListOfEpisodes'
import { Helmet } from 'react-helmet'

export default function EpisodesPage () {
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
        <title>All Episodes | Rick Morty And React</title>
      </Helmet>
      <div>
        <h1>All Episodes:</h1>
        <div>
          <ListOfEpisodes page={page} />
        </div>
        <div style={{ display: 'none' }} ref={ref} />
      </div>
    </>
  )
}
