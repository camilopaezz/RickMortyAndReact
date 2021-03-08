import ListOfCharacters from "../components/ListOfCharacters";
import { useState } from "react";

export default function Home() {
  const [page, changePage] = useState(1);
  const addPage = () => changePage(page + 1);
  return (
    <div className="App">
      <h1>Rick & Morty API</h1>
      <ListOfCharacters page={page} />
      <button onClick={addPage}>Load more...</button>
    </div>
  );
}
