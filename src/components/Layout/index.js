import Header from 'components/Header'
import SearchBar from 'components/SearchBar'

export default function Layout(props) {
  return (
    <>
      <Header />
      <SearchBar />
      {props.children}
    </>
  )
}
