import getHistory from '@utils/getHistory'
import getRandomNumbers from '@utils/getRandomNumbers'
import Logo from '@images/react.svg'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import ListOfCharactersCompact from '@components/ListOfCharactersCompact'

import './HomePage.css'
const MANY = 4

export default function HomePage () {
  const history = getHistory()
  const randomIds = getRandomNumbers(MANY)

  const historyEmpty = history.length === 0 ? <p>Nothing here...</p> : null

  return (
    <>
      <Helmet>
        <title>Rick Morty And React</title>
      </Helmet>
      <div className='home'>
        <h1>
          Welcome to Rick Morty And React
          <img src={Logo} alt='React' className='react-logo' />
        </h1>
        <p>This is react-app that use the fantastic RickAndMortyAPI</p>
        <div className='home__content'>
          <div className='content__recommended'>
            <h3>Some interesting Characters</h3>
            <ListOfCharactersCompact ids={randomIds} />
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
    </>
  )
}
