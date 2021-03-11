import ListOfCharacters from '../components/ListOfCharacters';
import { useState } from 'react';

export default function CharactersPage() {
  const [page, changePage] = useState(0);
  const addPage = () => changePage(page + 1);
  return (
    <div>
      <h1>All Characters:</h1>
      <ListOfCharacters page={page} />
      <button onClick={addPage}>Load more...</button>
    </div>
  );
}
