import Loading from '../Loading'
import EpisodeCard from '../EpisodeCard'
import useAllEpisodes from '../../hooks/useAllEpisodes'

import './ListOfEpisodes.css'

export default function ListOfEpisodes ({ page }) {
  const LIMIT = 12
  const { episodes, loading } = useAllEpisodes(page, LIMIT)
  if (loading) {
    return <Loading />
  }

  if (!loading) {
    return (
      <div className='listCharactersCompact__container'>
        {episodes.map((episode) => (
          <EpisodeCard data={episode} key={episode.id} />
        ))}
      </div>
    )
  }
}
