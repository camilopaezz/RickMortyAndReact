const API_BASE = 'https://rickandmortyapi.com/api/';

export default async function fetchCharacters(complement) {
  const url = `${API_BASE}${complement}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
