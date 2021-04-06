import { useEffect, useState } from 'react'

export default function useObserver (externalRef) {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    observer.observe(externalRef.current)
  }, [externalRef])

  const observerCallback = (entry) => {
    if (entry[0].intersectionRatio > 0) {
      setIntersecting(true)
      setIntersecting(false)
    }
  }

  const observer = new window.IntersectionObserver(observerCallback, {
    rootMargin: '400px'
  })

  return isIntersecting
}
