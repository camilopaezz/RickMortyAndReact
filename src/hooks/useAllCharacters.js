import { useEffect, useState } from 'react';
import { getCharacter } from 'rickmortyapi';

export default function useAllCharacters(page, limit = 12) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoadState] = useState(true);

  useEffect(() => {
    const base = page * limit;
    const IDs = [];
    for (let i = 1; i <= limit; i++) {
      IDs.push(base + i);
    }

    getCharacter(IDs).then((character) => {
      setCharacters([].concat(characters, character));
      setLoadState(false);
    });
  }, [page]);

  return { characters, loading };
}
