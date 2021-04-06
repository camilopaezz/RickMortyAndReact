import Loading from '@components/Loading'
import LocationCard from '@components/LocationCard'
import useAllLocations from '@hooks/useAllLocations'

import './ListOfLocations.css'

export default function ListOfLocations ({ page }) {
  const LIMIT = 12
  const { locations, loading } = useAllLocations(page, LIMIT)

  if (loading) {
    return <Loading />
  }

  if (!loading) {
    return (
      <div className='ListOfLocations__container'>
        {locations.map((location) => (
          <LocationCard data={location} key={location.id} />
        ))}
      </div>
    )
  }
}
