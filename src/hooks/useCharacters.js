import { useEffect, useState } from "react";
import fetchCharacters from "../services/fetchCharacters";

export default function useCharacters(url) {
  const [characters, updateCharacters] = useState([]);
  const [loading, changeLoadState] = useState(true);

  useEffect(() => {
    fetchCharacters(url).then((results) => {
      updateCharacters(results);
      changeLoadState(false);
    });
  }, [url]);

  return { characters, loading };
}
