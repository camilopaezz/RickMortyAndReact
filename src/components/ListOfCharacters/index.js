import './ListOfCharacters.css'

import Loading from '../Loading'

import CharacterCard from '../CharacterCards'

import useSearchCharacters from '../../hooks/useSearchCharacters'
import useAllCharacters from '../../hooks/useAllCharacters'

export default function ListOfCharacters ({ page = 26, type, limit, name = null }) {
  const { characters, loading } = name
    ? useSearchCharacters({ name, page })
    : useAllCharacters(page, limit && limit)

  if (loading) {
    return <Loading />
  }

  if (type === 'compact') {
    return (
      <div className='listCharactersCompact__container'>
        {characters.map((character, index) => (
          <CharacterCard
            type='compact'
            data={character}
            key={index}
          />
        ))}
      </div>
    )
  }

  return (
    <div className='listOfCharacters'>
      {characters.map((character, index) => (
        <CharacterCard data={character} key={index} />
      ))}
    </div>
  )
}
