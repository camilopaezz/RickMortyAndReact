import headerImage from '../images/Rick_and_Morty.svg'
import Navbar from '../components/Navbar'

import { Link } from 'wouter'

import './styles/Header.css'

export default function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img src={headerImage} alt='Logo' />
      </Link>
      <Navbar />
    </div>
  )
}
