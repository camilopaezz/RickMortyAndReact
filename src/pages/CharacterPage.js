import { Link } from "wouter";
import Character from "../components/Character";

export default function CharacterPage({ params }) {
  return (
    <>
      <Link to="/">
        <i>Back to home</i>
      </Link>
      <Character id={params.id} />
    </>
  );
}
