import { removeGlobalLoader } from '../services/loader';
window.addEventListener('load', removeGlobalLoader);

import { islogin } from '../services/islogin';
import { genresSearch, genresSearchBig } from '../utiles/get_geners';
import { cardMarkup } from '../services/cardMarkup';

import getPosterPath from '../utiles/get_poster_path';
import { switchBTNs } from '../services/swith-buttons';
import { STATE } from './state';
import { save, load } from '../services/library-storage';
import {
  createCardMarkup,
  appendCardsMarkup,
} from '../services/createCardMarkup';
import { refs, createFilmModal } from '../services/modal-film';
const library = document.querySelector('.isDisabled-js');
library.classList.remove('isDisabled-js');

const gallery = document.querySelector('.gallery');
const watchBTN = document.querySelector("[data-action='watched']");
const qeueBTN = document.querySelector("[data-action='queue']");

watchBTN.addEventListener('click', watchHandler);
qeueBTN.addEventListener('click', qeueHandler);
refs.filmCardListEl.addEventListener('click', createFilmModal);
function watchHandler() {
  const loaded = load('STATE');
  console.log('loaded: ', loaded);

  const watchedMV = loaded.user.movies.watched;
  console.log('watchedMV: ', watchedMV);

  gallery.insertAdjacentHTML('afterbegin', createbigCardMarkup(watchedMV));
}
function qeueHandler() {
  const loaded = load('STATE');
  console.log('loaded: ', loaded);

  const qeueMV = loaded.user.movies.qeue;
  console.log('watchedMV: ', qeueMV);

  gallery.insertAdjacentHTML('afterbegin', createbigCardMarkup(qeueMV));
}

export function createbigCardMarkup(array) {
  // console.log('array: ', array);
  return array
    .map(
      ({
        id,
        genres,
        title,
        vote_average,
        vote_count,
        release_date,
        popularity,
        original_title,
        overview,
        poster_path,
      }) => {
        const stringLength = title.split('');
        const classStatus = quantityLetterOfString(stringLength);
        const posterPath = getPosterPath(poster_path);
        const releaseFullYear = release_date.split('-')[0];
        const rating = vote_average.toFixed(1);
        const genreString = genresSearchBig(genres);
        return cardMarkup({
          id,
          genreString,
          title,
          rating,
          vote_count,
          releaseFullYear,
          posterPath,
          classStatus,
          popularity,
          original_title,
          overview,
        });
      }
    )
    .join('');
}
function quantityLetterOfString(stringLength) {
  if (stringLength.length <= 33) {
    const classStatus = 'isNoActive';
    return classStatus;
  } else {
    const classStatus = 'isActive';
    return classStatus;
  }
}

// Тимчасово

export function bigCardMarkup({
  id,
  genreString,
  title,
  rating,
  vote_count,
  releaseFullYear,
  posterPath,
  classStatus,
  popularity,
  original_title,
  overview,
}) {
  return `<li class="card__item" id="${id}">
              <div class="card__container">
                <img class="card__image" src="${posterPath}" alt="Зображення постера фільму ${title}" loading="lazy"/>
                <div class="card__wrap">
                  <div class="card__activator ${classStatus}">
                    <h2 class="card__name">${title}</h2>
                  </div>
                </div>
                <div class="card__info">
                <p class="card__rating">Vote / Votes ${rating} / ${vote_count}</p>
                <p class="card__popularity">Popularity ${popularity}</p>
                <p class="card__originaltitle">Original Title ${original_title}</p>
                <p class="card__genres">Genre ${genreString}</p>
                <p class="card__about">About ${overview}</p>
              </div>
        </li>`;
}
