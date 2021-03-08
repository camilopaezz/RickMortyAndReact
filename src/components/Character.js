import useCharacters from "../hooks/useCharacters";
import Loading from "./Loading";

const API = "https://rickandmortyapi.com/api/character/";

export default function Character({ id }) {
  const { characters: character, loading } = useCharacters(`${API}${id}`);

  if (loading) {
    return <Loading />;
  }

  if (!loading) {
    return (
      <>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
        <div>
          <p>
            <b>Status:</b> {character.status}
          </p>
          <p>
            <b>Species:</b> {character.species}
          </p>
          <p>
            <b>Gender:</b> {character.gender}
          </p>
        </div>
      </>
    );
  }
}
