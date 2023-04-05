import { genreTable } from './geners.js';

// Пошук потрібних жанрів по ID
export function genresSearch(data) {
  const arrGenres = [];
  const genre = data
    .map(element => {
      return genreTable.filter(el => el.id === element).map(el => el.name);
    })
    .join(', ');
  arrGenres.push(genre)[0];
  return arrGenres;
}
export function genresSearchBig(data) {
  return data.map(el => el.name).join(', ');
}
