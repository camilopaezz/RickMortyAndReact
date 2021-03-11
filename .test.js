const { getCharacter } = require('rickmortyapi');

getCharacter({
  name: 'morty',
}).then((results) => console.log(results));
