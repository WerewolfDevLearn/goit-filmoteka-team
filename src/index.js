import moviesAPI from './js/services/api';
import { removeGlobalLoader } from './js/services/loader';
async function get() {
  //   const date = await moviesAPI.getMovieByKeyword('cat', 1);
  //   const date = await moviesAPI.getMovieDetails(76600);
  //   const date = await moviesAPI.getMovieTrailer(76600);
  const date = await moviesAPI.getPopMovies(3);

  console.log(date);
}
get();

// Remove global loader when page loaded
window.addEventListener('load', removeGlobalLoader);
