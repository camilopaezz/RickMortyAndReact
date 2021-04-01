import getHistory from '@utils/getHistory'
import Logo from '@images/react.svg'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import ListOfCharactersCompact from '@components/ListOfCharactersCompact'

import './HomePage.css'

export default function HomePage () {
  const history = getHistory()
  const randomIds = [65, 24, 150, 170]

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
            <h2>Some interesting Characters</h2>
            <ListOfCharactersCompact ids={randomIds} />
          </div>
          <div className='content__history'>
            <h2>Latest Search</h2>
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
