import { Link } from 'react-router-dom'
import React from 'react'
import './LocationCard.css'

function LocationCard({ data }) {
  const { id, name, type, dimension } = data

  return (
    <Link className='locationCard' to={`/location/${id}`}>
      <h2>{name}</h2>
      <div className='locationCard__info'>
        <p>
          <b>Id: </b>
          {id}
        </p>
        <p>
          <b>Type: </b>
          {type}
        </p>
        <p>
          <b>Dimension: </b>
          {dimension}
        </p>
      </div>
    </Link>
  )
}

export default React.memo(LocationCard)
