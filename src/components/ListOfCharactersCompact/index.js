import CharacterCardCompact from '../CharacterCardCompact'

const defaultInfo = [
  {
    created: '2017-11-30T11:02:41.935Z',
    episode: ['https://rickandmortyapi.com/api/episode/17'],
    gender: 'Male',
    id: 65,
    image: 'https://rickandmortyapi.com/api/character/avatar/65.jpeg',
    location: { name: "Rick's Battery Microverse", url: 'https://rickandmortyapi.com/api/location/24' },
    name: 'Chris',
    origin: { name: "Rick's Battery Microverse", url: 'https://rickandmortyapi.com/api/location/24' },
    species: 'Humanoid',
    status: 'Alive',
    type: 'Microverse inhabitant',
    url: 'https://rickandmortyapi.com/api/character/65'
  },
  {
    created: '2017-12-29T17:22:17.707Z',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    gender: 'Female',
    id: 170,
    image: 'https://rickandmortyapi.com/api/character/avatar/170.jpeg',
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    name: 'Jacqueline',
    origin: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    species: 'Human',
    status: 'Alive',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/170'
  },
  {
    created: '2017-12-29T12:02:33.550Z',
    episode: ['https://rickandmortyapi.com/api/episode/22'],
    gender: 'Male',
    id: 150,
    image: 'https://rickandmortyapi.com/api/character/avatar/150.jpeg',
    location: { name: 'Galactic Federation Prison', url: 'https://rickandmortyapi.com/api/location/39' },
    name: 'Cornvelious Daniel',
    origin: { name: 'unknown', url: '' },
    species: 'Alien',
    status: 'Dead',
    type: 'Gromflomite',
    url: 'https://rickandmortyapi.com/api/character/150'
  },
  {
    created: '2017-11-05T08:48:30.776Z',
    episode: ['https://rickandmortyapi.com/api/episode/16'],
    id: 24,
    image: 'https://rickandmortyapi.com/api/character/avatar/24.jpeg',
    location: { name: 'Signus 5 Expanse', url: 'https://rickandmortyapi.com/api/location/22' },
    name: 'Armagheadon',
    origin: { name: 'Signus 5 Expanse', url: 'https://rickandmortyapi.com/api/location/22' },
    species: 'Alien',
    status: 'Alive',
    type: 'Cromulon',
    url: 'https://rickandmortyapi.com/api/character/24'
  }
]

export default function ListOfCharactersCompact ({ ids }) {
  const characters = defaultInfo

  return (
    <div className='listCharactersCompact__container'>
      {characters.map((character) => (
        <CharacterCardCompact data={character} key={character.id} />
      ))}
    </div>
  )
}
