import './CharacterInfo.css'
import { Link } from 'react-router-dom'

export default function Character({ data }) {
  console.log(data.status === 'Alive')

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
            <Link to={`/`}>{data.origin.name}</Link>
          </p>
          <p className='info__data'>
            <b>Location: </b>
            <Link to={`/`}>{data.location.name}</Link>
          </p>
          <p className='info__data'>
            <b>Episodes: </b>
            {data.episode.map((episode, index, array) => {
              const id = episode.replace('https://rickandmortyapi.com/api/episode/', '')
              if (index === array.length - 1) {
                return (
                  <>
                    <Link to={`/episode/${id}`}>{id}</Link>
                    <i> </i>
                  </>
                )
              } else {
                return (
                  <>
                    <Link to={`/episode/${id}`}>{id},</Link>
                    <i> </i>
                  </>
                )
              }
            })}
          </p>
        </div>
      </div>
    </>
  )
}
