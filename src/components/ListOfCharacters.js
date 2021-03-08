import { Link } from "wouter";

import useCharacters from "../hooks/useCharacters";
import Loading from "./Loading";

const API = "https://rickandmortyapi.com/api/character/?page=";

export default function ListOfCharacters({ page }) {
  const { characters, loading } = useCharacters(`${API}${page}`);
  if (loading) {
    return <Loading />;
  }

  if (!loading) {
    return (
      <>
        {characters.results.map((character) => {
          return (
            <Link
              to={`/character/${character.id}`}
              className="character"
              key={`${character.id}-${page}`}
            >
              <img loading="lazy" src={character.image} alt={character.name} />
              <p>{character.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
}
