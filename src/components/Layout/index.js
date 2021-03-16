import Header from 'components/Header'
import Navbar from 'components/Navbar'

export default function Layout(props) {
  return (
    <>
      <Header />
      <Navbar />
      {props.children}
    </>
  )
}
