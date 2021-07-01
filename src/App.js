import React from 'react'
import Helmet from 'react-helmet'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'

const CharactersPage = React.lazy(() => import('./pages/CharactersPage'))
const CharacterDetail = React.lazy(() => import('./pages/CharacterDetail'))
const SearchPage = React.lazy(() => import('./pages/SearchPage'))
const HomePage = React.lazy(() => import('./pages/HomePage'))
const EpisodesPage = React.lazy(() => import('./pages/EpisodePage'))
const Error404 = React.lazy(() => import('./pages/Error404'))
const LocationPage = React.lazy(() => import('./pages/LocationPage'))
const LocationDetail = React.lazy(() => import('./pages/LocationDetail'))

function App () {
  return (
    <div className='App'>
      <Helmet>
        <meta
          name='description' content='This is react-app that use the fantastic RickAndMortyAPI'
        />
      </Helmet>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/search/' component={CharactersPage} />
          <Route exact path='/search/:name' component={SearchPage} />
          <Route exact path='/character' component={CharactersPage} />
          <Route exact path='/character/:id' component={CharacterDetail} />
          <Route exact path='/location' component={LocationPage} />
          <Route exact path='/location/:id' component={LocationDetail} />
          <Route exact path='/episode' component={EpisodesPage} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
