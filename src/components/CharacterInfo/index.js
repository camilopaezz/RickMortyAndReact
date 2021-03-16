import useOneCharacters from 'hooks/useOneCharacter'
import Loading from 'components/Loading'
import './CharacterInfo.css'

const API = 'https://rickandmortyapi.com/api/character/'

export default function Character({ id }) {
  const { character, loading } = useOneCharacters(id)

  if (loading) {
    return <Loading />
  }

  if (!loading) {
    return (
      <div className='character'>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
        <div>
          <p>
            <b>Status:</b> {character.status}
          </p>
          <p>
            <b>Species:</b> {character.species}
          </p>
          <p>
            <b>Gender:</b> {character.gender}
          </p>
        </div>
      </div>
    )
  }
}
