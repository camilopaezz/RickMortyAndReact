import headerImage from 'images/Rick_and_Morty.svg'

import { Link } from 'wouter'

import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img style={{ marginBlockEnd: '50px' }} src={headerImage} alt='Logo' />
      </Link>
    </div>
  )
}
