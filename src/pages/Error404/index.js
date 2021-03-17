import notFound from 'images/notFound.png'
import './Error404.css'

export default function Error404() {
  return (
    <div className='error__container'>
      <h1 className='error__title'>Error 404, Page not found</h1>
      <img className='error__image' src={notFound} alt='' />
    </div>
  )
}
