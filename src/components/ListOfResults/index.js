import './ListOfCharacters.css'

import useSearchCharacters from 'hooks/useSearchCharacters'

import Loading from 'components/Loading'
import { Link } from 'wouter'

export default function ListOfResults({ page, name }) {
  const { characters, loading } = useSearchCharacters({ name, page })

  if (loading) {
    return <Loading />
  }

  if (!loading) {
    return (
      <>
        <div className='listOfCharacters'>
          {characters.map((character) => (
            <Link
              key={character.id}
              to={`/character/${character.id}`}
              className='listOfCharacters__item'
            >
              <img loading='lazy' src={character.image} alt={character.name} />
              <p>{character.name}</p>
            </Link>
          ))}
        </div>
      </>
    )
  }
}
