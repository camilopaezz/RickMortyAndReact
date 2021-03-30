import './ListOfCharacters.css'

import Loading from '@components/Loading'
import { CharacterCard } from '@components/CharacterCards'

import useSearchCharacters from '@hooks/useSearchCharacters'
import useAllCharacters from '@hooks/useAllCharacters'

export default function ListOfCharacters ({ page, name = null }) {
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
          <div className='listOfCharacters'>
            {characters.map((character) => (
              <CharacterCard data={character} key={character.id} />
            ))}
          </div>
        </div>
      </>
    )
  }
}
