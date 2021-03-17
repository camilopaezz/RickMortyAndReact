import { Route, Switch } from 'wouter'

import CharactersPage from 'pages/CharactersPage'
import CharacterDetail from 'pages/CharacterDetail'
import SearchPage from 'pages/SearchPage'
import Navbar from 'components/Navbar'
import HomePage from 'pages/HomePage'
import React from 'react'

const Error404 = React.lazy(() => import('pages/Error404'))

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/search/' component={SearchPage} />
        <Route path='/search/:name' component={SearchPage} />
        <Route path='/character' component={CharactersPage} />
        <Route path='/character/:id' component={CharacterDetail} />
        <Route component={Error404}></Route>
      </Switch>
    </div>
  )
}
