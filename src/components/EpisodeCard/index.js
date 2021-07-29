import './EpisodeCard.css'

function EpisodeCard ({ data }) {
  return (
    <div className='x' to={`/character/${data.id}`}>
      <div className='episodeCompact'>
        <h2>
          {data.name}
        </h2>
        <p>
          <b>Id: </b>{data.id}
        </p>
        <p>
          <b>Air Date: </b>{data.air_date}
        </p>
        <p>
          <b>Episode: </b>{data.episode}
        </p>
      </div>
    </div>
  )
}

export default EpisodeCard
