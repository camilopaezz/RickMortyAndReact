import { Suspense } from 'react'
import ReactDOM from 'react-dom'

import './global.css'

import App from './App'
import Error404 from 'pages/Error404'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Suspense fallback={Error404}>
    <App />
  </Suspense>,
  rootElement,
)
