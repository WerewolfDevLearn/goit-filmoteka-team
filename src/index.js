import { STATE } from './js/components/state';
import './js/components/search';
import './js/services/swith-buttons';
import differentFetch from './js/services/different-fetchs';
import {
  createCardMarkup,
  appendCardsMarkup,
} from './js/services/createCardMarkup';
import { startPage } from './js/components/pagination/pagination.js';
import { removeGlobalLoader } from './js/services/loader';
import { showTrailer } from './js/services/trailer';
import { refs, createFilmModal } from './js/services/modal-film';
import './js/components/team-modal';
import { ticker } from './js/components/search_running_line';
import './js/services/login';

import {
  userCreation,
  sinInWithEmailPassword,
  signOut,
  signInWithGoogle,
} from './js/services/firebase/firebaseAPI.js';

import {
  writeUserData,
  getUserData,
} from './js/services/firebase/firebaseDatabase';
window.addEventListener('load', removeGlobalLoader);
refs.filmCardListEl.addEventListener('click', createFilmModal);
get(STATE.page);

ticker();

async function get(page) {
  const date = await differentFetch(page);
  stateModify(date);
  startPage(STATE.totalResults);
  appendCardsMarkup(createCardMarkup(STATE.movies));
}
function stateModify(date) {
  STATE.movies = date.results;
  STATE.totalResults = date.total_results;
}

// -------------------------------------------------------------------------------------------- //
// import { btnSwitcher } from './js/services/movie-operations';

// btnSwitcher(true);
// btnSwitcher(false);
