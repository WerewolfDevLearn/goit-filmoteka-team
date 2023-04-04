import getPosterPath from '../utiles/get_poster_path';
import { genresSearch } from '../utiles/get_geners';
import { cardMarkup } from './cardMarkup';

export function createCardMarkup(array) {
  // console.log('array: ', array);
  return array
  .map(
    ({ id, genre_ids, title, vote_average, release_date, poster_path }) => {
        const stringLength = title.split('');
        const classStatus = quantityLetterOfString(stringLength);
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
          classStatus
        });
      }
      )
    .join('');
}

function quantityLetterOfString(stringLength){
  if(stringLength.length <= 33){
    const classStatus = 'isNoActive';
    return classStatus;
  } else {
    const classStatus = 'isActive';
    return classStatus;
  }
}

export function appendCardsMarkup(markup) {
  galleryEl.insertAdjacentHTML('beforeend', markup);
}

// Тимчасово
const galleryEl = document.querySelector('.gallery');
