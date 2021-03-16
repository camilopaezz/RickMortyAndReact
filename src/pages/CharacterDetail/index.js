import Character from 'components/CharacterInfo'

export default function CharacterDetail({ params }) {
  return (
    <>
      <Character id={params.id} />
    </>
  )
}
