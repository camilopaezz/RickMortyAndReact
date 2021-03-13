import './styles/ListOfCharacters.css'

import useAllCharacters from '../hooks/useAllCharacters'
import useSearchCharacters from '../hooks/useSearchCharacters'

import Loading from './Loading'
import { Link } from 'wouter'

export default function ListOfCharacters({ page, name }) {
  const { characters, loading } = name
    ? useSearchCharacters({ name, page })
    : useAllCharacters(page)

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
