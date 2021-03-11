import { useEffect, useState } from 'react';
import fetchCharacters from '../services/fetchCharacters';

export default function useAllCharacters(page) {
  const url = `character/?page=${page}`;

  const [characters, updateCharacters] = useState([]);
  const [loading, changeLoadState] = useState(true);

  useEffect(() => {
    fetchCharacters(url).then((response) => {
      console.log(response);
      updateCharacters([...characters, ...response.results]);
      changeLoadState(false);
    });
  }, [page]);

  return { characters, loading };
}
