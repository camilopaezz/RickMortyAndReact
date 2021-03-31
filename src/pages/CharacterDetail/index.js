import useSingleCharacters from '@hooks/useSingleCharacter'
import Loading from '@components/Loading'

import Character from '@components/CharacterInfo'
import { useParams } from 'react-router'
import { Helmet } from 'react-helmet'

export default function CharacterDetail () {
  const { id } = useParams()
  const { character, loading } = useSingleCharacters(id)

  if (loading) {
    return (
      <Loading />
    )
  }

  if (!loading) {
    return (
      <>
        <Helmet>
          <title>{`${character.name} | Rick Morty And React`}</title>
        </Helmet>
        <h1>Character Info:</h1>
        <Character data={character} />
      </>
    )
  }
}
