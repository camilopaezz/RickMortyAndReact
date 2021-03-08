export default async function fetchCharacters(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
