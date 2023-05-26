import { STATE } from './js/components/state';
import './js/components/search';
import './js/services/swith-buttons';
import differentFetch from './js/services/different-fetchs';
import { createCardMarkup, appendCardsMarkup } from './js/services/createCardMarkup';
import { startPage } from './js/components/pagination/pagination.js';
import { removeGlobalLoader } from './js/services/loader';
import { refs, createFilmModal } from './js/services/modal-film';
import './js/components/team-modal';
import './js/services/theme';
import { ticker } from './js/components/search_running_line';
import './js/services/login';
import './js/services/islogin';
import { islogin } from './js/services/islogin';
import { load } from './js/services/library-storage';
import { switchBTNs } from './js/services/swith-buttons';
import './js/services/floating-buttons';
import { getUserData, writeUserData } from './js/services/firebase/firebaseDatabase';
window.addEventListener('load', removeGlobalLoader);
refs.filmCardListEl.addEventListener('click', createFilmModal);
ticker();
getStateFromLS();
getUserDataBase();

get(STATE.page);

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

function getStateFromLS() {
  const lsState = load('STATE');
  STATE.user.uid = lsState?.user?.uid || '';
  switchBTNs(islogin(STATE.user.uid));
}

async function getUserDataBase() {
  console.log(STATE.user.uid === '');
  if (STATE.user.uid) {
    await getUserData(STATE.user.uid);
  }
}

async;
