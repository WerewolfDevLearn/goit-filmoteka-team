import { STATE } from './js/components/state';
import moviesAPI from './js/services/api';
import { startPage, loadMorePopMovies } from './js/components/pagination';
import { removeGlobalLoader } from './js/services/loader';
import { showTrailer } from './js/services/trailer';
import getGenres from './js/utiles/get_geners';

console.log(STATE);
async function get() {
  //   const date = await moviesAPI.getMovieByKeyword('cat', 1);
  //   const date = await moviesAPI.getMovieDetails(76600);
  //   const date = await moviesAPI.getRelatedVideos(76600);
  // const date = await moviesAPI.getPopMovies(3);
  // console.log(date);
  // Remove comment to check trailer modal
  // const firestFilmId = date.results[0].id;
  // showTrailer(firestFilmId);
}
// get();
// getGenres();
// Remove global loader when page loaded
window.addEventListener('load', removeGlobalLoader);
