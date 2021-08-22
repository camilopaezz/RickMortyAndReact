import { render, waitFor } from '@testing-library/react'
import React, { Suspense } from 'react'

import '@testing-library/jest-dom/extend-expect'

import App from '../src/App'

// someday i will add more test...

test('<App /> renders', async () => {
  const renderApp = render(
    <Suspense fallback={<p>Hola</p>}>
      <App />
    </Suspense>
  )
  const element = await waitFor(() => renderApp.getByText('Welcome to Rick Morty And React'))
  expect(element).toBeInTheDocument()
})
