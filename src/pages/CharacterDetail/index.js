import Character from 'components/CharacterInfo'
import { useParams } from 'react-router'

export default function CharacterDetail() {
  const { id } = useParams()
  return (
    <>
      <Character id={id} />
    </>
  )
}
