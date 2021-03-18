import { Link } from 'react-router-dom'
import React from 'react'

function CharacterCard({ data }) {
  return (
    <Link to={`/character/${data.id}`} className='listOfCharacters__item'>
      <img loading='lazy' src={data.image} alt={data.name} />
      <p>{data.name}</p>
    </Link>
  )
}

export default CharacterCard
