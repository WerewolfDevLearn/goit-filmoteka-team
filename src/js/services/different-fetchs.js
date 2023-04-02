import moviesAPI from './api';
import { STATE } from '../components/state';
export default async function differentFetch(page) {
  if (STATE.keyword) {
    return await moviesAPI.getMovieByKeyword(STATE.keyword, page);
  } else {
    return await moviesAPI.getPopMovies(page);
  }
}
