import Loading from 'components/Loading'
import LocationCard from 'components/LocationCard'
import useAllLocations from 'hooks/useAllLocations'

export default function ListOfLocations({ page }) {
  const LIMIT = 36
  const { locations, loading } = useAllLocations(page, LIMIT)

  if (loading) {
    return <Loading />
  }

  if (!loading) {
    return (
      <>
        {locations.map((location) => (
          <LocationCard data={location} key={location.id} />
        ))}
      </>
    )
  }
}
