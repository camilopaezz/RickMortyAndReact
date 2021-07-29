import './CharacterInfo.css'
import { Link } from 'react-router-dom'

export default function Character ({ data }) {
  const link = 'https://rickandmortyapi.com/api/location/'

  const locationId = data.location.url.replace(link, '')
  const locationLink =
    data.location.url === ''
      ? (
          data.location.name
        )
      : (
        <Link to={`/location/${locationId}`}>{data.location.name}</Link>
        )

  const originId = data.origin.url.replace(link, '')
  const originLink =
    data.origin.url === ''
      ? (
          data.origin.name
        )
      : (
        <Link to={`/location/${originId}`}>{data.location.name}</Link>
        )

  return (
    <>
      <div className='character-detail'>
        <div className='character-detail__image'>
          <img src={data.image} alt={data.name} />
        </div>
        <div className='character-detail__info'>
          <h2>{data.name}</h2>
          <p className='info__data'>
            <b>Id: </b>
            {data.id}
          </p>
          <p className='info__data'>
            <b>Status: </b>
            {data.status}
          </p>
          <p className='info__data'>
            <b>Type: </b>
            {data.type}
          </p>
          <p className='info__data'>
            <b>Gender: </b>
            {data.gender}
          </p>
          <p className='info__data'>
            <b>Origin: </b>
            {originLink}
          </p>
          <p className='info__data'>
            <b>Location: </b>
            {locationLink}
          </p>
          <p className='info__data'>
            <b>Episodes: </b>
            {data.episode.map((episode, index, array) => {
              const id = episode.replace('https://rickandmortyapi.com/api/episode/', '')
              return (
                <span key={id}>
                  {id}
                  {index === array.length - 1 ? '' : ','}
                  <i> </i>
                </span>
              )
            })}
          </p>
        </div>
      </div>
    </>
  )
}
