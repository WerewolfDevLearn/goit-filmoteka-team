import { genreTable } from './geners';

function getGenres(genre_ids) {
  const arr = genre_ids
    .map(id => genreTable.find(item => id === item.id))
    .map(item => item.name);

  return arr;
}

export default getGenres;
