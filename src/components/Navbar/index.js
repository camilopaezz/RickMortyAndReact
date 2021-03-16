import { Link } from 'wouter'
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
      {NavbarItems.map(({ text, to }) => (
        <li className='navbar__item'>
          <Link to={to}>{text}</Link>
        </li>
      ))}
    </nav>
  )
}
