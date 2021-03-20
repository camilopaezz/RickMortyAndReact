import { Link } from 'react-router-dom'
import React from 'react'

function CharacterCardBase({ data }) {
  return (
    <Link to={`/character/${data.id}`} className='listOfCharacters__item'>
      <img loading='lazy' src={data.image} alt={data.name} />
      <p>{data.name}</p>
    </Link>
  )
}

const CharacterCard = React.memo(CharacterCardBase)
const CharacterCardResults = CharacterCardBase

export { CharacterCard, CharacterCardResults }
