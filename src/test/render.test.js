import { render, waitFor } from '@testing-library/react'
import { Suspense } from 'react'

import '@testing-library/jest-dom/extend-expect'

import App from '../App'

test('<App /> renders', async () => {
  const renderApp = render(
    <Suspense fallback={<p>Hola</p>}>
      <App />
    </Suspense>
  )

  await waitFor(() => {
    expect(renderApp.getByText('Hola')).toBeInTheDocument()
  })
})
