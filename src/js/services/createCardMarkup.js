import getPosterPath from '../utiles/get_poster_path';
import { genresSearch } from '../utiles/get_geners';
import { cardMarkup } from './cardMarkup';

export function createCardMarkup(array) {
  // console.log('array: ', array);
  return array
    .map(
      ({ id, genre_ids, title, vote_average, release_date, poster_path }) => {
        const posterPath = getPosterPath(poster_path);
        const releaseFullYear = release_date.split('-')[0];
        const rating = vote_average.toFixed(1);
        const genreString = genresSearch(genre_ids);
        return cardMarkup({
          id,
          genreString,
          title,
          rating,
          releaseFullYear,
          posterPath,
        });
      }
    )
    .join('');
}

export function appendCardsMarkup(markup) {
  galleryEl.insertAdjacentHTML('beforeend', markup);
}

// Тимчасово
const galleryEl = document.querySelector('.gallery');
