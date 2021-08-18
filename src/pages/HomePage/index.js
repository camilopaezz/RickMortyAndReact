import getHistory from '../../utils/getHistory'
import ListOfCharacters from '../../components/ListOfCharacters'
import PickleRick from '../../images/duct-tape-pickle-rick.svg'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import './HomePage.css'

export default function HomePage () {
  const history = getHistory()
  const historyEmpty = history.length === 0 ? <p>Nothing here...</p> : null

  return (
    <>
      <Helmet>
        <title>Rick Morty And React</title>
      </Helmet>
      <main className='home'>
        <div className='home__top'>
          <div className='top__title'>
            <h1>
              Welcome to Rick Morty And React
            </h1>
            <p>This is react-app that use the fantastic RickAndMortyAPI</p>
          </div>
          <img className='home__pickle' width='200px' src={PickleRick} alt='' />
        </div>
        <section className='home__content'>
          <article className='content__recommended'>
            <h2>Some interesting Characters</h2>
            <ListOfCharacters limit={4} type='compact' />
          </article>
          <article className='content__history'>
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
          </article>
        </section>
      </main>
    </>
  )
}
