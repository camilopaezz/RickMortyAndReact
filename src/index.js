import { Suspense } from 'react'
import ReactDOM from 'react-dom'

import './global.css'

import App from './App'
import Loading from 'components/Loading'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Suspense fallback={Loading}>
    <App />
  </Suspense>,
  rootElement,
)
