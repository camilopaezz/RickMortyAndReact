import './styles.css'
import { Route } from 'wouter'

import CharactersPage from './pages/CharactersPage'
import CharacterDetail from './pages/CharacterDetail'
import SearchPage from './pages/SearchPage'

import Layout from './components/Layout'

export default function App() {
  return (
    <div className='App'>
      <Layout>
        {/* <Route path='/' component={Home} /> */}
        <Route path='/search/' component={SearchPage} />
        <Route path='/character' component={CharactersPage} />
        <Route path='/character/:id' component={CharacterDetail} />
      </Layout>
    </div>
  )
}
