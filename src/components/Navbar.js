import { Link } from 'wouter'
import './styles/Navbar.css'

const items = [
  { route: '/', data: 'Home' },
  { route: '/character', data: 'Characters' },
]

export default function Navbar() {
  return (
    <ul className='navbar'>
      {items.map((item) => (
        <li className='navbar__item' key={item.data}>
          <Link to={item.route}>{item.data}</Link>
        </li>
      ))}
    </ul>
  )
}
