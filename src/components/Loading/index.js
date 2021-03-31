import './Loading.css'
import { Helmet } from 'react-helmet'

export default function Loading () {
  return (
    <>
      <Helmet>
        <title>Loading...</title>
      </Helmet>
      <div className='spinner__container'>
        <div className='spinner' />
      </div>
    </>
  )
}
