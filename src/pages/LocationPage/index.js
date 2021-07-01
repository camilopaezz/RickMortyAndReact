import useObserver from '../../hooks/useObserver'
import { useRef, useState, useEffect } from 'react'
import ListOfLocations from '../../components/ListOfLocations'
import { Helmet } from 'react-helmet'

export default function LocationPage () {
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
  }, 600)

  return (
    <>
      <Helmet>
        <title>All Locations | Rick Morty And React</title>
      </Helmet>
      <h1>All locations:</h1>
      <div>
        <ListOfLocations page={page} />
      </div>
      <div style={{ display: 'none' }} ref={ref} />
    </>
  )
}
