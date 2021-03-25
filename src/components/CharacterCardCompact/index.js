import { Link } from 'react-router-dom'
import React from 'react'

import './CharacterCardCompact.css'

function CharacterCardCompact ({ data }) {
  return (
    <Link className='x' to={`/character/${data.id}`}>
      <div className='characterCompact'>
        <h2>
          {data.name}
        </h2>
        <p>
          <b>Id: </b>{data.id}
        </p>
        <p>
          <b>Status: </b>{data.status}
        </p>
        <p>
          <b>Gender: </b>{data.gender}
        </p>
      </div>
    </Link>
  )
}

export default React.memo(CharacterCardCompact)
