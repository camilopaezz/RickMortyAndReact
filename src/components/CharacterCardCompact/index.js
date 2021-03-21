import { Link } from 'react-router-dom'
import React from 'react'

function CharacterCardCompact({ data }) {
  return (
    <Link to={`/character/${data.id}`} className='characterCompact'>
      <h3>{data.name}</h3>
      <p>{data.id}</p>
      <p>{data.status}</p>
    </Link>
  )
}

export default React.memo(CharacterCardCompact)
