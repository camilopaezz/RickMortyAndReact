import notFound from '@images/notFound.png'
import './Error404.css'
import { Helmet } from 'react-helmet'

export default function Error404 () {
  return (
    <>
      <Helmet>
        <title>Not Found | Rick Morty And React</title>
      </Helmet>
      <div className='error__container'>
        <h1 className='error__title'>Error 404, Page not found</h1>
        <img className='error__image' src={notFound} alt='' />
      </div>
    </>
  )
}
