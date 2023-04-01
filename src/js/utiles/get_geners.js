import {genres} from './geners.json';

// function getGenres(arr) {
//   const arrOfGenres = arr.map(item => item.name);
//   const genreString = arrOfGenres.join(' ');
//   return genreString;
// }

// export default getGenres;

// Пошук потрібних жанрів по ID
export function genresSearch(data) {
  const arrGenres = [];
  const genre = data.map(element => {
      return genres.filter(el => el.id === element).map(el => el.name);
    }).join(', ');
    arrGenres.push(genre)[0];
    return arrGenres;
}