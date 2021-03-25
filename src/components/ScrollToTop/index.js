import { useEffect } from 'react'
import { withRouter } from 'react-router'
import { useLocation } from 'react-router-dom'

function ScrollToTop () {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollY = 0
  }, [pathname])

  return null
}

export default withRouter(ScrollToTop)
