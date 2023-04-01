import moviesAPI from './js/services/api';
import { startPage, loadMorePopMovies } from './js/utiles/feature_6_7_8';
import { removeGlobalLoader } from './js/services/loader';
import { showTrailer } from './js/services/trailer';

async function get() {
  //   const date = await moviesAPI.getMovieByKeyword('cat', 1);
  //   const date = await moviesAPI.getMovieDetails(76600);
  //   const date = await moviesAPI.getMovieTrailer(76600);
  const date = await moviesAPI.getPopMovies(3);

  // console.log(date);
  // console.log(date.results[0].id);
  const firestFilmId = date.results[5].id;
  showTrailer(firestFilmId);
}
// get();

// Remove global loader when page loaded
window.addEventListener('load', removeGlobalLoader);
