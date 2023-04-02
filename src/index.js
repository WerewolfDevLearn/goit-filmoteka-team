import { STATE } from './js/components/state';
import moviesAPI from './js/services/api';
import {
  createCardMarkup,
  appendCardsMarkup,
} from './js/utiles/createCardMarkup';
import { startPage, loadMorePopMovies } from './js/components/pagination';
import { removeGlobalLoader } from './js/services/loader';
import { showTrailer } from './js/services/trailer';

import { refs, createFilmModal } from './js/services/modal-film';

// console.log(STATE);

// Remove global loader when page loaded
window.addEventListener('load', removeGlobalLoader);

function stateModify(date) {
  STATE.movies = date.results;
  STATE.totalPages = date.total_pages;
  console.log('STATE', STATE);
}
async function get2(page) {
  //   const date = await moviesAPI.getMovieByKeyword('cat', 1);
  //   const date = await moviesAPI.getMovieDetails(76600);
  //   const date = await moviesAPI.getRelatedVideos(76600);
  const date = await moviesAPI.getPopMovies(page);
  stateModify(date);
  startPage(STATE.totalPages, moviesAPI.getPopMovies);
  // console.log(date);
  // Remove comment to check trailer modal
  // const firestFilmId = date.results[0].id;
  // showTrailer(firestFilmId);
}

// get();

// Remove global loader when page loaded
window.addEventListener('load', removeGlobalLoader);

// Open FilmModal
refs.filmCardListEl.addEventListener('click', createFilmModal);

get(STATE.page);
