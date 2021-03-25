import getHistory from '@utils/getHistory'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage () {
  const history = getHistory()

  const historyEmpty = history.length === 0 ? <p>Nothing here...</p> : null

  return (
    <div className='home'>
      <h1>Welcome to Rick Morty And React 👏</h1>
      <p>This is react-app that use the fantastic RickAndMortyAPI</p>
      <div className='home__content'>
        <div className='content__recommended'>
          <h3>Some interesting Characters</h3>
        </div>
        <div className='content__history'>
          <h3>Latest Search</h3>
          {
            historyEmpty
          }
          {
            history.map(({ name, link }, index) => {
              return (
                <Link key={index} to={link}>
                  <p>{name}</p>
                </Link>

              )
            })
          }
        </div>
      </div>
    </div>
  )
}
