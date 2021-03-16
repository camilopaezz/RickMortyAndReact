import { Route } from 'wouter'

import CharactersPage from 'pages/CharactersPage'
import CharacterDetail from 'pages/CharacterDetail'
import SearchPage from 'pages/SearchPage'
import Error404 from 'pages/Error404'

import Layout from 'components/Layout'

export default function App() {
  return (
    <div className='App'>
      <Layout>
        <Route path='/' component={CharactersPage} />
        <Route path='/search/' component={SearchPage} />
        <Route path='/character/:id' component={CharacterDetail} />
        <Route path='/:rest' component={Error404}></Route>
      </Layout>
    </div>
  )
}
