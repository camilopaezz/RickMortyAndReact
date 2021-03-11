import { useEffect, useState } from 'react';
import { getCharacter } from 'rickmortyapi';

export default function useOneCharacters(id) {
  const [character, updateCharacter] = useState({});
  const [loading, changeLoadState] = useState(true);

  useEffect(() => {
    getCharacter([id]).then((response) => {
      console.log(response);
      updateCharacter(response);
      changeLoadState(false);
    });
  }, [id]);

  return { character, loading };
}
