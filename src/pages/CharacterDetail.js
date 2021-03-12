import Character from '../components/Character'

export default function CharacterDetail({ params }) {
  return (
    <>
      <Character id={params.id} />
    </>
  )
}
