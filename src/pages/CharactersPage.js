import ListOfCharacters from '../components/ListOfCharacters'
import { useEffect, useRef, useState } from 'react'
import useObserver from '../hooks/useObserver'

export default function CharactersPage() {
  const ref = useRef(null)

  const [page, setPage] = useState(-1) //A BUG THAT I CANT UNDERSTAND
  const isIntersecting = useObserver(ref)

  useEffect(() => {
    console.log(isIntersecting)
    // TODO: Arreglar bug
    if (isIntersecting) {
      setPage(page + 1)
    }
  }, [isIntersecting])

  return (
    <div>
      <h1>All Characters:</h1>
      <div className='listContainer'>
        <ListOfCharacters page={page} />
      </div>
      <div ref={ref}></div>
    </div>
  )
}
