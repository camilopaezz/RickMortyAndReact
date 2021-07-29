import { Link } from 'react-router-dom'
import React from 'react'

import './CharacterCard.css'

function CharacterCard ({ data, type }) {
  if (type === 'compact') {
    return (
      <Link className='x' to={`/character/${data.id}`}>
        <div className='characterCompact'>
          <h2>{data.name}</h2>
          <p>
            <b>Id: </b>
            {data.id}
          </p>
          <p>
            <b>Status: </b>
            {data.status}
          </p>
          <p>
            <b>Gender: </b>
            {data.gender}
          </p>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/character/${data.id}`} className='listOfCharacters__item'>
      <img loading='lazy' src={data.image} alt={data.name} />
      <p>{data.name}</p>
    </Link>
  )
}

export default React.memo(CharacterCard)
