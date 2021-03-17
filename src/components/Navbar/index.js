import { Link } from 'wouter'
import navImage from 'images/Rick_and_Morty.svg'
import SearchBar from 'components/SearchBar'

import './Navbar.css'

const NavbarItems = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Characters',
    to: '/character',
  },
]

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'>
          <img src={navImage} alt='Logo' />
        </Link>
      </div>
      <div className='navbar__right'>
        <ul>
          {NavbarItems.map(({ text, to }) => (
            <li key={text} className='navbar__item'>
              <Link to={to}>{text}</Link>
            </li>
          ))}
        </ul>
        <SearchBar />
      </div>
    </nav>
  )
}
