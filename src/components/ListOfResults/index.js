import './ListOfCharacters.css'

import useSearchCharacters from 'hooks/useSearchCharacters'
import CharacterCard from 'components/CharacterCard'

import Loading from 'components/Loading'

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
            <CharacterCard data={character} key={character.id} />
          ))}
        </div>
      </>
    )
  }
}
