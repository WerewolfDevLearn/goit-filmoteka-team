import moviesAPI from './js/services/api';
import {createCardMarkup, appendCardsMarkup} from './js/createCardMarkup';

async function get() {
  //   const date = await moviesAPI.getMovieByKeyword('cat', 1);
  //   const date = await moviesAPI.getMovieDetails(76600);
  //   const date = await moviesAPI.getMovieTrailer(76600);
  const date = await moviesAPI.getPopMovies(9);

 
}
get()






