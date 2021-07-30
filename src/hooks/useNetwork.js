import { useState, useEffect } from 'react'

function useNetwork () {
  const [isOnline, setIsOnline] = useState(true)

  const handleNetworkChange = () => setIsOnline(!isOnline)

  useEffect(() => {
    window.addEventListener('offline', handleNetworkChange)

    return () => {
      window.removeEventListener('offline', handleNetworkChange)
    }
  }, [])

  return isOnline
}

export default useNetwork
