import getHistory from '../../utils/getHistory'
import ListOfCharacters from '../../components/ListOfCharacters'
import Logo from '../../images/react.svg'

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
        <h1>
          Welcome to Rick Morty And React
          <img src={Logo} alt='React' className='react-logo' />
        </h1>
        <p>This is react-app that use the fantastic RickAndMortyAPI</p>
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
