import { STATE } from './js/components/state';
import moviesAPI from './js/services/api';
import { startPage, loadMorePopMovies } from './js/components/pagination';
import { removeGlobalLoader } from './js/services/loader';
import { showTrailer } from './js/services/trailer';
import getGenres from './js/utiles/get_geners';

// console.log(STATE);
async function get(page) {
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
get(STATE.page);

// Remove global loader when page loaded
window.addEventListener('load', removeGlobalLoader);

function stateModify(date) {
  STATE.movies = date.results;
  STATE.totalPages = date.total_pages;
  console.log('STATE', STATE);
}
