import CharacterCardCompact from 'components/CharacterCardCompact'
import Loading from 'components/Loading'
import useSelectedCharacters from 'hooks/useSelectedCharacters'

export default function ListOfCharactersCompact({ ids }) {
  const { characters, loading } = useSelectedCharacters(ids)

  if (loading) {
    return <Loading />
  }

  return (
    <div className='listCharactersCompact__container'>
      {characters.map((character) => (
        <CharacterCardCompact data={character} key={character.id} />
      ))}
    </div>
  )
}
