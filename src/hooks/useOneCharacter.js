import fetchCharacters from '../services/fetchCharacters';
import { useEffect, useState } from 'react';

export default function useOneCharacters(id) {
  const url = `character/${id}`;

  const [character, updateCharacter] = useState({});
  const [loading, changeLoadState] = useState(true);

  useEffect(() => {
    changeLoadState(true);
    fetchCharacters(url).then((response) => {
      updateCharacter(response);
      changeLoadState(false);
    });
  }, [id]);
  console.log(character);

  return { character, loading };
}
