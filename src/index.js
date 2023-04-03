import { STATE } from './js/components/state';
import differentFetch from './js/services/different-fetchs';
import {
  createCardMarkup,
  appendCardsMarkup,
} from './js/services/createCardMarkup';
import { startPage } from './js/components/pagination/pagination.js';
import { removeGlobalLoader } from './js/services/loader';
import { showTrailer } from './js/services/trailer';
import { refs, createFilmModal } from './js/services/modal-film';
import toggleModal from './js/components/team-modal';
const teamModalOpen = document.querySelector('[data-open-modal-team]');
teamModalOpen.addEventListener('click', toggleModal);

// Remove global loader when page loaded
window.addEventListener('load', removeGlobalLoader);
get(STATE.page);

refs.filmCardListEl.addEventListener('click', createFilmModal);

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
