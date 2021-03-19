import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import ScrollToTop from 'components/ScrollToTop'
import Navbar from 'components/Navbar'

const CharactersPage = React.lazy(() => import('pages/CharactersPage'))
const CharacterDetail = React.lazy(() => import('pages/CharacterDetail'))
const SearchPage = React.lazy(() => import('pages/SearchPage'))
const HomePage = React.lazy(() => import('pages/HomePage'))
const Error404 = React.lazy(() => import('pages/Error404'))

export default function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/search/' component={SearchPage} />
          <Route exact path='/search/:name' component={SearchPage} />
          <Route exact path='/character' component={CharactersPage} />
          <Route exact path='/character/:id' component={CharacterDetail} />
          <Route component={Error404}></Route>
        </Switch>
      </Router>
    </div>
  )
}
