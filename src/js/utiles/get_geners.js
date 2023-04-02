import {genres} from './geners.json';

// Пошук потрібних жанрів по ID
export function genresSearch(data) {
  const arrGenres = [];
  const genre = data.map(element => {
      return genres.filter(el => el.id === element).map(el => el.name);
    }).join(', ');
    arrGenres.push(genre)[0];
    return arrGenres;
}