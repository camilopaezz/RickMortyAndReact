import Header from '../components/Header';
import Search from '../components/Search';

export default function Layout(props) {
  return (
    <>
      <Header />
      <Search />
      {props.children}
    </>
  );
}
