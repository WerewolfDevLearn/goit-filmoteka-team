import moviesAPI from './api';
import { STATE } from '../components/state';
export default async function differentFetch(page) {
  if (STATE.keyword) {
    const response = await moviesAPI.getMovieByKeyword(STATE.keyword, page);

    return response;
  } else {
    return await moviesAPI.getPopMovies(page);
  }
}
