import { useParams } from 'react-router-dom'
import useSingleLocation from '@hooks/useSingleLocation'
import Loading from '@components/Loading'
import ListOfCharactersCompact from '@components/ListOfCharactersCompact'

export default function LocationDetail() {
  const { id } = useParams()
  const { locationData, loading } = useSingleLocation(id)

  if (loading) {
    return <Loading />
  }

  const ids = locationData.residents.map((value) => {
    return value.replace('https://rickandmortyapi.com/api/character/', '')
  })

  return (
    <div className='location'>
      <h1 className='location__title'>{locationData.name}</h1>
      <div className='location__content'>
        <div className='content__residents'>
          <ListOfCharactersCompact ids={ids} />
        </div>
        <div className='content__info'>
          <p>
            <b>Id: </b>
            {locationData.id}
          </p>
          <p>
            <b>Type: </b>
            {locationData.type}
          </p>
          <p>
            <b>Dimension: </b>
            {locationData.dimension}
          </p>
        </div>
      </div>
    </div>
  )
}
